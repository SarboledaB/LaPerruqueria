import { useEffect, useState } from "react";
import { PawPrint } from "lucide-react";
import HeaderDivider from "../HeaderDivider/HeaderDivider.jsx";
import { getComments } from "../../services/commentsService";
import AddCommentModal from "../AddCommentsModal/AddCommentModal.jsx";
import "./Comments.scss";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const COMMENTS_PER_PAGE = 6;

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await getComments();
        setComments(data);
      } catch (err) {
        setError("Error al cargar los comentarios.");
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  const handleAddComment = (newComment) => {
    setComments([{ ...newComment, id: Date.now() }, ...comments]);
    setCurrentPage(1); // Muestra el comentario nuevo en la primera página
  };

  // Paginación
  const totalPages = Math.ceil(comments.length / COMMENTS_PER_PAGE);
  const startIdx = (currentPage - 1) * COMMENTS_PER_PAGE;
  const endIdx = startIdx + COMMENTS_PER_PAGE;
  const commentsToShow = comments.slice(startIdx, endIdx);

  const handlePrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const handleNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  if (loading) return <p>Cargando comentarios...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="comments-container">
      <HeaderDivider title="Testimonios con Huellitas " />
      <button
        className="add-comment-btn"
        onClick={() => setModalOpen(true)}
      >
        Agregar comentario
      </button>
      <AddCommentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddComment}
      />
      <div className="comments-grid">
        {commentsToShow.map((comment) => (
          <div key={comment.id} className="comment-card">
            <h3 className="comment-author">{comment.user_name}</h3>
            <div className="comment-stars">
              {[...Array(5)].map((_, index) => (
                <PawPrint
                  key={index}
                  size={16}
                  fill={index < comment.rating ? "#ff5757" : "none"}
                />
              ))}
            </div>
            <p className="comment-text">{comment.text}</p>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="pagination-controls">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          <span>
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};

export default Comments;

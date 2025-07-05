import { useEffect, useState } from "react";
import { PawPrint } from "lucide-react";
import HeaderDivider from "../HeaderDivider/HeaderDivider.jsx";
import { getComments } from "../../services/commentsService";
import "./Comments.scss";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p>Cargando comentarios...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="comments-container">
      <HeaderDivider title="Testimonios con Huellitas " />
      <div className="comments-grid">
        {comments.map((comment) => (
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
    </div>
  );
};

export default Comments;

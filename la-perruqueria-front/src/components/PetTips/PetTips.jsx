import { useEffect, useState } from "react";
import HeaderDivider from "../HeaderDivider/HeaderDivider.jsx";
import { getTips } from "../../services/commentsService";
import AddTipsModal from "../AddTipsModal/AddTipsModal.jsx";
import "./PetTips.scss";

const PetTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const TIPS_PER_PAGE = 5;

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const data = await getTips();
        setTips(data);
      } catch (err) {
        setError("Error al cargar los tips.");
      } finally {
        setLoading(false);
      }
    };
    fetchTips();
  }, []);

  const handleAddTip = (newTip) => {
    setTips([{ ...newTip, id: Date.now() }, ...tips]);
    setCurrentPage(1); // Muestra el tip nuevo en la primera página
  };

  // Paginación
  const totalPages = Math.ceil(tips.length / TIPS_PER_PAGE);
  const startIdx = (currentPage - 1) * TIPS_PER_PAGE;
  const endIdx = startIdx + TIPS_PER_PAGE;
  const tipsToShow = tips.slice(startIdx, endIdx);

  const handlePrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const handleNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  if (loading) return <p>Cargando tips...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="pet-tips-container">
      <HeaderDivider title="Tips para que tu mascota no te demande por incompetencia" />
      <button
        className="add-comment-btn"
        onClick={() => setModalOpen(true)}
      >
        Agregar tip
      </button>
      <AddTipsModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddTip}
      />
      <div className="pet-tips-grid">
        {tipsToShow.map((tip) => (
          <div key={tip.id} className="pet-tip-card">
            <h3 className="pet-tip-title">{tip.title}</h3>
            <p className="pet-tip-text">{tip.text}</p>
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
            Página {currentPage} de {totalPages}
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

export default PetTips;
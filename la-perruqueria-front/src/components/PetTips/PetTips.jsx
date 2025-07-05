import { useEffect, useState } from "react";
import HeaderDivider from "../HeaderDivider/HeaderDivider.jsx";
import { getTips } from "../../services/commentsService";
import "./PetTips.scss";

const PetTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p>Cargando tips...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="pet-tips-container">
      <HeaderDivider title="Tips para que tu mascota no te demande por incompetencia" />
      <div className="pet-tips-grid">
        {tips.map((tip) => (
          <div key={tip.id} className="pet-tip-card">
            <h3 className="pet-tip-title">{tip.title}</h3>
            <p className="pet-tip-text">{tip.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetTips;
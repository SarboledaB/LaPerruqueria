import React, { useState } from "react";
import "./AddImageModal.scss";

const AddImageModal = ({ isOpen, onClose, onSubmit }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (!imageUrl) throw new Error("La URL de la imagen es requerida");
      await onSubmit(imageUrl);
      setImageUrl("");
      onClose();
    } catch (err) {
      setError(err.message || "Error al agregar la imagen. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>Agregar Imagen</h2>
        {error && <div style={{color: 'red', marginBottom: 8}}>{error}</div>}
        <form onSubmit={handleSubmit} className="add-image-form">
          <label>
            URL de la imagen:
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://..."
              required
            />
          </label>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Agregando..." : "Agregar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddImageModal;

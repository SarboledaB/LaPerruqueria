import React, { useState } from "react";
import { createTip } from "../../services/commentsService";
import "./AddTipsModal.scss";

const AddTipsModal = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const newTip = { title, text };
      await createTip(newTip);
      onSubmit(newTip);
      setTitle("");
      setText("");
      onClose();
    } catch (err) {
      setError("Error al agregar el tip. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>Agregar Tip</h2>
        {error && <div style={{color: 'red', marginBottom: 8}}>{error}</div>}
        <form onSubmit={handleSubmit} className="add-tip-form">
          <label>
            Título:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <label>
            Tip:
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
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

export default AddTipsModal;

import React, { useState } from "react";
import { createComment } from "../../services/commentsService";
import { PawPrint } from "lucide-react";
import "./AddCommentModal.scss";

const AddCommentModal = ({ isOpen, onClose, onSubmit }) => {
  const [userName, setUserName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const newComment = { user_name: userName, rating, text: comment };
      await createComment(newComment);
      onSubmit(newComment);
      setUserName("");
      setRating(0);
      setComment("");
      onClose();
    } catch (err) {
      setError("Error al agregar el comentario. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>Agregar Comentario</h2>
        {error && <div style={{color: 'red', marginBottom: 8}}>{error}</div>}
        <form onSubmit={handleSubmit} className="add-comment-form">
          <label>
            Nombre:
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            Rating:
            <div className="comment-stars" style={{ display: 'flex', gap: 4, cursor: 'pointer', marginTop: 4 }}>
              {[...Array(5)].map((_, index) => (
                <PawPrint
                  key={index}
                  size={24}
                  style={{ transition: 'transform 0.1s', transform: index < rating ? 'scale(1.15)' : 'scale(1)' }}
                  fill={index < rating ? "#ff5757" : "none"}
                  color={index < rating ? "#ff5757" : "#ccc"}
                  onClick={() => setRating(index + 1)}
                  onMouseEnter={() => setRating(index + 1)}
                  onMouseLeave={() => setRating(rating)}
                  data-testid={`star-${index}`}
                />
              ))}
            </div>
          </label>
          <label>
            Comentario:
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
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

export default AddCommentModal;

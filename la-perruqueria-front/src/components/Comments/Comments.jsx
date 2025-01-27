import { Star } from "lucide-react";
import HeaderDivider from "../HeaderDivider/HeaderDivider.jsx";
import "./Comments.scss";

const comments = [
  { id: 1, name: "Juan Pérez", rating: 5, text: "Excelente calidad y servicio." },
  { id: 2, name: "María López", rating: 4, text: "Muy buen producto, aunque un poco caro." },
  { id: 3, name: "Carlos Gómez", rating: 3, text: "El producto es bueno, pero tardó en llegar." },
  { id: 4, name: "Ana Rodríguez", rating: 5, text: "Mi mascota está feliz con su nueva cama!" },
  { id: 5, name: "Pedro Jiménez", rating: 4, text: "Atención rápida y eficiente." },
  { id: 6, name: "Laura Fernández", rating: 5, text: "Volveré a comprar sin duda!" },
];

const Comments = () => {
  return (
    <div className="comments-container">
      <HeaderDivider title="Comentarios" />
      <div className="comments-grid">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-card">
            <h3 className="comment-author">{comment.name}</h3>
            <div className="comment-stars">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={16} fill={index < comment.rating ? "#FACC15" : "none"} />
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
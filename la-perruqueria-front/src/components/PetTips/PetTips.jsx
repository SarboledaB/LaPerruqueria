import HeaderDivider from "../HeaderDivider/HeaderDivider.jsx";
import "./PetTips.scss";

const petTips = [
  { id: 1, title: "Hidratación es clave", text: "Asegúrate de que tu mascota siempre tenga agua limpia y fresca disponible." },
  { id: 2, title: "Ejercicio diario", text: "Saca a tu perro a pasear todos los días para mantenerlo saludable y feliz. Además, el ejercicio regular ayuda a reducir el estrés y la ansiedad en mascotas, mejorando su comportamiento y bienestar general." },
  { id: 3, title: "Alimentación balanceada", text: "Dale a tu mascota una dieta adecuada según su edad y tamaño." },
  { id: 4, title: "Visitas al veterinario", text: "Lleva a tu mascota al veterinario regularmente para chequeos de salud. Es importante mantener al día las vacunas, realizar desparasitaciones y estar atento a cualquier cambio en su comportamiento o apetito." },
  { id: 5, title: "Cuidado del pelaje", text: "Cepilla a tu mascota con frecuencia para evitar enredos y mejorar su bienestar. Algunas razas requieren un cuidado más intensivo, así que infórmate sobre la mejor rutina de aseo para tu amigo peludo." },
  { id: 6, title: "Ambiente seguro", text: "Mantén tu hogar libre de objetos peligrosos para tu mascota." },
];

const PetTips = () => {
  return (
    <div className="pet-tips-container">
      <HeaderDivider title="Tips para que tu mascota no te demande por incompetencia" />
      <div className="pet-tips-grid">
        {petTips.map((tip) => (
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
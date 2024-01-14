import "./ServiceCard.css";
import Image from "react-bootstrap/Image";

function ServiceCard(props) {
  return (
    <div data-testid="service-card" className="card-container">
      <Image src={props.image} alt="service" />
      <div className="card-overlay">
        <h1>{props.title}</h1>
        <h3>{props.desc}</h3>
      </div>
    </div>
  );
}

export default ServiceCard;

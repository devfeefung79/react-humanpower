import "./Banner.css";
import Button from "react-bootstrap/Button";

function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <h1 data-testid="banner-title">Transform Your Career Today</h1>
        <h3>
          Unlock your full potential with expert career coaching from
          Humanpower.
        </h3>
        <Button variant="warning">Get Started</Button>
      </div>
    </div>
  );
}

export default Banner;

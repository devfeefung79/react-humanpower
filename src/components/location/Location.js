import "./Location.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Location() {
  return (
    <div className="location">
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <iframe
              data-testid="location-map"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255.13683544921608!2d-79.40116909009248!3d43.657667982091105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34c1b13cd991%3A0xb88ef7f10d7d7cc0!2s289%20College%20St%2C%20Toronto%2C%20ON%20M5T%201S2!5e0!3m2!1sen!2sca!4v1699476323385!5m2!1sen!2sca"
              width="500"
              height="350"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col md="auto">
            <h1>Location</h1>
            <h3>Room 603, 6/F, 289 College St, Toronto, ON M5T 1S2</h3>
            <h1>Telephone</h1>
            <h3>+1 (647) 000-000</h3>
            <h1>Office Hours</h1>
            <h3>Monday-Friday 10:30-20:00</h3>
            <h3>By Appointment</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Location;

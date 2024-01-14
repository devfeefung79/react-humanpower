import "./Resources.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ProfileOptimatizationImage from "../../assets/profile-optimatization-1.jpg";

function Resources() {
  return (
    <div className="resources">
      <Container>
        <Row>
          <Col>
            <h1 data-testid="resources-title">
              LinkedIn Profile Optimatization
            </h1>
            <text>
              Enhance your professional presence on LinkedIn with a tailored
              profile that showcases your skills, experience, and achievements.
              We will help you optimize your profile to attract potential
              employers and build a strong online brand.
            </text>
            <br />
            <Button variant="success">View resources</Button>
          </Col>
          <Col>
            <Image
              data-testid="resources-image"
              src={ProfileOptimatizationImage}
              alt="profile-optimaization"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Resources;

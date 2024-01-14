import "./Services.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ServiceCard from "../service-card/ServiceCard";
import CareerTranitionImage from "../../assets/career-transition-coaching.jpg";
import InterviewSkillsImage from "../../assets/interview-skills-coaching.jpg";
import PersonalBrandingImage from "../../assets/personal-branding-coaching.jpg";

function Services() {
  return (
    <div className="services">
      <h1 data-testid="services-title">Services</h1>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <ServiceCard
              data-testid="services-career-transition-coaching"
              image={CareerTranitionImage}
              title="Career Transition Coaching"
              desc="Expert guidance in navigating career changes, providing support and actionable strategies."
            />
          </Col>
          <Col md="auto">
            <ServiceCard
              data-testid="services-interview-skills-coaching"
              image={InterviewSkillsImage}
              title="Interview Skills Coaching"
              desc="Enhance your interview performance and increase your chances of securing your dream job."
            />
          </Col>
          <Col md="auto">
            <ServiceCard
              data-testid="services-personal-branding-coaching"
              image={PersonalBrandingImage}
              title="Personal Branding Coaching"
              desc="Develop a powerful personal brand that showcases your talents and attracts opportunities."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;

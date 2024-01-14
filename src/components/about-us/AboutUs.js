import "./AboutUs.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import AboutUsImage from "../../assets/about-us.jpg";

function AboutUs() {
  return (
    <div className="about-us">
      <Container>
        <Row>
          <Col>
            <h1 data-testid="about-us-title">About Us</h1>
            <text>
              Humanpower is leading career coaching agency based in Toronto, ON.
              We are dedicated to helping individuals unlock their full
              potential and achieve their career goals.
              <br />
              <br />
              With a team of experienced career coaches, we provide personalized
              guidance and support to help our clients navigate the
              ever-changing job market, develop their skills, and make informed
              career decisions. Whether you are a recent graduate, a seasoned
              professional looking for a career change, or someone seeking to
              advance in your current role, we are here to empower you with the
              knowledge and tools you need to succeed.
            </text>
          </Col>
          <Col>
            <Image
              data-testid="about-us-image"
              src={AboutUsImage}
              alt="about-us"
              rounded
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;

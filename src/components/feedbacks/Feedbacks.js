import "./Feedbacks.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Feedbacks() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="feedbacks">
      <Carousel
        data-testid="feedbacks-carousel"
        activeIndex={index}
        onSelect={handleSelect}
        data-bs-theme="dark"
      >
        <Carousel.Item>
          <h3>
            Humanpower's career coaching services in Toronto are top-notch! I
            can't thank them enough for the incredible guidance and unwavering
            support they provided me during a pivotal time in my career. Their
            expertise and commitment to helping individuals thrive is truly
            commendable. I'm on a path to success, thanks to their exceptional
            coaching!
          </h3>
          <p>- Sophia</p>
        </Carousel.Item>
        <Carousel.Item>
          <h3>
            I can't say enough about Humanpower's career coaching services in
            Toronto! They truly exceeded my expectations. Their team offered me
            invaluable insights and unwavering support, making my career journey
            a smooth and confident one. I'm genuinely grateful for their
            dedication and expertise in propelling individuals toward success!
          </h3>
          <p>- Emma</p>
        </Carousel.Item>
        <Carousel.Item>
          <h3>
            Humanpower's career coaching services in Toronto were a game-changer
            for me! Their expert guidance and personalized approach helped me
            land my dream job. I'm so grateful for their support and highly
            recommend them to anyone looking to advance their career. Thank you,
            Humanpower!
          </h3>
          <p>- Emily</p>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Feedbacks;

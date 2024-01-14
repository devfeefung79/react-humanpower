import { render, screen } from "@testing-library/react";

// import custom components
import App from "./App";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import AboutUs from "./components/about-us/AboutUs";
import Services from "./components/services/Services";
import Resources from "./components/resources/Resources";
import Feedbacks from "./components/feedbacks/Feedbacks";
import ContactUs from "./components/contact-us/ContactUs";
import Location from "./components/location/Location";
import Footer from "./components/footer/Footer";

describe("App component", () =>
  test("should render app component properly", () => {
    render(<App />);
    const appElemenet = document.querySelector(".App");
    expect(appElemenet).toBeInTheDocument();
  }));

describe(
  "Header component",
  () =>
    test("should render header component properly", () => {
      render(<Header />);
      const headerElemenet = document.querySelector(".header");
      expect(headerElemenet).toBeInTheDocument();
    }),
  test("should render proper title", () => {
    render(<Header />);
    const headerTitle = screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === "span" && content === "Humanpower"
      );
    });
    expect(headerTitle).not.toBeNull();
  }),
  test("should render facebook icon", () => {
    render(<Header />);
    const facebookIcon = screen.getByTestId("header-facebook-icon");
    expect(facebookIcon).not.toBeNull();
  }),
  test("should render instagram icon", () => {
    render(<Header />);
    const instagramIcon = screen.getByTestId("header-instagram-icon");
    expect(instagramIcon).not.toBeNull();
  })
);

describe(
  "Banner component",
  () =>
    test("should render banner component properly", () => {
      render(<Banner />);
      const bannerElemenet = document.querySelector(".banner");
      expect(bannerElemenet).toBeInTheDocument();
    }),
  test("should render proper banner title", () => {
    render(<Banner />);
    const bannerTitle = screen.getByTestId("banner-title");
    expect(bannerTitle).not.toBeNull();
    expect(bannerTitle.textContent).toBe("Transform Your Career Today");
  }),
  test("should render get started button", () => {
    render(<Banner />);
    const bannerButton = screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === "button" && content === "Get Started"
      );
    });
    expect(bannerButton).not.toBeNull();
  })
);

describe(
  "AboutUs component",
  () =>
    test("should render about us component properly", () => {
      render(<AboutUs />);
      const aboutUsElemenet = document.querySelector(".about-us");
      expect(aboutUsElemenet).toBeInTheDocument();
    }),
  test("should render proper about us title", () => {
    render(<AboutUs />);
    const aboutUsTitle = screen.getByTestId("about-us-title");
    expect(aboutUsTitle).not.toBeNull();
    expect(aboutUsTitle.textContent).toBe("About Us");
  }),
  test("should render image in the right column", () => {
    render(<AboutUs />);
    const aboutUsImage = screen.getByTestId("about-us-image");
    expect(aboutUsImage).not.toBeNull();
  })
);

describe(
  "Services component",
  () =>
    test("should render services component properly", () => {
      render(<Services />);
      const servicesElemenet = document.querySelector(".services");
      expect(servicesElemenet).toBeInTheDocument();
    }),
  test("should render proper services title", () => {
    render(<Services />);
    const servicesTitle = screen.getByTestId("services-title");
    expect(servicesTitle).not.toBeNull();
    expect(servicesTitle.textContent).toBe("Services");
  }),
  test("should pass correct title to career transition coaching services card", () => {
    render(<Services />);
    const servicesCards = screen.getAllByTestId("service-card");
    expect(servicesCards[0].querySelector("h1").innerHTML).toBe(
      "Career Transition Coaching"
    );
  }),
  test("should pass correct title to interview skills coaching services card", () => {
    render(<Services />);
    const servicesCards = screen.getAllByTestId("service-card");
    expect(servicesCards[1].querySelector("h1").innerHTML).toBe(
      "Interview Skills Coaching"
    );
  }),
  test("should pass correct title to personal branding coaching services card", () => {
    render(<Services />);
    const servicesCards = screen.getAllByTestId("service-card");
    expect(servicesCards[2].querySelector("h1").innerHTML).toBe(
      "Personal Branding Coaching"
    );
  })
);

describe(
  "Resources component",
  () =>
    test("should render resources component properly", () => {
      render(<Resources />);
      const resourcesElemenet = document.querySelector(".resources");
      expect(resourcesElemenet).toBeInTheDocument();
    }),
  test("should render proper resources title", () => {
    render(<Resources />);
    const resourcesTitle = screen.getByTestId("resources-title");
    expect(resourcesTitle).not.toBeNull();
    expect(resourcesTitle.textContent).toBe("LinkedIn Profile Optimatization");
  }),
  test("should render view resources button", () => {
    render(<Resources />);
    const resourcesButton = screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === "button" &&
        content === "View resources"
      );
    });
    expect(resourcesButton).not.toBeNull();
  }),
  test("should render resources image", () => {
    render(<Resources />);
    const resourcesImage = screen.getByTestId("resources-image");
    expect(resourcesImage).not.toBeNull();
  })
);

describe(
  "Feedbacks component",
  () =>
    test("should render feedbacks component properly", () => {
      render(<Feedbacks />);
      const feedbacksElemenet = document.querySelector(".feedbacks");
      expect(feedbacksElemenet).toBeInTheDocument();
    }),
  test("should render feedbacks carousel", () => {
    render(<Feedbacks />);
    const feedbacksCarousel = screen.getByTestId("feedbacks-carousel");
    expect(feedbacksCarousel).not.toBeNull();
  })
);

describe(
  "ContactUs component",
  () =>
    test("should render contact us component properly", () => {
      render(<ContactUs />);
      const contactUsElemenet = document.querySelector(".contact-us");
      expect(contactUsElemenet).toBeInTheDocument();
    }),
  test("should render the name form input", () => {
    render(<ContactUs />);
    const nameInput = document.querySelector("#name-input");
    expect(nameInput).not.toBeNull();
  }),
  test("should render the email form input", () => {
    render(<ContactUs />);
    const emailInput = document.querySelector("#email-input");
    expect(emailInput).not.toBeNull();
  }),
  test("should render the message form input", () => {
    render(<ContactUs />);
    const messageInput = document.querySelector("#message-input");
    expect(messageInput).not.toBeNull();
  }),
  test("should render the send button", () => {
    render(<ContactUs />);
    const sendButton = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === "button" && content === "Send";
    });
    expect(sendButton).not.toBeNull();
  }),
  test("should render proper contact us title", () => {
    render(<ContactUs />);
    const contactUsTitle = screen.getByTestId("contact-us-title");
    expect(contactUsTitle).not.toBeNull();
    expect(contactUsTitle.textContent).toBe("Contact Us Today");
  }),
  test("should render the facebook icon", () => {
    render(<ContactUs />);
    const facebookIcon = screen.getByTestId("contact-us-facebook-icon");
    expect(facebookIcon).not.toBeNull();
  }),
  test("should render the instagram icon", () => {
    render(<ContactUs />);
    const instagramIcon = screen.getByTestId("contact-us-instagram-icon");
    expect(instagramIcon).not.toBeNull();
  })
);

describe(
  "Location component",
  () =>
    test("should render location component properly", () => {
      render(<Location />);
      const locationElemenet = document.querySelector(".location");
      expect(locationElemenet).toBeInTheDocument();
    }),
  test("should render location map", () => {
    render(<Location />);
    const locationMap = screen.getByTestId("location-map");
    expect(locationMap).not.toBeNull();
  })
);

describe("Footer component", () =>
  test("should render footer component properly", () => {
    render(<Footer />);
    const footerElemenet = document.querySelector(".footer");
    expect(footerElemenet).toBeInTheDocument();
  }));

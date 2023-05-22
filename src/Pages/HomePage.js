import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import img1 from "../Images/image1.jpg";
import img2 from "../Images/image2.jpg";
import img3 from "../Images/image3.jpg";

const HomePage = () => {
  return (
    <>
      <div className="container p-0 m-0 mx-auto" style={{ width: "100%" }}>
        <Header />
        <CCarousel controls transition="crossfade">
          <CCarouselItem>
            <CImage
              className="d-block w-100"
              src={img1}
              alt="slide 1"
              style={{ width: 250, height: 500 }}
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block w-100"
              src={img2}
              alt="slide 2"
              style={{ width: 250, height: 500 }}
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block w-100"
              src={img3}
              alt="slide 3"
              style={{ width: 250, height: 500 }}
            />
          </CCarouselItem>
        </CCarousel>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;

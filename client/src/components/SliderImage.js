import { Image, Box } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function SliderImage() {
  const slideData = [
    {
      image: "./images/About/img1.svg",
    },
    {
      image: "./images/About/img2.svg",
    },
    {
      image: "./images/About/img3.svg",
    },
    {
      image: "./images/About/img1.svg",
    },
    {
      image: "./images/About/img2.svg",
    },
  ];
  return (
    <Carousel
      interval="8000"
      autoPlay
      infiniteLoop
      showStatus={false}
      centerMode
      centerSlidePercentage="20"
    >
      {slideData.map((slide) => {
        return <Image src={slide.image} height="400px" />;
      })}
    </Carousel>
  );
}

export default SliderImage;

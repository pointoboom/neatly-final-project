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
    {
      image: "./images/About/img2.svg",
    },
    {
      image: "./images/About/img2.svg",
    },
    {
      image: "./images/About/img2.svg",
    },
    {
      image: "./images/About/img2.svg",
    },
  ];

  return (
    <Carousel
      infiniteLoop
      showStatus={false}
      centerMode
      centerSlidePercentage="15"
      showIndicators={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute z-10 top-[200px]  left-[200px] "
          >
            <Image src="./images/About/Prevarrow.svg" />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute z-10 top-[200px] right-[200px] "
          >
            <Image src="./images/About/Nextarrow.svg" />
          </button>
        )
      }
    >
      {slideData.map((slide) => {
        return <Image src={slide.image} height="500px" />;
      })}
    </Carousel>
  );
}

export default SliderImage;

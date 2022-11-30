import { Image, Box } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function SliderImage() {
  const slideData = [
    {
      image:
        "https://res.cloudinary.com/dyfc6ffal/image/upload/v1669783037/slidedata/2cfa8c73719c6a91b4b0d1acd972e5f3_sdoyzb.webp",
    },
    {
      image:
        "https://res.cloudinary.com/dyfc6ffal/image/upload/v1669783037/slidedata/317482891_kqvlwc.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dyfc6ffal/image/upload/v1669783037/slidedata/317478313_bxnie3.jpg",
    },
    // {
    //   image:
    //     "https://res.cloudinary.com/dyfc6ffal/image/upload/v1669783036/slidedata/247791999_ai4ghj.jpg",
    // },
    {
      image:
        "https://res.cloudinary.com/dyfc6ffal/image/upload/v1669783036/slidedata/142640165_115787740446918_7223652144255639282_n_sfjpzx.jpg",
    },
    {
      image: "https://res.cloudinary.com/dyfc6ffal/image/upload/v1669783037/slidedata/279043739_5173390632699953_3570556530460733161_n_x6s1gr.jpg",
    },
    {
      image: "https://res.cloudinary.com/dyfc6ffal/image/upload/v1669783036/slidedata/143415319_115787730446919_6968223846291386393_n_frmrvz.jpg",
    },
    {
      image: "https://res.cloudinary.com/dyfc6ffal/image/upload/v1669783036/slidedata/142355557_115787763780249_4874431403769728257_n_driks7.jpg",
    },
    {
      image: "https://res.cloudinary.com/dyfc6ffal/image/upload/v1669783036/slidedata/804ffbbe01e89edfc414d2db7b9cc981_ddtomb.webp",
    },
  ];

  return (
    <Carousel
      infiniteLoop
      showStatus={false}
      centerMode
      centerSlidePercentage="25"
      showIndicators={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute z-10 top-[250px]  left-[200px] "
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
            className="absolute z-10 top-[250px] right-[200px] "
          >
            <Image src="./images/About/Nextarrow.svg" />
          </button>
        )
      }
    >
      {slideData.map((slide) => {
        return <Image src={slide.image} height="full"  objectFit="cover" />;
      })}
    </Carousel>
  );
}

export default SliderImage;

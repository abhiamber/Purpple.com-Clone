import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";

export default function AsCatSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
        breakpoint: 913,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <Box mt="50px" pl={["50px", null, "80px"]} pr={["50px", null, "80px"]}>
      <Slider {...settings}>
        <Box>
          <Image
            // w="250px"
            h={["170px", "270px", "370px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1669991841_face-creams.jpg"
          />
        </Box>
        <Box>
          <Image
            // w="250px"
            h={["170px", "270px", "370px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1669991841_face-serums.jpg"
          />
        </Box>
        <Box>
          <Image
            // w="250px"
            h={["170px", "270px", "370px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1669991839_lipsticks.jpg"
          />
        </Box>
        <Box>
          <Image
            // w="250px"
            h={["170px", "270px", "370px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1669991840_foundations.jpg"
          />
        </Box>
        <Box>
          <Image
            // w="250px"
            h={["170px", "270px", "370px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1669991842_eyeshadows.jpg"
          />
        </Box>
        <Box>
          <Image
            // w="250px"
            h={["170px", "270px", "370px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1669991842_eyeliners.jpg"
          />
        </Box>
      </Slider>
    </Box>
  );
}

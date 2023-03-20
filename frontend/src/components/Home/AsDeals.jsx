import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";

export default function AsDeals() {
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
    autoplaySpeed: 6000,
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
    <Box pl={["30px", null, null]} pr={["30px", null, null]}>
      <Box mt="60px">
        <Image
          w="1260px"
          h={["120px", "167px", "267px"]}
          m="auto"
          src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674099518_mamaearth_web_thick-strip.gif"
        />
      </Box>
      <Box mt="60px">
        <Image
          w="1256px"
          h={["28px", "38px", "98px"]}
          m="auto"
          src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673939041_unmissable-deals_web_10.gif"
        />
      </Box>
      <Box mt="40px" pl={[null, null, "60px"]} pr={[null, null, "60px"]}>
        <Slider {...settings}>
          <Box>
            <Image
              w="250px"
              h={["170px", "207px", "370px"]}
              src="https://media6.ppl-media.com/tr:w-457,ar-300-431,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674045530_flat-35-time.jpg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h={["170px", "207px", "370px"]}
              src="https://media6.ppl-media.com/tr:w-457,ar-300-431,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674045527_299-time.jpg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h={["170px", "207px", "370px"]}
              src="https://media6.ppl-media.com/tr:w-457,ar-300-431,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674045524_199-time.jpg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h={["170px", "207px", "370px"]}
              src="https://media6.ppl-media.com/tr:w-457,ar-300-431,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674045521_99-time.jpg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h={["170px", "207px", "370px"]}
              src="https://media6.ppl-media.com/tr:w-457,ar-300-431,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674045517_75-time.jpg"
            />
          </Box>
        </Slider>
      </Box>
    </Box>
  );
}

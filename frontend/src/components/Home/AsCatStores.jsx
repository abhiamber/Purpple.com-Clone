import { Box, Heading, Image } from "@chakra-ui/react";
import Slider from "react-slick";

export default function AsCatStores() {
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
    <Box>
      <Box pl="120px" pr="120px" mt="40px">
        <Heading
          as="h1"
          fontSize="22px"
          letterSpacing="2px"
          textAlign={["center", "center", "left"]}
        >
          CATEGORY STORES
        </Heading>
      </Box>
      <Box mt="50px" pl={["30px", null, null]} pr={["30px", null, null]}>
        <Slider {...settings}>
          <Box>
            <Image
              w="250px"
              h={["170px", "207px", "370px"]}
              src="https://media6.ppl-media.com/tr:w-457,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673944050_skincare-2.jpg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h={["170px", "207px", "370px"]}
              src="https://media6.ppl-media.com/tr:w-457,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674108170_makeup-3.jpg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h={["170px", "207px", "370px"]}
              src="https://media6.ppl-media.com/tr:w-457,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673944052_haircare-4.jpg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h={["170px", "207px", "370px"]}
              src="https://media6.ppl-media.com/tr:w-457,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673944052_bodycare-1.jpg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h={["170px", "207px", "370px"]}
              src="https://media6.ppl-media.com/tr:w-457,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673944049_splurge-1.jpg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h={["170px", "207px", "370px"]}
              src="https://media6.ppl-media.com/tr:w-457,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673944053_appliances-1.jpg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h={["170px", "207px", "370px"]}
              src="https://media6.ppl-media.com/tr:w-457,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673944051_k-beauty.jpg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h={["170px", "207px", "370px"]}
              src="https://media6.ppl-media.com/tr:w-457,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673949955_fem-hygiene-1.jpg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h={["170px", "207px", "370px"]}
              src="https://media6.ppl-media.com/tr:w-457,ar-17-24,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674107938_gifts-.-combos.jpg"
            />
          </Box>
        </Slider>
      </Box>
      <Box mt="60px">
        <Image
          w="1256px"
          h={["38px", "48px", "98px"]}
          m="auto"
          src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674026919_reminder-elite-1280x100.gif"
        />
      </Box>
    </Box>
  );
}

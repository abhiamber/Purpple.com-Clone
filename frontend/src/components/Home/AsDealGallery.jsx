import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";

export default function AsDealGallery() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    slidesToScroll: 1,
  };
  return (
    <Box>
      <Box mt="60px" pl={["30px", null, null]} pr={["30px", null, null]}>
        <Slider {...settings}>
          <Box>
            <Image
              w="1260px"
              h={["155px", "225px", "267px"]}
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674054467_loreal-group_webstrip-12-1.jpg"
              m="auto"
            />
          </Box>
          <Box>
            <Image
              w="1260px"
              h={["155px", "225px", "267px"]}
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674056836_body-shop-flat-20-web.jpg"
              m="auto"
            />
          </Box>
          <Box>
            <Image
              w="1260px"
              h={["155px", "225px", "267px"]}
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1667649361_exclusive-web.gif?tr=f-gif"
              m="auto"
            />
          </Box>
          <Box>
            <Image
              w="1260px"
              h={["155px", "225px", "267px"]}
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674032016_web.gif?tr=f-gif"
              m="auto"
            />
          </Box>
        </Slider>
      </Box>
      <SimpleGrid
        columns={[1, 1, 2]}
        pl={["30px", null, "80px"]}
        pr={["30px", null, "80px"]}
        mt="50px"
      >
        <Box>
          <Image
            w="635px"
            h={["210px", "310px", "310px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673953608_lakme-720x350.jpeg"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h={["210px", "310px", "310px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674056586_creme-blush3.gif?tr=f-gif"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h={["210px", "310px", "310px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674066285_mamaearth-720x350.jpeg"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h={["210px", "310px", "310px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673953610_maybelline-720x350.jpeg"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h={["210px", "310px", "310px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674028925_pb-gif-celeb_rosehip-1.gif?tr=f-gif"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h={["210px", "310px", "310px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674106514_pb-gif-celeb-7-1.gif?tr=f-gif"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h={["210px", "310px", "310px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673953601_biotique-720x350.jpeg"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h={["210px", "310px", "310px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673978889_faces-1.gif?tr=f-gif"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
}

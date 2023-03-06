import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from "@chakra-ui/react";

export default function AsImgSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <Box>
        <Image
          src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673768282_webs-banner-copy-2.jpg"
          m="auto"
        />
      </Box>
      <Box>
        <Image
          src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673671978_hp-web-2.gif"
          m="auto"
        />
      </Box>
      <Box>
        <Image
          src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673866064_maybelline_web_hp.jpg"
          m="auto"
        />
      </Box>
      <Box>
        <Image
          src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673527119_k-beauty-web.gif"
          m="auto"
        />
      </Box>
      <Box>
        <Image
          src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1665665408_winter-essentials_hp_web.gif"
          m="auto"
        />
      </Box>
      <Box>
        <Image
          src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1669182865_magical-makeup-guide-web.gif"
          m="auto"
        />
      </Box>
    </Slider>
  );
}

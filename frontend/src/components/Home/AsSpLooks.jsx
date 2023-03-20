import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import Slider from "react-slick";

export default function AsSpLooks() {
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
    <>
      <Box mt="50px" pl={["30px", null, null]} pr={["30px", null, null]}>
        <Image
          w="1256px"
          h={["28px", "38px", "98px"]}
          m="auto"
          src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673939275_republic-day-special-looksapp.gif"
        />
      </Box>
      <Box mt="40px" pl={["30px", null, "80px"]} pr={["30px", null, "80px"]}>
        <Slider {...settings}>
          <Box>
            <Image
              w="250px"
              h={["170px", "207px", "370px"]}
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673940306_haircare.jpg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h={["170px", "207px", "370px"]}
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673940306_the-eye_.jpg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h={["170px", "207px", "370px"]}
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673940307_glowing-skin.jpg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h={["170px", "207px", "370px"]}
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673940304_herbal-skincare.jpg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h={["170px", "207px", "370px"]}
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673940305_lip-makeup.jpg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h={["170px", "207px", "370px"]}
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673940305_glam-makeup.jpg"
            />
          </Box>
          <Box>
            <Image
              w="250px"
              h={["170px", "207px", "370px"]}
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673940304_indian-aturveda.jpg"
            />
          </Box>
        </Slider>
      </Box>
      <SimpleGrid
        columns={[1, 1, 2]}
        pl={["30px", null, "120px"]}
        pr={["30px", null, "120px"]}
        mt="50px"
      >
        <Box>
          <Image
            w="635px"
            h={["210px", "310px", "310px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674048220_republic-day-sale-celeb-banner-1.gif?tr=f-gif"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h={["210px", "310px", "310px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674104449_orange-bg-model-sku.png"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h={["210px", "310px", "310px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673953605_garnier-720x350.jpeg"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h={["210px", "310px", "310px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673962446_bh.gif?tr=f-gif"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h={["210px", "310px", "310px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674106765_schwarzkopf-professional.jpeg"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h={["210px", "310px", "310px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673953613_plum-720x350.jpeg"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h={["210px", "310px", "310px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674025994_republic-elite-celebs.gif?tr=f-gif"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h={["210px", "310px", "310px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673961168_wow-720x350.jpeg"
          />
        </Box>
      </SimpleGrid>
    </>
  );
}

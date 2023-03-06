import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import Slider from "react-slick";

export default function AsCatGallery() {
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
    <>
      <Box mt="50px">
        <Slider {...settings}>
          <Box>
            <Image
              w="1260px"
              h={["135px","255px","267px"]}
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673946004_free-gift-web.gif"
              m="auto"
            />
          </Box>
          <Box>
            <Image
              w="1260px"
              h={["135px","255px","267px"]}
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673946153_appfirst-web.gif"
              m="auto"
            />
          </Box>
          <Box>
            <Image
              w="1260px"
              h={["135px","255px","267px"]}
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673946201_welcome-web-.gif"
              m="auto"
            />
          </Box>
          <Box>
            <Image
              w="1260px"
              h={["135px","255px","267px"]}
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673946256_extra25_thick-strip_web.jpg"
              m="auto"
            />
          </Box>
          <Box>
            <Image
              w="1260px"
              h={["135px","255px","267px"]}
              src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673948690_free-shipping-web-2.gif"
              m="auto"
            />
          </Box>
        </Slider>
      </Box>
      <SimpleGrid columns={[1,1,2]} pl={[null,null,"120px"]} pr={[null,null,"120px"]} mt="50px">
        <Box>
          <Image w="635px" h={["210px","310px","310px"]} src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674042630_orange-bg-model-sku.png" />
        </Box>
        <Box>
          <Image w="635px" h={["210px","310px","310px"]} src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673961066_streax-streax-professional-720x350.jpeg" />
        </Box>
        <Box>
          <Image w="635px" h={["210px","310px","310px"]} src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674035353_m-a-c-1.jpeg" />
        </Box>
        <Box>
          <Image w="635px" h={["210px","310px","310px"]} src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674050833_pb-gif-celeb-1.gif?tr=f-gif" />
        </Box>
        <Box>
          <Image w="635px" h={["210px","310px","310px"]} src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673961015_loreal-720x350.jpeg" />
        </Box>
        <Box>
          <Image w="635px" h={["210px","310px","310px"]} src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674028922_pu-gif-celeb-50.gif?tr=f-gif" />
        </Box>
        <Box>
          <Image w="635px" h={["210px","310px","310px"]} src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673953609_lotus-herbal-720x350.jpeg" />
        </Box>
        <Box>
          <Image w="635px" h={["210px","310px","310px"]} src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673953606_kaja.gif?tr=f-gif" />
        </Box>
        <Box>
          <Image w="635px" h={["210px","310px","310px"]} src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674028919_blush.gif?tr=f-gif" />
        </Box>
        <Box>
          <Image w="635px" h={["210px","310px","310px"]} src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673961496_minimalist-720x350.jpeg" />
        </Box>
      </SimpleGrid>
    </>
  );
}

import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import Slider from "react-slick";

export default function AsSpLooksGallery() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        slidesToScroll: 1
      };

  return (
    <>
      <Box mt="50px">
        <Slider {...settings}>
          <Box>
            <Image
              w="1260px"
              h={["155px","225px","267px"]}
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673933775_best-deals-web.jpg"
              m="auto"
            />
          </Box>
          <Box>
            <Image
              w="1260px"
              h={["155px","225px","267px"]}
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673942496_half-pice-web.gif?tr=f-gif"
              m="auto"
            />
          </Box>
          <Box>
            <Image
              w="1260px"
              h={["155px","225px","267px"]}
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673942767_offerslikeneveruptosku_web.gif?tr=f-gif"
              m="auto"
            />
          </Box>
          <Box>
            <Image
              w="1260px"
              h={["155px","225px","267px"]}
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673942045_hidden-gems-on-purplle_web.jpg"
              m="auto"
            />
          </Box>
          <Box>
            <Image
              w="1260px"
              h={["155px","225px","267px"]}
              src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673530926_sanfesirona_web_strip.jpg"
              m="auto"
            />
          </Box>
        </Slider>
      </Box>
      <SimpleGrid columns={[1,1,2]} pl={[null,null,"120px"]} pr={[null,null,"120px"]} mt="50px">
        <Box>
          <Image
            w="635px"
            h={["210px","310px","310px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674025831_cetaphil.jpeg"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h={["210px","310px","310px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673953613_ponds-720x350.jpeg"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h={["210px","310px","310px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673957935_ikonic-professional-720x350.jpeg"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h={["210px","310px","310px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673953608_kanvar.jpeg"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h={["210px","310px","310px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674051951_dot-key.png"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h={["210px","310px","310px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673961168_wow-720x350.jpeg"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h={["210px","310px","310px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673953603_cuffs-lashes.jpeg"
          />
        </Box>
        <Box>
          <Image
            w="635px"
            h={["210px","310px","310px"]}
            src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673953599_bblunt.jpeg"
          />
        </Box>
      </SimpleGrid>
      <SimpleGrid columns={[1,1,2]} pl={[null,null,"120px"]} pr={[null,null,"120px"]} mt="30px">
        <Box>
            <Image w="630px" h={["250px","350px","450px"]} src="https://media6.ppl-media.com/tr:w-640,ar-320-229,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674046022_slicebannerweb_01-1.gif" />
        </Box>
        <Box>
            <Image w="630px" h={["250px","350px","450px"]} src="https://media6.ppl-media.com/tr:w-640,ar-320-229,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674046021_slicebannerweb_02-1.gif" />
        </Box>
      </SimpleGrid>
    </>
  );
}

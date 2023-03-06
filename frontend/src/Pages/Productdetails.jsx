import React from "react";
import { useEffect } from "react";
import { SimpleGrid, Image, Box, Text, Button } from "@chakra-ui/react";
import "./productdetails.css";
import delivery from "../Pages/delivery.png";
import { NavLink, useParams } from "react-router-dom";
import BackendURL from "../BackendURL";

const fourstar = "https://cdn-icons-png.flaticon.com/512/992/992000.png";
const fivestar = "https://cdn-icons-png.flaticon.com/128/992/992001.png";
const threestar = "https://cdn-icons-png.flaticon.com/128/991/991999.png";
const twostar = "https://cdn-icons-png.flaticon.com/128/991/991998.png";
const onestar = "https://cdn-icons-png.flaticon.com/128/991/991997.png";

const Productdetails = () => {
  const [pro, setPro] = React.useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`${BackendURL}/prod/productId/${params.id}`)
      .then((res) => res.json())
      .then((res) => setPro(res.messg))
      .catch((err) => console.log(err));
  }, [params.id]);
  // console.log(pro);

  //   console.log(pro);

  const handleAdd = async () => {
    try {
      fetch(`${BackendURL}/cart/`, {
        method: "POST",
        body: JSON.stringify({ productId: pro._id }),
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      alert("Product added successfully");
    } catch (err) {
      alert("You cannot add product without Login");
    }

    // const res = await fetch(`${BackendURL}/order/post`, {
    //   method: "POST",
    //   body: JSON.stringify(pro),
    //   headers: {
    //     'Content-Type': 'application/json',
    //     "email": localStorage.getItem("email")
    //   }
    // }).then((res) => res.json()).then((res) => {
    //   console.log(res)
    // }).catch((err) => {
    //   console.log(err)
    // });
  };

  let rating = "";
  if (pro.rating === 5) {
    rating = fivestar;
  } else if (pro.rating === 4) {
    rating = fourstar;
  } else if (pro.rating === 3) {
    rating = threestar;
  } else if (pro.rating === 2) {
    rating = twostar;
  } else rating = onestar;
  return (
    <SimpleGrid columns={[1, 1, 1, 1, 2]} className="product_details_container">
      <Box>
        <Box>
          <Image
            className="product_image"
            src={pro.image_link}
            alt={pro.name}
            width={["300px", "600px", "550px"]}
          />
        </Box>
        <Box textAlign="left">
          <Text m="18px" fontSize={"18px"} fontWeight="600">
            Description
          </Text>
          <Text
            lineHeight="25px"
            fontSize={"14px"}
            textAlign="justify"
            fontFamily={"sans-serif"}
          >
            {pro.description}
          </Text>
        </Box>
      </Box>
      <Box textAlign="left" width="90%">
        <Text fontSize="20px" fontWeight={"700"}>
          This {pro.name} is from {pro.brand}{" "}
        </Text>
        <Text display="flex" alignItems="center" fontSize={"14px"}>
          <Image src={rating} alt={pro.rating} width="70px" height="56px" />
          (102 Rating | {pro.review} reviews)
        </Text>
        <Text fontSize={"20px"}>
          <b>₹{pro.price * 75}</b>{" "}
          <span style={{ fontSize: "14px", color: "green" }}>(save 112)</span>
        </Text>

        <Text marginTop={"5px"}>
          <b style={{ fontSize: "18px" }}>Quantities</b> : Only{" "}
          <b style={{ color: "red" }}>{pro.quantity}</b> items left!!!
        </Text>
        <SimpleGrid columns={[1, 2, 2, 2]} gap="8px" marginTop={"20px"}>
          <Box width={"100%"}>
            <Button
              className="cart_button"
              bg="#6600ff"
              _hover={{ bg: "#6600ff" }}
              onClick={handleAdd}
            >
              Add To Cart
            </Button>
          </Box>
          <Box width={"100%"}>
            <Button
              bg="white"
              border="1px solid grey"
              padding="25px 60px"
              width="100%"
            >
              Wishlist
            </Button>
          </Box>
        </SimpleGrid>
        <Box className="elite_member">
          <Image
            src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1594961611_elite-logo.png"
            alt="elite"
            width={"35px"}
            height="50px"
          />
          <Box>
            <Text fontSize={"14px"}>
              Elite members get free shipping on this purchase.
            </Text>
            <Text color={"blue.400"} fontWeight="bold">
              Join Now
            </Text>
          </Box>
        </Box>
        <Box className="pincodediv">
          <Box display={"flex"}>
            <Image
              width="30px"
              height="30px"
              src="https://cdn-icons-png.flaticon.com/128/9335/9335511.png"
              alt="truck"
            />
            <input type="number" placeholder="Enter pincode" />
          </Box>
          <p>Change</p>
        </Box>
        <Box marginTop={"20px"}>
          <Image src={delivery} alt="delivery" />
        </Box>
        <Box display={"flex"} justifyContent="space-between" marginTop={"10px"}>
          <Box>
            <Box display={"flex"} gap="5px">
              <Text color={"gray.600"} fontSize="14px">
                Sold By :{" "}
              </Text>
              <Text fontSize={"14px"} fontWeight="500">
                Avni Beauty Distributors LLP{" "}
              </Text>
            </Box>
            <Text fontSize={"14px"} fontWeight="500">
              {" "}
              (MP)- PB MUM
            </Text>
            <Image
              src="https://media5.ppl-media.com/mediafiles/ecomm/misc/1472630541_purplle-fullfilled.png"
              alt="certified"
            />
          </Box>
          <Box>
            <Text
              color={"#2d4ef3ef"}
              _hover={{ cursor: "pointer" }}
              fontSize="14px"
            >
              View All 5 Sellers
            </Text>
          </Box>
        </Box>
      </Box>
    </SimpleGrid>
  );
};

export default Productdetails;

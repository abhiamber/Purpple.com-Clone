// import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import AsBigBrand from "../components/Home/AsBigBrand";
import AsBigDeals from "../components/Home/AsBigDeals";
import AsBottomSection from "../components/Home/AsBottomSection";
import AsBudgetBuy from "../components/Home/AsBudgetBuy";
import AsCatGallery from "../components/Home/AsCatGallery";
import AsCatSlider from "../components/Home/AsCatSlider";
import AsCatStores from "../components/Home/AsCatStores";
import AsDealGallery from "../components/Home/AsDealGallery";
import AsDeals from "../components/Home/AsDeals";
import AsFrGift from "../components/Home/AsFrGift";
import AsImgGallery from "../components/Home/AsImgGallery";
import AsSpLooks from "../components/Home/AsSpLooks";
import AsSpLooksGallery from "../components/Home/AsSpLooksGallery";

export default function Home() {
  return (
    <Box m="auto" w="98%">
      <AsImgGallery />
      <AsCatSlider />
      <AsDeals />
      <AsDealGallery />
      <AsCatStores />
      <AsCatGallery />
      <AsSpLooks />
      <AsSpLooksGallery />
      <AsFrGift />
      <AsBudgetBuy />
      <AsBigBrand />
      <AsBigDeals />
      <AsBottomSection />
    </Box>
  );
}

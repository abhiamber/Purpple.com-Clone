import AllRoutes from "./Pages/Allroutes";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import { useLayoutEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import AsFooter from "./components/Home/AsFooter";
function App() {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = (e) => {
    // console.log(scrolled,typeof window.scrollY);

    if (scrolled && window.scrollY === 0) {
      setScrolled(false);
    }

    setScrolled(window.scrollY > 0);
  };

  // console.log("bjhbj", window.scrollY);

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
      {scrolled ? (
        <Navbar />
      ) : (
        <Box>
          <Header />
          <hr />
          <Box display={{ md: "none", lg: "none", xl: "none" }}>
            <Navbar />
          </Box>
          <SearchBox />
        </Box>
      )}
      <AllRoutes />
      <AsFooter />
      <Box bg="black" color="white" p="10px" textAlign={"center"}>
        @ All Right Reseerved{" "}
      </Box>
    </Box>
  );
}

export default App;

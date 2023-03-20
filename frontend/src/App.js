import AllRoutes from "./Pages/Allroutes";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import { useLayoutEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import AsFooter from "./components/Home/AsFooter";
import Favicon from "react-favicon";
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
      <Favicon url="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB8klEQVR4AZTTM4MdURiA4febOXMZ27ZZbxdbfyBVmqCNkzpOuti2mti2bXN5Z++d+db2Mzy2XGfqAmAWUJea+Q8sz6ngL1CPQkoeATT3EgQQyvHPlCgsYBrWRgKGxK+U7P9aBFrWz/5Pxf34CzxKq2coRhxDm6VTiA5sy98Dd2gwrj/BDk2I/0zm6+rT/FhzBs0sWYtFcQJO87qEe7akzrQkLt96yZmdl0jUj9Bq8Tjio3vj4iMUMVTg3PZL7JqzGwMk0lyGzhhOcOIArh2/Sy9XiaiggEU5FHh18zUkPCTu8e7GKwDqt27Ij4jNA+OTIopUVIEAwaCDpWADxrYAwPMxqvyzlGeOz19LscptHug3tC+160UIR4N0TeoBwK8XX9GMOA6CC3y0fUy5zQP9h/ej/p6ZeLE4XbIrSP2RzOM917ESirGFIGCrlD8EHzi/7gyJjExa9mzNl7vvODpjM58uvcCxLRyFQM5T0SoI8PbGa04uOkDDxnXxkzPw/qUTEsEgeYU172uogLEEL90l+eNvgkDQEmyVvNYRApTXA1/5du8DXxwh7WcKjlg4lmAUTEHhYo+jQpnDlBK0uRdSvnhxjKcEFIJ5rRJWiKoQ9fO+IeW/BawA/pOHOq7H4GSPji4YBRuwyetFIGuogfcJqHkiADlYwyogn7qfAAAAAElFTkSuQmCC"></Favicon>
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
        @ All right reserved{" "}
      </Box>
    </Box>
  );
}

export default App;


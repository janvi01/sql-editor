import React from "react";
import FrontLayout from "./pages/FrontLayout";
import Footer from "./components/Footer/Footer";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box bgColor={"blackAlpha.500"}>
      <FrontLayout />
      <Footer />
    </Box>
  );
}

export default App;

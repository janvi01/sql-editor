import React from "react";
import FrontLayout from "./pages/FrontLayout";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box bgColor={"blackAlpha.500"} minH={"120vh"}>
      <FrontLayout />
    </Box>
  );
}

export default App;

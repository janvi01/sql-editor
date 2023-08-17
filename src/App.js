import React from "react";
import FrontLayout from "./components/FrontLayout";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box bgColor={"blackAlpha.500"} minH={"100vh"}>
      <FrontLayout />
    </Box>
  );
}

export default App;

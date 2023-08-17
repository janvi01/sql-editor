import React, { useState } from "react";
import SQLEditor from "./Editor";
import { VStack } from "@chakra-ui/react";

const FrontLayout = () => {
  const [query, setQuery] = useState("");

  return (
    <VStack p={"4"} bgColor={"blackAlpha.100"}>
      <SQLEditor query={query} />
    </VStack>
  );
};

export default FrontLayout;

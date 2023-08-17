import React, { useState } from "react";
import SQLEditor from "./Editor";
import { VStack } from "@chakra-ui/react";
import QueriesDisplay from "./QueriesDisplay";

const FrontLayout = () => {
  const [query, setQuery] = useState("");

  const usePredefinedQuery = (value) => {
    setQuery(value);
  };

  return (
    <VStack p={"4"} bgColor={"blackAlpha.100"}>
      <SQLEditor query={query} />
      <QueriesDisplay usePredefinedQuery={usePredefinedQuery} />
    </VStack>
  );
};

export default FrontLayout;

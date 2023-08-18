import React, { useState } from "react";
import Editor from "./Editor";
import { VStack } from "@chakra-ui/react";
import OutputDisplay from "./OutputDisplay";
import Navbar from "./Navbar";

const FrontLayout = () => {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  const usePredefinedQuery = (value) => {
    setQuery(value);
  };

  const runQuery = () => {
    setSubmittedQuery(query);
  };

  return (
    <VStack bgColor={"blackAlpha.100"} spacing={8}>
      <Navbar usePredefinedQuery={usePredefinedQuery} />
      <Editor
        query={query}
        setQuery={setQuery}
        runQuery={runQuery}
        usePredefinedQuery={usePredefinedQuery}
      />
      <OutputDisplay submittedQuery={submittedQuery} />
    </VStack>
  );
};

export default FrontLayout;

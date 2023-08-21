import React, { useState } from "react";
import Editor from "./Editor";
import { HStack, VStack } from "@chakra-ui/react";
import OutputDisplay from "./OutputDisplay";
import Navbar from "./Navbar";
import QueryHistory from "./QueryHistory";

const FrontLayout = () => {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState(query);
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [history, setHistory] = useState([]);

  const usePredefinedQuery = (value) => {
    setQuery(value);
  };

  const runQuery = () => {
    setSubmittedQuery(query);
  };

  return (
    <VStack bgColor={"blackAlpha.300"} spacing={8} pb={12}>
      <Navbar usePredefinedQuery={usePredefinedQuery} setValue={setValue} />
      <HStack w={"100%"} justifyContent={"space-between"} px={4}>
        <QueryHistory
          history={history}
          setQuery={setQuery}
          setValue={setValue}
          m={4}
        />
        <Editor
          query={query}
          setQuery={setQuery}
          runQuery={runQuery}
          usePredefinedQuery={usePredefinedQuery}
          history={history}
          setSubmittedQuery={setSubmittedQuery}
          setHistory={setHistory}
          value={value}
          setValue={setValue}
        />
      </HStack>
      <OutputDisplay submittedQuery={submittedQuery} />
    </VStack>
  );
};

export default FrontLayout;

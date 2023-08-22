import React, { useState, Suspense, lazy } from "react";
import Editor from "./Editor";
import { HStack, VStack } from "@chakra-ui/react";
import Navbar from "./Navbar";
import QueryHistory from "./QueryHistory";

const OutputDisplay = lazy(() => import("./OutputDisplay"));

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
      <HStack w={"100%"} justifyContent={"space-between"} pr={4} pl={8}>
        <QueryHistory
          history={history}
          setHistory={setHistory}
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
      <Suspense fallback={<div>Loading...</div>}>
        <OutputDisplay submittedQuery={submittedQuery} />
      </Suspense>
      {/* <OutputDisplay submittedQuery={submittedQuery} /> */}
    </VStack>
  );
};

export default FrontLayout;

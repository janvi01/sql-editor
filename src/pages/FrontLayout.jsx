import React, { useState, Suspense, lazy } from "react";
import Editor from "../components/Editor/Editor";
import { Stack, VStack, Flex, Spacer } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import QueryHistory from "../components/Queries/QueryHistory";

const OutputDisplay = lazy(() => import("../components/Output/OutputDisplay"));

const FrontLayout = () => {
  const [query, setQuery] = useState("select * from CUSTOMERS");
  const [value, setValue] = useState(query);
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isFullScreen, setIsFullScreen] = useState(false);
  console.log("Fullscreen:", isFullScreen);

  const usePredefinedQuery = (value) => {
    setQuery(value);
  };

  const runQuery = () => {
    setSubmittedQuery(query);
    setLoading(false);
  };

  return (
    <VStack bgColor={"blackAlpha.300"} spacing={8} pb={12} minH={"100vh"}>
      <Navbar usePredefinedQuery={usePredefinedQuery} setValue={setValue} />
      <Stack w={"100%"} justifyContent={"space-between"} px={4} spacing={8}>
        {!isFullScreen && (
          <Flex>
            <QueryHistory
              history={history}
              setHistory={setHistory}
              setQuery={setQuery}
              setValue={setValue}
              m={4}
            />
            <Spacer />
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
              isFullScreen={isFullScreen}
              setIsFullScreen={setIsFullScreen}
            />
          </Flex>
        )}
        {isFullScreen && (
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
            isFullScreen={isFullScreen}
            setIsFullScreen={setIsFullScreen}
          />
        )}
      </Stack>
      <Suspense fallback={<div>Loading...</div>}>
        <OutputDisplay
          submittedQuery={submittedQuery}
          loading={loading}
          setLoading={setLoading}
        />
      </Suspense>
    </VStack>
  );
};

export default FrontLayout;

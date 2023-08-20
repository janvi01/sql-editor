import React, { useEffect, useState } from "react";
import OutputTable from "./OutputTable";
import { Text, Button, HStack, Heading } from "@chakra-ui/react";
import { queryMap } from "../assets/data/queries";
import CsvDownload from "react-json-to-csv";
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";

const OutputDisplay = ({ submittedQuery }) => {
  const [results, setResults] = useState([]);
  const [filename, setFilename] = useState("");

  useEffect(() => {
    selectResults();
  }, [submittedQuery]);

  const selectResults = () => {
    if (submittedQuery === "") {
      setResults([]);
      return;
    }
    const queryIndex = queryMap.findIndex((o) => o.query === submittedQuery);
    if (queryIndex === -1) {
      setResults();
    } else {
      setResults(queryMap[queryIndex].data);
      setFilename(queryMap[queryIndex].tableQuery);
    }
  };

  return (
    <>
      {results.length > 0 ? (
        <>
          <HStack w={"100%"} px={8} justifyContent={"space-between"}>
            <Heading textAlign={"center"}>Resulting Query Table</Heading>
            <CsvDownload data={results} filename={`${filename}.csv`}>
              <Button
                leftIcon={<BsFillFileEarmarkArrowDownFill />}
                colorScheme="blue"
              >
                Export CSV
              </Button>
            </CsvDownload>
          </HStack>
          <OutputTable data={results} />
        </>
      ) : (
        <Text>Write a query to see results</Text>
      )}
    </>
  );
};

export default OutputDisplay;

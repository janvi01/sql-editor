import React, { useEffect, useState } from "react";
import OutputTable from "./OutputTable";
import { Text } from "@chakra-ui/react";
import { queryMap } from "../assets/data/queries";

const OutputDisplay = ({ submittedQuery }) => {
  const [results, setResults] = useState([]);

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
    }
  };

  return (
    <>
      {results.length > 0 ? (
        <OutputTable data={results} />
      ) : (
        <Text>Write a query to see results</Text>
      )}
    </>
  );
};

export default OutputDisplay;

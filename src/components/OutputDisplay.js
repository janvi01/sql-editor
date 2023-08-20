import React, { useEffect, useState } from "react";
import { categories } from "../assets/data/categories";
import { customers } from "../assets/data/customers";
import { products } from "../assets/data/products";
import OutputTable from "./OutputTable";
import { Text } from "@chakra-ui/react";

const OutputDisplay = ({ submittedQuery }) => {
  const [results, setResults] = useState([]);
  const queryMap = [
    {
      query: "select * from CUSTOMERS",
      data: customers,
    },
    {
      query: "select * from CATEGORIES",
      data: categories,
    },
    {
      query: "select * from PRODUCTS",
      data: products,
    },
  ];

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
        <Text>Execute a query to see results</Text>
      )}
    </>
  );
};

export default OutputDisplay;

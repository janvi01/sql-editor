import React, { useEffect, useState } from "react";
import OutputTable from "./OutputTable";
import { Button, HStack, Heading, Image, Spacer, Spinner, Text, VStack } from "@chakra-ui/react";
import { queryMap } from "../../assets/data/queries";
import CsvDownload from "react-json-to-csv";
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import girlWithLaptopImage from "../../assets/screenshots/girlwithlaptop.png";

const OutputDisplay = ({ submittedQuery, loading, setLoading }) => {
  const [results, setResults] = useState([]);
  const [filename, setFilename] = useState("");
  const [queryTime, setQueryTime] = useState();

  useEffect(() => {
    // loading result and fetching query time
    let startTime = performance.now();
    selectResults();
    setLoading(false);
    let endTime = performance.now();
    setQueryTime((endTime - startTime).toFixed(2) + " ms");
    // eslint-disable-next-line
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

  if (loading) {
    return <Spinner thickness="4px" size="xl" />;
  }

  const downloadJson = () => {
    const jsonBlob = new Blob([JSON.stringify(results, null, 2)], { type: 'application/json' });
    const jsonUrl = URL.createObjectURL(jsonBlob);

    const a = document.createElement('a');
    a.href = jsonUrl;
    a.download = `${filename}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <>
      {results.length > 0 ? (
        <>
          <HStack w={"100%"} px={4} justifyContent={"space-between"}>
            <Heading textAlign={"center"}>Query Output</Heading>
            <Spacer />
            <Button colorScheme="blue" cursor={"initial"} size={"xs"}>
              Query took: {queryTime}
            </Button>
            <CsvDownload data={results} filename={`${filename}.csv`}>
              <Button
                leftIcon={<BsFillFileEarmarkArrowDownFill />}
                colorScheme="blue"
              >
                Export CSV
              </Button >
            </CsvDownload>
            <div>
              <Button
                leftIcon={<BsFillFileEarmarkArrowDownFill />}
                onClick={downloadJson}
                colorScheme='blue'
              >
                Export JSON
              </Button>
            </div>
          </HStack>
          <OutputTable data={results} />
        </>
      ) : (
        <VStack justifyContent={"center"} p={4}>
          <Image
            src={girlWithLaptopImage}
            alt="Girl With Laptop"
            maxH="300px"
            width="100%"
            height="100%"
          />
          <Heading as="h1" fontSize="xl" mt={4}>
            Nothing to show at the moment
          </Heading>
          <Text>Run a query first to see resulting tablet</Text>
        </VStack>
      )}
    </>
  );
};

export default OutputDisplay;

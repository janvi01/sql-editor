import React, { useEffect, useState } from "react";
import OutputTable from "./OutputTable";
import {
  Button,
  Heading,
  Image,
  Spacer,
  Spinner,
  Text,
  VStack,
  Stack,
  HStack,
} from "@chakra-ui/react";
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

  function exportToJSON() {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(results, null, 2)], {
      type: "application/json",
    });
    element.href = URL.createObjectURL(file);
    element.download = `${filename}.json`;
    document.body.appendChild(element);
    element.click();
  }

  return (
    <>
      {results.length > 0 ? (
        <>
          <Stack
            direction={["column", "row"]}
            w={"100%"}
            px={4}
            justifyContent={"space-between"}
          >
            <Heading textAlign="center" fontSize={"3xl"}>
              Query Output
            </Heading>
            <Spacer />
            <Button colorScheme="blue" cursor={"initial"} size={"xs"}>
              Query took: {queryTime}
            </Button>
            <HStack justify={"center"}>
              <CsvDownload data={results} filename={`${filename}.csv`}>
                <Button
                  leftIcon={<BsFillFileEarmarkArrowDownFill />}
                  colorScheme="blue"
                >
                  Export CSV
                </Button>
              </CsvDownload>
              <Button
                onClick={exportToJSON}
                leftIcon={<BsFillFileEarmarkArrowDownFill />}
                colorScheme="blue"
              >
                Export JSON
              </Button>
            </HStack>
          </Stack>
          <OutputTable data={results} />
        </>
      ) : (
        <VStack justifyContent="center" p={4}>
          <Image
            src={girlWithLaptopImage}
            alt="Girl With Laptop"
            maxH="300px"
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

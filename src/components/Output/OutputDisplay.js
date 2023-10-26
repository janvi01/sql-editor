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
  Box,
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
  return (
    <Box w={"100%"} px={4}>
      {results.length > 0 ? (
        <>
          <Box display={{ base: "block", md: "none" }}>
            <VStack alignItems="center" spacing={4} mb={4}>
              <Heading textAlign="center" fontSize={"3xl"}>
                Query Output
              </Heading>
              <Button colorScheme="blue" cursor="initial" size={"xs"}>
                Query took: {queryTime}
              </Button>
              <CsvDownload data={results} filename={`${filename}.csv`}>
                <Button
                  leftIcon={<BsFillFileEarmarkArrowDownFill />}
                  colorScheme="blue"
                  fontSize={"xl"}
                >
                  Export CSV
                </Button>
              </CsvDownload>
            </VStack>
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <HStack justifyContent="space-between" px={8} mb={4}>
              <Heading textAlign="center" fontSize={"4xl"}>
                Query Output
              </Heading>
              <Spacer />
              <Button colorScheme="blue" cursor="initial" size={"xs"}>
                Query took: {queryTime}
              </Button>
              <CsvDownload data={results} filename={`${filename}.csv`}>
                <Button
                  leftIcon={<BsFillFileEarmarkArrowDownFill />}
                  colorScheme="blue"
                >
                  Export CSV
                </Button>
              </CsvDownload>
            </HStack>
          </Box>
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
    </Box>
  );
};

export default OutputDisplay;

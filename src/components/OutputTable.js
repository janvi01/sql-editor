import {
  Td,
  Th,
  Tr,
  Box,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Text,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const OutputTable = ({ data }) => {
  const headerItems = Object.keys(data[0]);

  return (
    <>
      {data.length > 0 ? (
        <Box padding={4} width={"100%"}>
          <Heading textAlign={"center"}>Resulting Query Table</Heading>
          <Box overflowY="auto" overflowX="auto" maxH="50vh" maxW="100%" m={4}>
            <Table variant="simple">
              <TableCaption>Resulting Query Table</TableCaption>
              <Thead position="sticky" top={0} zIndex="docked" bgColor="teal">
                <Tr>
                  {headerItems.map((item, key) => (
                    <Th fontWeight="extrabold" color="white" key={key}>
                      {item}
                    </Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody height={"50vh"} overflowY={"scroll"}>
                {data.map((bodyitem, key) => (
                  <Tr key={key}>
                    {headerItems.map((i, key) => {
                      return <Td key={key}>{bodyitem[i]}</Td>;
                    })}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      ) : (
        <Text>Write a query to see tabular results</Text>
      )}
    </>
  );
};

export default OutputTable;

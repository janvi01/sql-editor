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

  console.log(data);
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
                  {headerItems.map((item) => (
                    <Th fontWeight="extrabold" color="white">
                      {item}
                    </Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody height={"50vh"} overflowY={"scroll"}>
                {data.map((bodyitem) => (
                  <Tr>
                    {headerItems.map((i) => {
                      return <Td>{bodyitem[i]}</Td>;
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

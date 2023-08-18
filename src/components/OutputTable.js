import {
  Td,
  Th,
  Tr,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Text,
} from "@chakra-ui/react";
import React from "react";

const OutputTable = ({ data }) => {
  const headerItems = Object.keys(data[0]);

  console.log(data);
  return (
    <>
      {data.length > 0 ? (
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Resulting Query Table</TableCaption>
            <Thead>
              <Tr>
                {headerItems.map((item) => (
                  <Th>{item}</Th>
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
        </TableContainer>
      ) : (
        <Text>Write a query to see tabular results</Text>
      )}
    </>
  );
};

export default OutputTable;

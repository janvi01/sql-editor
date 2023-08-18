import {
  Td,
  Th,
  Tr,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tbody,
} from "@chakra-ui/react";
import React from "react";

const OutputTable = ({ data }) => {
  const headerItems = Object.keys(data[0]);

  console.log(data);
  return (
    <>
      {data.length > 0 ? (
        <div className="block max-h-[50vh] overflow-y-auto border border-gray-300">
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
              <Tbody>
                <Tr>
                  <Td></Td>
                </Tr>
                <Tr></Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <p>Write a query to see tabular results</p>
      )}
    </>
  );
};

export default OutputTable;

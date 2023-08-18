import { ListItem, Text, ListIcon, List, Box } from "@chakra-ui/react";
import { BsCodeSquare } from "react-icons/bs";

function QueryHistory({ history }) {
  console.log(history);
  return (
    <Box w={"20%"} mr={8}>
      <List spacing={3} bgColor={"blackAlpha.300"} p={2} borderRadius={"5px"}>
        <Text fontWeight={"bold"}>Queries History</Text>
        {history.map((item) => (
          <ListItem bgColor={"teal.200"} p={3} borderRadius={"5px"}>
            <ListIcon as={BsCodeSquare} />
            {item}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default QueryHistory;

import { ListItem, ListIcon, List, Box, Heading } from "@chakra-ui/react";
import { BsCodeSquare } from "react-icons/bs";

function QueryHistory({ history, setValue }) {
  return (
    <Box
      w={"20%"}
      bgColor={"blackAlpha.300"}
      p={2}
      borderRadius={"5px"}
      minH={"20vh"}
      textAlign={"center"}
      mt={"-10"}
    >
      <Heading fontSize={"xl"} m={4}>
        Queries History
      </Heading>
      {history.length > 0 ? (
        <List spacing={3} p={2}>
          {history.map((item, id) => (
            <ListItem
              bgColor={"teal.200"}
              p={3}
              borderRadius={"5px"}
              onClick={() => setValue(item)}
              key={`${item}---${id}`}
              cursor={"pointer"}
              _hover={{ bg: "teal.500" }}
            >
              <ListIcon as={BsCodeSquare} />
              {item}
            </ListItem>
          ))}
        </List>
      ) : (
        "No Query History to show"
      )}
    </Box>
  );
}

export default QueryHistory;

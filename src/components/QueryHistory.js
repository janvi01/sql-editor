import { ListItem, ListIcon, List, Box, Heading } from "@chakra-ui/react";
import { BsCodeSquare } from "react-icons/bs";

function QueryHistory({ history, setQuery, setValue }) {
  const onClickHistory = (value) => {
    if (value.includes("*")) setQuery(value);
    setValue(value);
  };
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
      <Heading fontSize={"2xl"} m={2}>
        Queries History
      </Heading>
      {history.length > 0 ? (
        <List spacing={3} p={2}>
          {history.map((item, id) => (
            <ListItem
              bgColor={"teal.200"}
              p={3}
              borderRadius={"5px"}
              onClick={() => onClickHistory(item)}
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
        "Execute a query first"
      )}
    </Box>
  );
}

export default QueryHistory;

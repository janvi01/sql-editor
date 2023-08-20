import React from "react";
import { HStack, Button } from "@chakra-ui/react";
import QueriesDrawer from "./QueriesDrawer";
import { AiFillCaretRight } from "react-icons/ai";

const EditorControls = ({
  SubmitQuery,
  ClearQuery,
  usePredefinedQuery,
  setValue,
}) => {
  return (
    <HStack justifyContent="space-between">
      <QueriesDrawer
        usePredefinedQuery={usePredefinedQuery}
        displayText={true}
        setValue={setValue}
      />
      <HStack>
        <Button
          leftIcon={<AiFillCaretRight />}
          colorScheme="blue"
          onClick={SubmitQuery}
        >
          Run Query
        </Button>
        <Button colorScheme="gray" onClick={ClearQuery}>
          Clear
        </Button>
      </HStack>
    </HStack>
  );
};

export default EditorControls;

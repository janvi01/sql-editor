import React from "react";
import { Stack, Button, Spacer } from "@chakra-ui/react";
import QueriesDrawer from "../Queries/QueriesDrawer";
import { AiFillCaretRight } from "react-icons/ai";

const EditorBottomControls = ({
  SubmitQuery,
  ClearQuery,
  usePredefinedQuery,
  setValue,
}) => {
  return (
    <Stack
      direction={["column", "row"]}
      justifyContent="space-between"
      w={"100%"}
      mt={2}
      as={"div"}
    >
      <QueriesDrawer
        usePredefinedQuery={usePredefinedQuery}
        displayText={true}
        setValue={setValue}
      />
      <Spacer />
      <Button
        as={"button"}
        leftIcon={<AiFillCaretRight />}
        colorScheme="blue"
        onClick={SubmitQuery}
        aria-label="Run Query"
      >
        Run Query
      </Button>
      <Button colorScheme="gray" onClick={ClearQuery} aria-label="Clear">
        Clear
      </Button>
    </Stack>
  );
};

export default EditorBottomControls;

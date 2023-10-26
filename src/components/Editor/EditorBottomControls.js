import React from "react";
import { Box, Stack, Button, Spacer, Input } from "@chakra-ui/react";
import QueriesDrawer from "../Queries/QueriesDrawer";
import { AiFillCaretRight } from "react-icons/ai";
import { BsFillFileEarmarkArrowUpFill } from "react-icons/bs";

const EditorBottomControls = ({
  SubmitQuery,
  ClearQuery,
  usePredefinedQuery,
  setValue,
}) => {
  let fileInput = React.useRef();
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
      <Box>
        <Input hidden type="file" ref={(el) => (fileInput = el)} />
        <Button
          onClick={() => fileInput.click()}
          leftIcon={<BsFillFileEarmarkArrowUpFill />}
          colorScheme="blue"
        >
          Import
        </Button>
      </Box>
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

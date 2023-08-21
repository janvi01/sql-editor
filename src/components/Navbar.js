import { HStack, Heading, IconButton } from "@chakra-ui/react";
import React from "react";
import QueriesDrawer from "./QueriesDrawer";
import { BsGithub } from "react-icons/bs";

function Navbar({ usePredefinedQuery, setValue }) {
  return (
    <HStack
      bgColor={"teal"}
      width={"100%"}
      p={4}
      justifyContent={"space-between"}
    >
      <QueriesDrawer
        usePredefinedQuery={usePredefinedQuery}
        displayText={false}
        setValue={setValue}
      />
      <Heading> SQL Online Editor</Heading>
      <IconButton
        as={"a"}
        href="https://github.com/janvi01/sql-editor"
        target="_blank"
        aria-label="Github Link"
        icon={<BsGithub />}
      />
    </HStack>
  );
}

export default Navbar;

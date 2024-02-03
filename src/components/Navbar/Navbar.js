import React from "react";
import { HStack, Heading, IconButton, useColorMode } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { FaSun, FaMoon } from "react-icons/fa"; 
import QueriesDrawer from "../Queries/QueriesDrawer";

function Navbar({ usePredefinedQuery, setValue }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      bgColor={colorMode === "light" ? "teal" : "gray.800"} 
      width="100%"
      p={4}
      justifyContent="space-between"
    >
      <QueriesDrawer
        usePredefinedQuery={usePredefinedQuery}
        displayText={false}
        setValue={setValue}
      />
      <Heading color={colorMode === "light" ? "black" : "white"}> SQL Online Editor</Heading>
      <HStack spacing={4}>
        <IconButton
          as="a"
          href="https://github.com/janvi01/sql-editor"
          target="_blank"
          aria-label="Github Link"
          icon={<BsGithub />}
        />
        <IconButton
          aria-label="Toggle Dark/Light mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
        />
      </HStack>
    </HStack>
  );
}

export default Navbar;

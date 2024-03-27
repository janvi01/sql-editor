import { Link, Text, Button, Stack } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Stack
      direction={["column", "row"]}
      bgColor={"teal"}
      textAlign="center"
      py={2}
      color="white"
      justify={"center"}
    >
      <Text fontSize="16">
        SQL Online Editor - Copyright © {currentYear} | Created by{" "}
        <Button
          as={"a"}
          href="https://github.com/janvi01"
          target="_blank"
          rightIcon={<BsGithub />}
          color={"black"}
          fontWeight={"bold"}
          variant="link"
        >
          janvi01
        </Button>
      </Text>
      <Text>
        | Found an issue? Report it{" "}
        <Link
          href="https://github.com/janvi01/sql-editor/issues/new/choose"
          isExternal
        >
          <u>here.</u>
        </Link>
      </Text>
    </Stack>
  );
}

export default Footer;

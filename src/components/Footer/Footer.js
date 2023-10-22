import { Box, Link, Text, HStack } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <Box
            bgColor={"teal"}
            width={"100%"}
            p={4}
            textAlign="center"
            paddingTop={5}
            paddingBottom={5}
            color="#E7E6DA"
        >
            <Text fontSize="16" mb={2}>
                SQL Online Editor - Copyright © {currentYear} | Created by <Link href="https://github.com/janvi01" target="_blank">janvi01</Link>
            </Text>
            <HStack justifyContent="center" spacing={4}>
                <Link href="https://github.com/janvi01" isExternal>
                    <HStack>
                        <BsGithub fontSize="1.5rem" />
                    </HStack>
                </Link>
                <Text>
                Found an issue? Report it{" "}
                <Link href="https://github.com/janvi01/sql-editor/issues/new/choose" isExternal>
                        <u>here</u>
                </Link>
                </Text>
            </HStack>
        </Box>
    );
}

export default Footer;


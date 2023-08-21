import { Text, HStack, Select } from "@chakra-ui/react";
import React from "react";

function EditorTheme({ setTheme }) {
  const themes = [
    "sqlserver",
    "ambiance",
    "chaos",
    "chrome",
    "clouds",
    "cobalt",
    "github",
    "monokai",
    "solarized_dark",
    "solarized_light",
    "terminal",
    "tomorrow",
    "xcode",
  ];
  return (
    <HStack w={"100%"} justifyContent={"flex-end"} mb={2}>
      <HStack>
        <Text fontWeight={"bold"}>Theme</Text>
        <Select
          onChange={(e) => {
            setTheme(e.currentTarget.value);
          }}
        >
          <option defaultValue="sqlserver" disabled>
            Select
          </option>
          {themes.map((items, key) => (
            <option key={key} value={items}>
              {items}
            </option>
          ))}
        </Select>
      </HStack>
    </HStack>
  );
}

export default EditorTheme;

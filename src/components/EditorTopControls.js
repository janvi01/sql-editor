import { Text, HStack, Select, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsArrowsFullscreen, BsFullscreenExit } from "react-icons/bs";

function EditorTopControls({ setTheme, setWidth, setMaxLines }) {
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
  const [fullscreenBool, setfullscreenBool] = useState(true);
  const fullscreen = (value) => {
    if (value) {
      setMaxLines(20);
      setWidth("80%");
    } else {
      setMaxLines(10);
      setWidth("70%");
    }
  };
  return (
    <HStack w={"100%"} justifyContent={"space-between"} mb={2}>
      <IconButton
        aria-label="Fullscreen"
        icon={fullscreenBool ? <BsArrowsFullscreen /> : <BsFullscreenExit />}
        onClick={() => {
          fullscreen(fullscreenBool);
          setfullscreenBool(!fullscreenBool);
        }}
      ></IconButton>
      <HStack>
        <Text fontWeight={"bold"}>Theme</Text>
        <Select
          aria-label="Theme options"
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

export default EditorTopControls;

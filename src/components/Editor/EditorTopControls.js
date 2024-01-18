import { Text, HStack, Select, IconButton, Spacer, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsArrowsFullscreen, BsFullscreenExit } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";

function EditorTopControls({ setTheme, isFullScreen, setIsFullScreen }) {
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

  const handleFullScreenToggle = () => {
    setIsFullScreen(!isFullScreen);
  };
  return (
    <HStack w={"100%"} justifyContent={"space-between"} mb={2}>
      <Flex w="100px">
        <IconButton
          aria-label="Fullscreen"
          icon={!isFullScreen ? <BsArrowsFullscreen /> : <BsFullscreenExit />}
          onClick={handleFullScreenToggle}
        />
        <Spacer />
        {isFullScreen && (
          <IconButton
            aria-label="History"
            icon={<FaHistory />}
            onClick={handleFullScreenToggle}
          />
        )}
      </Flex>
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

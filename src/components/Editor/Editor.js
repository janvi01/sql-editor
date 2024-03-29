import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-min-noconflict/ext-language_tools";
import { VStack } from "@chakra-ui/react";
//react ace editor theme dependencies
import "ace-builds/src-noconflict/theme-sqlserver";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-ambiance";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/theme-clouds";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-solarized_light";
import EditorTopControls from "./EditorTopControls";
import EditorBottomControls from "./EditorBottomControls";

const Editor = ({
  query,
  setQuery,
  runQuery,
  usePredefinedQuery,
  history,
  setHistory,
  value,
  setValue,
  setSubmittedQuery,
  isFullScreen,
  setIsFullScreen,
}) => {
  const [theme, setTheme] = useState("sqlserver");
  const [width, setWidth] = useState("70%");
  const [maxLines, setMaxLines] = useState(10);

  useEffect(() => {
    setMaxLines(isFullScreen ? 20 : 10);
    setWidth(isFullScreen ? "100%" : "70%");
  }, [isFullScreen]);

  const onChange = (newValue) => {
    setValue(newValue);
    setQuery(newValue);
  };

  useEffect(() => {
    setValue(query);
  }, [query, setValue]);

  const SubmitQuery = () => {
    runQuery();
    if (history.length === 0 || history[history.length - 1] !== value) {
      // If not, add it to history
      setHistory((prevHistory) => [value, ...prevHistory]);
    }
  };

  const errorQuery = () => {
    alert("Enter a valid Query");
  };

  const ClearQuery = () => {
    setValue("");
    setSubmittedQuery("");
    setQuery("");
  };

  return (
    <VStack w={{ base: "100%", md: width, lg: width }}>
      <EditorTopControls
        setTheme={setTheme}
        isFullScreen={isFullScreen}
        setIsFullScreen={setIsFullScreen}
      />
      <AceEditor
        mode="mysql"
        id="editor"
        aria-label="editor"
        name="editor"
        theme={theme}
        width="100%"
        fontSize={20}
        showPrintMargin={false}
        showGutter
        minLines={15}
        maxLines={maxLines}
        placeholder="Write SQL query..."
        color="black"
        editorProps={{ $blockScrolling: true }}
        value={value}
        onChange={onChange}
        showLineNumbers
      />
      <EditorBottomControls
        SubmitQuery={value ? SubmitQuery : errorQuery}
        ClearQuery={ClearQuery}
        usePredefinedQuery={usePredefinedQuery}
        setValue={setValue}
      />
    </VStack>
  );
};

export default Editor;

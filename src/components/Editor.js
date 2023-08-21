import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-min-noconflict/ext-language_tools";
import { Box, VStack } from "@chakra-ui/react";
import EditorControls from "./EditorControls";
import EditorTheme from "./EditorTheme";
//theme dependencies
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
}) => {
  const [theme, setTheme] = useState("sqlserver");

  const onChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setValue(query);
  }, [query]);

  const SubmitQuery = () => {
    runQuery();
    setHistory([...history, value]);
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
    <VStack w={"70%"}>
      <EditorTheme setTheme={setTheme} />
      <AceEditor
        mode="mysql"
        id="editor"
        name="editor"
        theme={theme}
        width="100%"
        fontSize={20}
        showPrintMargin={false}
        showGutter
        minLines={15}
        maxLines={10}
        placeholder="Write SQL query..."
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        value={value}
        onChange={onChange}
        showLineNumbers
      />
      <Box w={"100%"} mt={2}>
        <EditorControls
          SubmitQuery={value ? SubmitQuery : errorQuery}
          ClearQuery={ClearQuery}
          usePredefinedQuery={usePredefinedQuery}
          setValue={setValue}
        />
      </Box>
    </VStack>
  );
};

export default Editor;

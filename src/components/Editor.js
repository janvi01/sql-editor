import React, { useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-sqlserver";
import "ace-builds/src-min-noconflict/ext-language_tools";
import { Box, VStack } from "@chakra-ui/react";
import EditorControls from "./EditorControls";

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

  const ClearQuery = () => {
    setValue("");
    setSubmittedQuery("");
    setQuery("");
  };

  return (
    <VStack w={"70%"}>
      <AceEditor
        mode="mysql"
        id="editor"
        name="editor"
        theme="sqlserver"
        width="100%"
        fontSize={18}
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
          SubmitQuery={SubmitQuery}
          ClearQuery={ClearQuery}
          usePredefinedQuery={usePredefinedQuery}
        />
      </Box>
    </VStack>
  );
};

export default Editor;

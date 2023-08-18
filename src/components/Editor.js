import React, { useEffect, useState } from "react";
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
}) => {
  const [value, setValue] = useState(query);

  useEffect(() => {
    setValue(query);
  }, [query]);

  const SubmitQuery = () => {
    //runQuery to be defined
    runQuery();
    setHistory([...history, value]);
  };

  const ClearQuery = () => {
    setValue("");
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
        onChange={(value) => setValue(value)}
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

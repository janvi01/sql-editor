import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-sqlserver";
import "ace-builds/src-min-noconflict/ext-language_tools";
import { HStack, Button, Box } from "@chakra-ui/react";
import EditorControls from "./EditorControls";

const Editor = ({ query, setQuery, runQuery, usePredefinedQuery }) => {
  const [value, setValue] = useState(query);

  useEffect(() => {
    setValue(query);
  }, [query]);

  const SubmitQuery = () => {
    //runQuery to be defined
    runQuery();
  };

  const ClearQuery = () => {
    setValue("");
  };

  return (
    <>
      <AceEditor
        mode="mysql"
        id="editor"
        name="editor"
        theme="sqlserver"
        width="70%"
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
      <Box width={"70%"} mt={2}>
        <EditorControls
          SubmitQuery={SubmitQuery}
          ClearQuery={ClearQuery}
          usePredefinedQuery={usePredefinedQuery}
        />
      </Box>
    </>
  );
};

export default Editor;

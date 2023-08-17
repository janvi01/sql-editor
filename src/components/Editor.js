import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-sqlserver";
import "ace-builds/src-min-noconflict/ext-language_tools";
import { HStack, Button } from "@chakra-ui/react";

const SQLEditor = ({ query }) => {
  const [value, setValue] = useState(query);

  useEffect(() => {
    setValue(query);
  }, [query]);

  return (
    <>
      <AceEditor
        mode="mysql"
        id="editor"
        name="editor"
        theme="sqlserver"
        width="70%"
        fontSize={18}
        minLines={15}
        maxLines={10}
        showPrintMargin={false}
        showGutter
        placeholder="Write query..."
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
      <HStack>
        <Button colorScheme="blue">Run Query</Button>
        <Button colorScheme="gray">Clear</Button>
      </HStack>
    </>
  );
};

export default SQLEditor;

import React from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

const TextArea = () => {
  const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());
  return (
    <div>
      <h1>Text Area</h1>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
};

export default TextArea;

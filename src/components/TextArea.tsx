import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";

const TextArea = () => {
  const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());

  const handleKeyCommand = (command: string, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };
  const onItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  };

  return (
    <div>
      <h1>Text Area</h1>
      <div style={{ border: "solid gray 1px" }}>
        <button onClick={onBoldClick}>Bold</button>
        <button onClick={onItalicClick}>Italic</button>
        <Editor editorState={editorState} onChange={setEditorState} handleKeyCommand={handleKeyCommand} />
      </div>
    </div>
  );
};

export default TextArea;

import React, { useState } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  DefaultDraftBlockRenderMap,
  convertToRaw,
} from "draft-js";
import "./sass/block.scss";
import {
  blockRenderMap,
  addOnContainer,
  KeyMaker,
  myBlockStyle,
  myStyleMap,
} from "./addOn";
import { Button } from "./components/Button";

const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

const styleMap = myStyleMap();

export const TheaterEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleKeyCommand = (command, editorState) => {
    const element = addOnContainer.find((element) => element.name === command);

    const type = element?.type;
    const name = element?.name;

    if (name === "INSERT-SOFT") {
      setEditorState(RichUtils.insertSoftNewline(editorState));
      return "handled";
    }
    if (name === "SAVE") {
      const currentState = editorState.getCurrentContent();
      console.log("content state", convertToRaw(currentState));
      return "handled";
    }
    if (name && type === "block") {
      setEditorState(RichUtils.toggleBlockType(editorState, name));
      return "handled";
    }
    if (name && type === "inline") {
      console.log("inline");
      setEditorState(RichUtils.toggleInlineStyle(editorState, name));
      return "handled";
    }

    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }

    return "not-handled";
  };

  return (
    <div className="theater-editor">
      <div className="buttons__menue">
        <div className="buttons-block">
          {addOnContainer.map((block, i) => {
            return (
              <Button
                key={i}
                name={block.name}
                type={block.type}
                editorState={editorState}
                setEditorState={setEditorState}
                icon={block.icon}
                keyValue={block.key}
              />
            );
          })}
        </div>
      </div>

      <Editor
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        customStyleMap={styleMap}
        keyBindingFn={KeyMaker}
        blockStyleFn={myBlockStyle}
        blockRenderMap={extendedBlockRenderMap}
      />
    </div>
  );
};

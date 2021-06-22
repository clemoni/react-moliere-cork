import React from "react";
import { RichUtils, convertToRaw } from "draft-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = ({
  name,
  editorState,
  setEditorState,
  icon,
  keyValue,
  type,
}) => {
  const onFnClick = () => {
    if (name === "INSERT-SOFT") {
      return setEditorState(RichUtils.insertSoftNewline(editorState));
    }
    if (name === "SAVE") {
      const currentState = editorState.getCurrentContent();
      console.log("content state", convertToRaw(currentState));
      return true;
    }
    type === "block"
      ? setEditorState(RichUtils.toggleBlockType(editorState, name))
      : setEditorState(RichUtils.toggleInlineStyle(editorState, name));
  };

  return (
    <div className="btn-icon">
      <button
        onClick={onFnClick}
        className={`btn-icon__btn btn-icon__btn-${name}`}
      >
        <FontAwesomeIcon icon={icon} />
        <span className="btn-icon__tooltiptext">cmd + {keyValue}</span>
      </button>
    </div>
  );
};

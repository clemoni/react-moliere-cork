// import React, { useState, useEffect } from "react";
// import {
//   Editor,
//   EditorState,
//   RichUtils,
//   convertToRaw,
//   DefaultDraftBlockRenderMap,
//   getDefaultKeyBinding,
//   KeyBindingUtil,
//   Modifier,
// } from "draft-js";
// import "draft-js/dist/Draft.css";
// import createEmojiPlugin from "@draft-js-plugins/emoji";
// import { Map } from "immutable";

// const myKeyBindingFn = (e) => {
//   if (e.metaKey && e.keyCode === 13) {
//     return "new-scene";
//   }
//   if (e.keyCode === 13) {
//     return "insert-soft";
//   }
//   return getDefaultKeyBinding(e);
// };

// function myBlockStyleFn(contentBlock) {
//   const type = contentBlock.getType();
//   if (type === "header-one") {
//     return "superFancyBlockquote";
//   }
//   if (type === "screne") {
//     return "superP";
//   }
// }

// const blockRenderMap = Map({
//   section: {
//     element: "scene",
//   },
// });

// const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

// const emojiPlugin = createEmojiPlugin();
// const { EmojiSuggestions, EmojiSelect } = emojiPlugin;

// export function MyEditor() {
//   const [editorState, setEditorState] = useState(() =>
//     EditorState.createEmpty()
//   );

//   const handleKeyCommand = (command, editorState) => {
//     console.log(command);
//     if (command === "insert-soft") {
//       setEditorState(RichUtils.insertSoftNewline(editorState));
//       return "handled";
//     }

//     if (command === "new-scene") {
//       const contentState = editorState.getCurrentContent();
//       const selectionState = editorState.getSelection();
//       const test = Modifier.splitBlock(contentState, selectionState);
//       setEditorState(EditorState.push(editorState, test, "split-block"));
//       console.log(convertToRaw(test));
//       return "handled";
//     }

//     const newState = RichUtils.handleKeyCommand(editorState, command);

//     if (newState) {
//       setEditorState(newState);
//       return "handled";
//     }

//     return "not-handled";
//   };

//   const onBoldClick = () => {
//     setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
//   };
//   const onH1Click = () => {
//     setEditorState(RichUtils.toggleBlockType(editorState, "header-one"));
//   };
//   const onLiClick = () => {
//     setEditorState(
//       RichUtils.toggleBlockType(editorState, "unordered-list-item")
//     );
//   };
//   const onSceneClick = () => {
//     setEditorState(RichUtils.toggleBlockType(editorState, "scene"));
//   };
//   const onTestClick = () => {
//     const test = editorState.getSelection();
//     console.log(test);
//     setEditorState(RichUtils.insertSoftNewline(editorState));
//   };
//   const onViewClick = () => {
//     const currentState = editorState.getCurrentContent();
//     console.log("content state", convertToRaw(currentState));
//   };

//   return (
//     <>
//       <button onClick={onBoldClick}>Bold</button>
//       <button onClick={onH1Click}>h1</button>
//       <button onClick={onLiClick}>li</button>
//       <button onClick={onSceneClick}>Scene</button>
//       <button onClick={onTestClick}>test</button>
//       <button onClick={onViewClick}>View</button>

//       <Editor
//         editorState={editorState}
//         onChange={setEditorState}
//         blockStyleFn={myBlockStyleFn}
//         blockRenderMap={extendedBlockRenderMap}
//         handleKeyCommand={handleKeyCommand}
//         keyBindingFn={myKeyBindingFn}
//         plugins={[emojiPlugin]}
//       />
//       <EmojiSuggestions />
//       <EmojiSelect />
//     </>
//   );
// }

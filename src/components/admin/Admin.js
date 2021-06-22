import React from "react";
import { TheaterEditor } from "../theaterEditor/TheaterEditor";
// import { MyEditor } from "./Editor";

export const Admin = () => {
  return (
    <div className="admin">
      <h1>Admin</h1>
      <div className="editor">
        <TheaterEditor />
      </div>
    </div>
  );
};

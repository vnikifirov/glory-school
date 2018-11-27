import React from "react";
import * as manifest from "../../../package.json";

export default () => (
  <footer className="toolbar toolbar-footer">
    <h1 className="title">
      {manifest.name}
      &nbsp;v.
      {manifest.version}
    </h1>
  </footer>
);

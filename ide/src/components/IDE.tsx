import React from "react"
import "./IDE.css"

import SplitPane, { Pane } from "react-split-pane"
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react"

const IDE = () => {
  return (
    <SplitPane split="vertical" defaultSize={200} allowResize={true}>
      <Pane size={300}>
        <Editor defaultLanguage="javascript" defaultValue="// some comment" />
      </Pane>
      <Pane>Using a Pane allows you to specify any constraints directly</Pane>
    </SplitPane>
  )
}

export default IDE

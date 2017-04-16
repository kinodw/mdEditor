// import React from "react";
import style from "./Editor.css";

// export default function Editor(props) {
// 	return (
// 		<textarea
// 			id="editor"
// 			className={`${style.editor} ${props.className}`}
// 			value={props.value}
// 			onChange={props.onChange}
// 		/>
// 	);
// }
import React from "react";
import brace from 'brace';
import AceEditor from 'react-ace'; // aceのreact　componentを使います。

import 'brace/mode/markdown'; // modeを選ぶ
import 'brace/theme/textmate'; // カラーテーマを選ぶ

export default class Editor extends React.Component{

  constructor(props){
    super(props)
    this._onChange = this._onChange.bind(this);
  }

  render(){
    return(
      <AceEditor
        className={`${style.editor} ${this.props.className}`}
        id="editor"
        mode="markdown"  // mode
        theme="textmate" // theme
        width="100%"
        height="100%"
        name="editor" // id
        tabSize={2}
        showPrintMargin={false} // 真ん中らへんの線を消す
        highlightActiveLine={false} // lineのハイライトを消す
        editorProps={{$blockScrolling: true}}
        onChange={this._onChange}
        value={this.props.value}
      />
    )
  }
   _onChange(text){
    this.props.edit(text); // propsでわたってきたものを実行
  }
}
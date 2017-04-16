import React from "react";
import Editor from "./Editor";
import style from "./MarkdownEditorUI.css";
import Previewer from "./Previewer";
import { ipcRenderer } from "electron";
// import brace from "brace";
// import 'brace/theme/textmate'; // カラーテーマを選ぶ


export default class MarkdownEditorUI extends React.Component {

	render() {
		return (
			<div className={style.markdownEditor}>
					<Editor
					  //className={style.editorArea}
					  value={this.state.text}
					  edit={this._edit}
					  //onChange={this.onChangeText}
					  // theme="textmate"
					 />
					 <Previewer
					  className={style.previewerArea}
					  value={this.state.text}
					 />
			</div>
		);
	}

	constructor(props){
		super(props);
		this.state = {text:""};
		this.onChangeText = this.onChangeText.bind(this);
		this._edit = this._edit.bind(this);
	}

	onChangeText(e) {
		this.setState({text: e.target.value});
	}

	_edit(value){
	  this.setState({ text: value })
	}

	// ComponentがView上にマウントされたときとアンマウントされる直前でのメソッド
	componentDidMount() {
		ipcRenderer.on("REQUEST_TEXT", () => {
			ipcRenderer.send("REPLY_TEXT", this.state.text);
		});

		ipcRenderer.on("SEND_TEXT", (_e,text) => {
			this.setState({text});
		});
	}

	componentWillUnmount() {
		ipcRenderer.removeAllListeners();
	}
}
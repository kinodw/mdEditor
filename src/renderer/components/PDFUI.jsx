import React from "react";
import Previewer from "./Previewer.jsx";
import { ipcRenderer } from "electron";
var emojify = require("emojify.js");

export default class PDFUI extends React.Component {
	constructor(props) {
		super(props);
		this.state = { text: ""};
	}

	componentDidMount() {
		const text = ipcRenderer.sendSync("REQUEST_TEXT");
		console.log("PDFUIDidMount");
		this.setState({ text });
	}

	componentDidUpdate() {
		this.syncImageRenderered().then(() => {
			console.log("send RENDERED_CONTENTS");
			ipcRenderer.send("RENDERED_CONTENTS");
		});
	}

	syncImageRenderered() {
		const images = Array.prototype.slice.call(document.querySelectorAll("img"));
		const loadingImages = images.filter((image) => !image.complete);
		if(loadingImages.length === 0) {
			return Promise.resolve();
		}
		return Promise.all(loadingImages.map((image) =>
			new Promise((resolve) => image.onload = () => resolve())));
	}

	render() {
		return (
			<Previewer value={this.state.text} toEmoji={emojify} />
		);
	}
}
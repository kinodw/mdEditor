// import React from "react";
// import marked from "marked";
// import style from "./Previewer.css";
// marked.setOptions({ sanitize: true });

// export default function Previewer(props) {
// 	return (
// 		<div
// 			id="previewer"
// 			className={`${props.className} ${style.previewer}`}
// 		>
// 		 <span
// 		  dangerouslySetInnerHTML={{__html: marked(props.value) }}
// 		 />
// 		</div>
// 	);
// }

import React from "react";
import marked from "marked";
import style from "./Previewer.css";
//import emojify from "emojify.js";

marked.setOptions({ sanitize: true });

export default class Previewer extends React.Component{

  constructor(props){
    super(props);
  }
  render(){
    let targetText = this.props.value;
    targetText = marked(targetText);
    //ratgetTextの、 :smile: のようなテキストに対して、前後に半角スペースを入れる処理
    targetText = targetText.replace(/(:[0-9a-zA-Z_\+\-]+?:)/g, " $1 ");
    targetText = this.props.toEmoji.replace(targetText);

    console.log(targetText);
    return(
      <div
       	id="previewer"
      	className={`${this.props.className} ${style.previewer}`}
      >
        <span
        dangerouslySetInnerHTML={
          {__html: targetText}
        }
        />
      </div>
    )
  }

}
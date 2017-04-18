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
    targetText = " " + targetText + " ";
    targetText = marked(targetText);
    targetText = this.props.toEmoji.replace(targetText);
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
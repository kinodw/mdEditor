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




marked.setOptions({ sanitize: true });

export default class Previewer extends React.Component{

  constructor(props){
    super(props);
    //this.props.value = emoji.reaplace(this.props.value);
  }
  render(){
    return(
      <div
       	id="previewer"
      	className={`${this.props.className} ${style.previewer}`}
      >
        <span
        dangerouslySetInnerHTML={
          {__html: marked((this.props.value))}
        }
        />
      </div>
    )
  }

}
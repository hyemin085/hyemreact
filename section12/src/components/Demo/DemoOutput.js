import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log('데모실행중');

  return (
    <React.Fragment>

     <p>{props.show ? 'This is new' : ''}</p>
    </React.Fragment>
  );
}

export default React.memo(DemoOutput);

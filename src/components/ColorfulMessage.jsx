import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentLedy2Style = {
    //color: props.color,
    color: color,
    fontSize:
      "18px" /*CSSのようにfont-size: 18px;では書けない.キャメルケースで記入*/
  };
  return <p style={contentLedy2Style}>{children}</p>;
  // return  <p style={contentLedy2Style}>{props.message}</p>;
};

export default ColorfulMessage;

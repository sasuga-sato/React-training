import React, { useEffect, useState } from "react";
import ColofulMessage from "./components/ColorfulMessage";
const App = () => {
  console.log("さいしょ");
  useState();
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  // const contentStyle = {
  //   color: "blue", //color :blue;はダメ　,で区切る
  //   fontSize:
  //     "18px" /*CSSのようにfont-size: 18px;では書けない.キャメルケースで記入*/
  // };

  // const contentLedyStyle = {
  //   color: "pink", //color :blue;はダメ　,で区切る
  //   fontSize:
  //     "18px" /*CSSのようにfont-size: 18px;では書けない.キャメルケースで記入*/
  // };
  useEffect(() => {
    console.log("useEffect!!");
  }, []); //第二引数に空の配列を渡すと最初の一度だけコードを走らせる
  useEffect(() => {
    console.log("useEffect!!");
  }, [num]); //第二引数に空の配列を渡すと最初の一度だけコードを走らせる
  if (num > 0) {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true); //左がfalseの時右側が実行される
    } else {
      faceShowFlag && setFaceShowFlag(false); //右がtrueの時右側が実行される
    }
  }

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>{" "}
      {/*cssのプロパティとして書くには””*/}
      {/* <p style={contentStyle}>お元気ですか？</p>
      <p style={contentLedyStyle}>元気です！</p> */}
      <ColofulMessage color="orange">元気ですか？</ColofulMessage>
      {/* <ColofulMessage color="orange"　message="元気です!"> */}
      <ColofulMessage color="orange">元気です!</ColofulMessage>
      <button onClick={onClickCountUp}>カウントアップ！！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(≧▽≦)</p>}
      {/* 左がtureなら右が出力 */}
    </>
  );
};
export default App;

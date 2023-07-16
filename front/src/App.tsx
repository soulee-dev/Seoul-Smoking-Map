import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container as MapDiv, NaverMap } from "react-naver-maps";

function App() {
  return (
    <MapDiv
      style={{
        width: "100%",
        height: "600px",
      }}
    >
      <NaverMap />
    </MapDiv>
  );
}

export default App;

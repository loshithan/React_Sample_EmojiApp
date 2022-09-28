import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const numbers = [2,2,3,4,5,7]

const newNumbs = numbers.map(function(x){
    return x*x;
})
console.log(newNumbs);
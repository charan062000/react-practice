import { useState } from "react";
import "./App.css";

function App() {
  let [color, setColor] = useState("olive");
  // let [counter, setCounter] = useState(15);
  // let addValue = () => {
  //   setCounter(counter+1)
  // }
  //  let removeValue = () => {
  //    setCounter(counter - 1);
  //  };
  return (
    <>
      {/* <section id="center">
        <h1>counter: {counter}</h1>
        <button onClick={addValue}>add counter +</button>
        <button onClick={removeValue}>remove counter -</button>
      </section> */}
      <div
        className="w-full h-screen duration-200 border- white"
        style={{ backgroundColor: color }}
      >
        background changer
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 border-black border-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => {
                setColor("red");
              }}
              className="outline-none px-4 py-1 rounded-2xl text-white shadow-sm"
              style={{ backgroundColor: "red" }}
            >
              red
            </button>
            <button
              onClick={() => {
                setColor("blue");
              }}
              className="outline-none px-4 py-1 rounded-2xl text-white shadow-sm"
              style={{ backgroundColor: "blue" }}
            >
              blue
            </button>
            <button
              onClick={() => {
                setColor("green");
              }}
              className="outline-none px-4 py-1 rounded-2xl text-white shadow-sm"
              style={{ backgroundColor: "green" }}
            >
              green
            </button>
            <button
              onClick={() => {
                setColor("lavender");
              }}
              className="outline-none px-4 py-1 rounded-2xl text-black shadow-sm"
              style={{ backgroundColor: "lavender" }}
            >
              lavender
            </button>
            <button
              onClick={() => {
                setColor("black");
              }}
              className="outline-none px-4 py-1 rounded-2xl text-white shadow-sm"
              style={{ backgroundColor: "black" }}
            >
              balck
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

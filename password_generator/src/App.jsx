import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  let [length, setLength] = useState(8);
  let [password, setPassword] = useState("");
  let [numberAllowed, setNUmberAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);

  //useref hook
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*(){}[]_-+=~`";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const coppyPassowordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex justify-between shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            placeholder="password"
            value={password}
            className="outline-none w-full py-1 px-3"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={coppyPassowordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 ">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Lenght:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              value={numberAllowed}
              onChange={() => {
                setNUmberAllowed((prev) => !prev);
              }}
            />
            <label>AddNumbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              value={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>AddCharacters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

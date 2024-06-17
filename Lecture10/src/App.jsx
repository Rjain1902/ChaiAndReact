import { useRef } from "react";
import { useEffect } from "react";
import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setNewPassword] = useState();
  const inputRef=useRef()
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()[]<>?\\/~:";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setNewPassword(pass);
  }, [length, numberAllowed, charAllowed, setNewPassword]);

  const copyPasteToClipBoard=useCallback(()=>{
    inputRef.current?.select()
    window.navigator.clipboard.writeText(password)}
,[password])
  

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <div className="bg-black w-full grid h-screen place-items-center p-0 fixed ">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 mt-8  text-orange-500 bg-gray-700 mt-28">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={inputRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPasteToClipBoard}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-3">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="text-orange-500">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label className="text-orange-500" htmlFor="Number Input">Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label className="text-orange-500" htmlFor="CharacterInput">Characters</label>
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;

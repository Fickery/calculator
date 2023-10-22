import { useState } from "react";
import "./App.css";

export default function App() {
  const [input, setInput] = useState(" ");

  const handleInputChange = (value: string) => {
    setInput(input + value);
  };

  const handleAdd = () => {
    setInput(input + "+");
  };

  const handleMinus = () => {
    setInput(input + "-");
  };

  const handleMultiply = () => {
    setInput(input + "*");
  };

  const handleDivide = () => {
    setInput(input + "/");
  };

  const handleDeleteLast = () => {
    setInput(input.slice(0, -1));
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen text-black bg-black">
      <div className="w-1/4 border border-black bg-slate-50 shadow-lg shadow-slate-400 rounded-xl">
        <p className="flex justify-center items-center mt-5 font-['Open_Sans'] font-extrabold">
          casio
        </p>
        <h1 className="flex justify-center items-center font-black rounded-md text-center h-5 m-5 p-10 shadow-[inset_0_-5px_10px_rgba(0,0,0,0.1)] bg-slate-200">
          {input}
        </h1>
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          <input
            type="button"
            value={"C"}
            className="numKey bg-slate-200 text-black hover:bg-slate-400 hover:text-white"
            onClick={() => handleClear()}
          />
          <input
            type="button"
            value={String.fromCharCode(8592)}
            className="numKey bg-slate-200 text-black hover:bg-slate-400 hover:text-white"
            onClick={() => handleDeleteLast()}
          />
          <input
            type="button"
            value={"("}
            className="numKey bg-slate-200 text-black hover:bg-slate-400 hover:text-white"
            onClick={() => handleInputChange("(")}
          />
          <input
            type="button"
            value={")"}
            className="numKey bg-slate-200 text-black hover:bg-slate-400 hover:text-white"
            onClick={() => handleInputChange(")")}
          />
          <input
            type="button"
            value={"7"}
            className="numKey"
            onClick={() => handleInputChange("7")}
          />
          <input
            type="button"
            value={"8"}
            className="numKey"
            onClick={() => handleInputChange("8")}
          />
          <input
            type="button"
            value={"9"}
            className="numKey"
            onClick={() => handleInputChange("9")}
          />
          <input
            type="button"
            value={"+"}
            className="numKey bg-slate-200 text-black hover:bg-slate-400 hover:text-white"
            onClick={() => handleAdd()}
          />
          <input
            type="button"
            value={"4"}
            className="numKey"
            onClick={() => handleInputChange("4")}
          />
          <input
            type="button"
            value={"5"}
            className="numKey"
            onClick={() => handleInputChange("5")}
          />
          <input
            type="button"
            value={"6"}
            className="numKey"
            onClick={() => handleInputChange("6")}
          />
          <input
            type="button"
            value={"-"}
            className="numKey bg-slate-200 text-black hover:bg-slate-400 hover:text-white"
            onClick={() => handleMinus()}
          />
          <input
            type="button"
            value={"1"}
            className="numKey"
            onClick={() => handleInputChange("1")}
          />
          <input
            type="button"
            value={"2"}
            className="numKey"
            onClick={() => handleInputChange("2")}
          />
          <input
            type="button"
            value={"3"}
            className="numKey"
            onClick={() => handleInputChange("3")}
          />
          <input
            type="button"
            value={"*"}
            className="numKey bg-slate-200 text-black hover:bg-slate-400 hover:text-white"
            onClick={() => handleMultiply()}
          />
          <input
            type="button"
            value={"."}
            className="numKey"
            onClick={() => handleInputChange(".")}
          />
          <input
            type="button"
            value={"0"}
            className="numKey"
            onClick={() => handleInputChange("0")}
          />
          <input
            type="button"
            value={"="}
            className="numKey bg-slate-900 hover:bg-slate-200 text-white"
            onClick={() => handleCalculate()}
          />
          <input
            type="button"
            value={"/"}
            className="numKey bg-slate-200 text-black hover:bg-slate-400 hover:text-white"
            onClick={() => handleDivide()}
          />
        </div>
      </div>
    </div>
  );
}

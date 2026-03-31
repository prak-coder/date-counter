import { useState } from "react";

function App() {
  return (
    <>
      {" "}
      <p className="bg-purple-400 text-center text-stone-100">Date Counter</p>
      <div className="flex flex-col ">
        <Counter />
      </div>
    </>
  );
}

function Counter() {
  const [step, setStep] = useState(0);

  const [count, setCount] = useState(0);
  const date = new Date("july 20 2028");
  date.setDate(date.getDate() + count);
  return (
    <>
      <div className="flex flex-row justify-center">
        <button className="px-2 border" onClick={() => setStep((s) => s - 1)}>
          -
        </button>

        <span className="ml-1 mr-1">Step:{step > 0 ? step : null}</span>
        <button className="px-2 border" onClick={() => setStep((s) => s + 1)}>
          +
        </button>
      </div>
      <div className="flex flex-row justify-center">
        <button
          className="px-2 border"
          onClick={() => setCount((c) => c - step)}
        >
          -
        </button>
        <span className="px-1">Counter:{count}</span>
        <button
          className="px-1 border"
          onClick={() => setCount((c) => c + step)}
        >
          +
        </button>
        <br />
      </div>
      <div className="flex flex-row justify-center">
        <span className="mr-1">{count === 0 ? "today is " : " "}</span>
        <span>{date.toDateString()}</span>
      </div>
    </>
  );
}

export default App;

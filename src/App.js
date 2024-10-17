import { useState } from "react";
function App() {
  let [counter, setCounter] = useState(0)
  const addValue = () => {
    counter = counter + 1;
    console.log("Hello World", counter)
    setCounter(counter)
  }
  return (
    <>
      <div className="mx-auto flex flex-col py-64 items-center justify-center gap-6 bg-yellow-900">
        <h3 className="font-bold text-4xl py-4 mt-8 text-white">Counter value: {counter}</h3>
        <button className="border shadow-lg p-4 rounded-lg bg-yellow-600 font-semibold text-black" onClick={addValue}>Click here</button>
      </div>

    </>

  );
}

export default App;

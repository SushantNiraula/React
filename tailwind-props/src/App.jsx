import { useState } from "react";
// import image from "./assets/image_portait.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-black text-center bg-green-400 p-4 rounded-xl m-3">
        Tailwind Test
      </h1>
      <p className="bg-blue-300 w-6 align-middle bg-center ">{count}</p>
      <button onClick={() => setCount(count + 1)} className="btn">
        Increment
      </button>
    </>
  );
}

export default App;

import type { NextPage } from "next";
import { useState } from "react";

const HomePage: NextPage = () => {
  const [input, setInput] = useState("");

  return (
    <>
      <div className="text-2xl text-red-400">
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="bg-green-200">Press</button>
      </div>
    </>
  );
};

export default HomePage;

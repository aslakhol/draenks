import { useState } from "react";

const InputWithUseState = () => {
  const visibleFormStyle = "border border-black p-2";

  const [name, setName] = useState("");

  // console.log("I just performed a rerender");

  return (
    <div className="py-8">
      <h2>InputWithUseState</h2>
      <p>Value of input: {name}</p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={visibleFormStyle}
      />
    </div>
  );
};

export default InputWithUseState;

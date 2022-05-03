import { useState } from "react";

const LargeFormWithUseState = () => {
  const visibleFormStyle = "border border-black p-2 w-1/4";

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState(0);
  const [petName, setPetName] = useState("");
  const [favouriteFood, setFavouriteFood] = useState("");

  // console.log("I just performed a rerender");

  return (
    <form className="flex flex-col py-8">
      <h2>LargeFormWithUseState</h2>
      <label className="flex flex-col">
        Name
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={visibleFormStyle}
        />
      </label>
      <label className="flex flex-col">
        Description
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={visibleFormStyle}
        />
      </label>
      <label className="flex flex-col">
        Age
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          className={visibleFormStyle}
        />
      </label>
      <label className="flex flex-col">
        Pet Name
        <input
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          className={visibleFormStyle}
        />
      </label>
      <label className="flex flex-col">
        Favourite Food
        <input
          value={favouriteFood}
          onChange={(e) => setFavouriteFood(e.target.value)}
          className={visibleFormStyle}
        />
      </label>
    </form>
  );
};

export default LargeFormWithUseState;

import React from "react";

const CompletelyStandardForm = () => {
  const visibleFormStyle = "border border-black p-2";

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log(event.target);
  };

  return (
    <div>
      <h2>CompletelyStandardForm</h2>
      <form onSubmit={handleSubmit} action="/someRandomScript.php">
        <input className={visibleFormStyle} />
        <input type="submit" className={visibleFormStyle} />
      </form>
    </div>
  );
};

export default CompletelyStandardForm;

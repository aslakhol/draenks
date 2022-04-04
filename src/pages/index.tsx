import { trpc } from "@/utils/trpc";
import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [input, setInput] = useState("");
  const { data, isLoading } = trpc.useQuery(["hello", { text: "me" }]);

  const { data: foob } = trpc.useQuery(["world"]);

  const createDrinkMutation = trpc.useMutation("create-drink");

  const handleClick = () => {
    createDrinkMutation.mutate({ name: input });
  };

  if (isLoading) {
    return <div>Loading... </div>;
  }

  return (
    <div className="text-2xl text-red-400">
      <p>
        {data?.greeting} {foob}
      </p>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => handleClick()} className="bg-green-200">
        Press
      </button>
    </div>
  );
};

export default Home;

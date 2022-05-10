import Header from "@/features/header/components/Header";
import { trpc } from "@/utils/trpc";
import type { NextPage } from "next";
import { useState } from "react";

const HomePage: NextPage = () => {
  const [input, setInput] = useState("");
  const { data, isLoading } = trpc.useQuery(["hello", { text: "me" }]);

  const { data: foob } = trpc.useQuery(["world"]);

  if (isLoading) {
    return <div>Loading... </div>;
  }

  return (
    <>
      <div className="text-2xl text-red-400">
        <p>
          {data?.greeting} {foob}
        </p>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="bg-green-200">Press</button>
      </div>
    </>
  );
};

export default HomePage;

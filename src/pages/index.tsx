import { trpc } from "@/utils/trpc";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["hello", { text: "me" }]);

  if (isLoading) {
    return <div>Loading... </div>;
  }

  return <div className="text-2xl text-red-400">{data?.greeting}</div>;
};

export default Home;

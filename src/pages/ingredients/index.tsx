import { trpc } from "@/utils/trpc";
import type {
  NextPage,
  InferGetServerSidePropsType,
  GetServerSidePropsContext,
} from "next";
import { useState } from "react";

const IngredientsPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  const { foo } = props;
  const [input, setInput] = useState("");

  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button />
    </>
  );
};

export default IngredientsPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { data } = trpc.useQuery(["drinks"]);

  const { data: foo } = trpc.useQuery(["hello", { text: "foo" }]);
  return {
    props: { foo },
  };
};

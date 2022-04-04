import type {
  NextPage,
  InferGetServerSidePropsType,
  GetServerSidePropsContext,
} from "next";

const IngredientsPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  const {} = props;
  return <>IngredientsPage</>;
};

export default IngredientsPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return { props: {} };
};

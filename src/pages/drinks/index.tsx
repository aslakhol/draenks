import type {
  NextPage,
  InferGetServerSidePropsType,
  GetServerSidePropsContext,
} from "next";

const DrinksPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  const {} = props;
  return <>DrinksPage</>;
};

export default DrinksPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return { props: {} };
};

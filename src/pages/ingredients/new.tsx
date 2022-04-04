import type {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPropsContext,
} from "next";

const NewIngredientPage: NextPage<
  InferGetStaticPropsType<typeof getServerSideProps>
> = (props) => {
  const {} = props;
  return <>NewIngredientPage</>;
};

export default NewIngredientPage;

export const getServerSideProps = async (context: GetStaticPropsContext) => {
  return { props: {} };
};

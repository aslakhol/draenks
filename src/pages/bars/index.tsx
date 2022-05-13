import Forms from "@/features/formDemo/Forms";
import { NextPage } from "next";

const FormDemoPage: NextPage = () => {
  return (
    <div className="p-8">
      <h1>Form Demo</h1>
      <Forms />
    </div>
  );
};

export default FormDemoPage;

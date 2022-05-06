import CompletelyStandardForm from "@/features/formDemo/CompletelyStandardForm";
import InputWithUseState from "@/features/formDemo/InputWithUseState";
import LargeFormWithUseState from "@/features/formDemo/LargeFormWithUseState";
import WithRHF from "@/features/formDemo/WithRHF";
import { NextPage } from "next";

const FormDemoPage: NextPage = () => {
  return (
    <div className="p-8">
      <h1>Form Demo</h1>
      <CompletelyStandardForm />
      <InputWithUseState />
      <LargeFormWithUseState />
      <WithRHF />
    </div>
  );
};

export default FormDemoPage;

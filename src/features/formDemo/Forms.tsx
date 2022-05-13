import CompletelyStandardForm from "./CompletelyStandardForm";
import FinalForm from "./FinalForm/FinalForm";
import InputWithUseState from "./InputWithUseState";
import LargeFormWithUseState from "./LargeFormWithUseState";
import WithRHF from "./WithRHF";

const Forms = () => {
  return (
    <>
      <CompletelyStandardForm />
      <InputWithUseState />
      <LargeFormWithUseState />
      <WithRHF />
      <FinalForm />
    </>
  );
};

export default Forms;

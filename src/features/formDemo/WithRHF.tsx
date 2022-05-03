import { SubmitHandler, useForm } from "react-hook-form";

type FormType = { name: string };

const WithRHF = () => {
  const visibleFormStyle = "border border-black p-2";

  const { register, watch, handleSubmit } = useForm<FormType>();

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };

  // console.log("WithRHF just rendered");

  return (
    <div>
      <h2>WithReactHookForms</h2>
      {/* <p>Input Value: {watch("name")}</p> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className={visibleFormStyle} {...register("name")} />
      </form>
    </div>
  );
};

export default WithRHF;

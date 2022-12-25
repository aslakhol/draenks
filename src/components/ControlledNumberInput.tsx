import { ChangeEvent } from "react";

type ControlledNumberInputProps = {
  name: string;
  label: string;
  value: number;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
};

const ControlledNumberInput = (props: ControlledNumberInputProps) => {
  const { value, onChange, name, label } = props;

  const styles =
    "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md";

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          value={value}
          onChange={onChange}
          type="number"
          id={name}
          className={styles}
        />
      </div>
    </div>
  );
};

export default ControlledNumberInput;

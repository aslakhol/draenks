import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type TextAreaProps = {
  name: string;
  placeholder: string;
  label: string;
  registerReturn: UseFormRegisterReturn;
  fieldError?: FieldError;
};

const TextArea = (props: TextAreaProps) => {
  const { fieldError, registerReturn, name, placeholder, label } = props;

  const styles =
    "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md";

  const errorStyles =
    "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md";

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <textarea
          {...registerReturn}
          id={name}
          placeholder={placeholder}
          className={!fieldError ? styles : errorStyles}
          aria-invalid={fieldError ? true : false}
          aria-describedby={fieldError && `${name}-error`}
        />
        {fieldError && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {fieldError && (
        <p className="mt-2 text-sm text-red-600" id={`${name}-error`}>
          {fieldError.message}
        </p>
      )}
    </div>
  );
};

export default TextArea;

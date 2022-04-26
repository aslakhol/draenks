import { PlusSmIcon as PlusSmIconSolid } from "@heroicons/react/solid";

type PlusButtonProps = { onClick: () => void };

const PlusButton = (props: PlusButtonProps) => {
  const { onClick } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <PlusSmIconSolid className="h-5 w-5" aria-hidden="true" />
    </button>
  );
};

export default PlusButton;

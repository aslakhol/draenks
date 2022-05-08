import { ChevronDownIcon } from "@heroicons/react/solid";

type DrinkListHeadingProps = {
  heading: string;
};

const DrinkListHeading = (props: DrinkListHeadingProps) => {
  const { heading } = props;

  return (
    <a href="#" className="group inline-flex">
      {heading}
      <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </span>
    </a>
  );
};

export default DrinkListHeading;

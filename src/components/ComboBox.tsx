import { useState } from "react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Combobox as HLCombobox } from "@headlessui/react";
import { classNames } from "@/utils/utils";
import { FieldError } from "react-hook-form";

type ComboboxProps<ItemType> = {
  labelText: string;
  items: ItemType[];
  onItemSelected: (selectedItem?: ItemType) => void;
  displayValueFunction: (object?: ItemType) => string;
  idFunction: (object?: ItemType) => string;
  fieldError?: FieldError;
  defaultValue?: ItemType;
};

const Combobox = <ItemType,>(props: ComboboxProps<ItemType>) => {
  const {
    labelText,
    items,
    onItemSelected,
    displayValueFunction,
    idFunction,
    fieldError,
    defaultValue,
  } = props;
  const [query, setQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<ItemType | undefined>(
    defaultValue
  );

  const filteredItems =
    query === ""
      ? items
      : items.filter((item) => {
          return displayValueFunction(item)
            .toLowerCase()
            .includes(query.toLowerCase());
        });

  const handleChange = (selected?: ItemType) => {
    setSelectedItem(selected);
    onItemSelected(selected);
  };

  const styles =
    "w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm";

  const errorStyles =
    "w-full rounded-md border border-red-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm text-red-900 placeholder-red-300";

  return (
    <HLCombobox
      as="div"
      value={selectedItem}
      onChange={(selected) => handleChange(selected)}
    >
      {labelText && (
        <HLCombobox.Label className="block text-sm font-medium text-gray-700">
          {labelText}
        </HLCombobox.Label>
      )}
      <div className="relative mt-1">
        <HLCombobox.Input
          className={!fieldError ? styles : errorStyles}
          onChange={(event) => setQuery(event.target.value)}
          displayValue={displayValueFunction}
        />
        <HLCombobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </HLCombobox.Button>

        {filteredItems.length > 0 && (
          <HLCombobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredItems.map((item) => (
              <HLCombobox.Option
                key={idFunction(item)}
                value={item}
                className={({ active }) =>
                  classNames(
                    "relative cursor-default select-none py-2 pl-3 pr-9",
                    active ? "bg-indigo-600 text-white" : "text-gray-900"
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={classNames(
                        "block truncate",
                        selected && "font-semibold"
                      )}
                    >
                      {displayValueFunction(item)}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          "absolute inset-y-0 right-0 flex items-center pr-4",
                          active ? "text-white" : "text-indigo-600"
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </HLCombobox.Option>
            ))}
          </HLCombobox.Options>
        )}
      </div>
      {fieldError && (
        <p className="mt-2 text-sm text-red-600" id={`${name}-error`}>
          {fieldError.message}
        </p>
      )}
    </HLCombobox>
  );
};
export default Combobox;

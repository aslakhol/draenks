/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { classNames } from "@/utils/utils";

type SelectProps<ItemType> = {
  labelText: string;
  items: ItemType[];
  onItemSelected: (selectedItem: ItemType) => void;
  displayValueFunction: (object: ItemType) => string;
  idFunction: (object: ItemType) => number;
};

const Select = <ItemType,>(props: SelectProps<ItemType>) => {
  const { labelText, items, onItemSelected, displayValueFunction, idFunction } =
    props;
  const [selectedItem, setSelectedItem] = useState<ItemType>(
    items[0] as ItemType
  );

  const handleSelect = (item: ItemType) => {
    setSelectedItem(item);
    onItemSelected(item);
  };

  return (
    <Listbox value={selectedItem} onChange={(item) => handleSelect(item)}>
      {({ open }) => (
        <>
          {labelText && (
            <Listbox.Label className="block text-sm font-medium text-gray-700">
              {labelText}
            </Listbox.Label>
          )}
          <div className="mt-1 relative">
            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="block truncate">
                {displayValueFunction(selectedItem)}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {items.map((item) => (
                  <Listbox.Option
                    key={idFunction(item)}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-indigo-600" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {displayValueFunction(item)}
                        </span>

                        {selected && (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default Select;

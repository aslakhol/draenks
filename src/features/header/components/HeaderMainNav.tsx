import { classNames } from "@/utils/utils";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import { moreLinks, primaryLinks } from "../headerLinks";

const HeaderMainNav = () => {
  return (
    <Popover.Group as="nav" className="hidden md:flex space-x-10">
      {primaryLinks.map((link, index) => (
        <a
          key={`${link.name}-${index}`}
          href={link.href}
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          {link.name}
        </a>
      ))}

      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? "text-gray-900" : "text-gray-500",
                "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              )}
            >
              <span>More</span>
              <ChevronDownIcon
                className={classNames(
                  open ? "text-gray-600" : "text-gray-400",
                  "ml-2 h-5 w-5 group-hover:text-gray-500"
                )}
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs md:px-0">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {moreLinks.map((link, index) => (
                      <a
                        key={`${link.name}-${index}`}
                        href={link.href}
                        className="-m-3 p-3 block rounded-md hover:bg-gray-50"
                      >
                        <p className="text-base font-medium text-gray-900">
                          {link.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {link.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </Popover.Group>
  );
};

export default HeaderMainNav;

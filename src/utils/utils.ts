export const filterNullish = (array: any[]) => {
  return array.filter(Boolean);
};

export const classNames = (...classes: (string | boolean)[]) => {
  return filterNullish(classes).join(" ");
};

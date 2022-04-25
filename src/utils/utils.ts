export const filterNullish = (array: any[]) => {
  return array.filter(Boolean);
};

export const classNames = (...classes: (string | boolean)[]) => {
  const filtered = filterNullish(classes).join(" ");

  // console.log(filtered, "f");
  return filterNullish(classes).join(" ");
};

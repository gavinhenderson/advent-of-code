export const howManyCanContainBags = (
  bags: Array<Bag>,
  bagName: string
): number => {
  return bags.filter((bag) => canContain(bag, bagName)).length;
};

const canContain = (bag: Bag, bagName: string): boolean => {
  if (bag.rules.length == 0) return false;

  const bagNames = bag.rules.map((current) => current.bag.name);

  if (bagNames.includes(bagName)) return true;

  return bag.rules
    .map((current) => canContain(current.bag, bagName))
    .includes(true);
};

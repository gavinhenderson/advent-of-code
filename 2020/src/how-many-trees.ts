export const howManyTrees = (
  map: Array<Array<string>>,
  right: number,
  down: number
): number => {
  let currentX = 0; // Top Left
  let currentY = 0;
  let numberOfTrees = 0;

  // Loop till you hit the bottom
  while (currentY < map.length) {
    // If its a tree add one
    if (map[currentY][currentX] == "#") {
      numberOfTrees += 1;
    }

    currentY += down;
    currentX += right;
    currentX = currentX % map[0].length;
  }

  return numberOfTrees;
};

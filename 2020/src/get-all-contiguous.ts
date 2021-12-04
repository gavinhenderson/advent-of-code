export const getAllContiguous = (list: Array<number>): Array<Array<number>> => {
  let masterList = [];

  for (let i = 0; i < list.length; i++) {
    let subList = list.slice(i, list.length);

    for (let j = 0; j < subList.length; j++) {
      let subSubList = subList.slice(0, j + 1);

      masterList.push(subSubList);
    }
  }

  return masterList;
};

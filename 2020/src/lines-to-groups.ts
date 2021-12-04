export const linesToGroups = (lines: Array<string>): Array<Group> => {
  let groups = [];
  let currentGroup = [];

  for (const line of lines) {
    if (line === "") {
      groups.push(currentGroup);
      currentGroup = [];
      continue;
    }

    currentGroup.push(line);
  }
  groups.push(currentGroup);

  return groups.map((group) => {
    const unique: Set<string> = new Set();
    const allAnswers = group.join("");

    for (const answer of allAnswers) {
      unique.add(answer);
    }

    const commonQuestions = group
      .map((person) => person.split(""))
      .reduce((a, b) => a.filter((c) => b.includes(c)));

    return {
      people: group,
      uniqueQuestions: [...unique],
      commonQuestions,
    };
  });
};

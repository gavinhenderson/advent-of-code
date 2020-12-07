interface Bag {
  name: string;
  rule: string;
  rules?: Array<Rule>;
}

interface Rule {
  bag: Bag;
  quantity: number;
}

interface Password {
  minChars: number;
  maxChars: number;
  char: string;
  password: string;
}

interface BoardingPass {
  row: number;
  column: number;
  id: number;
}

interface Group {
  people: Array<Array<string>>;
  uniqueQuestions: Array<string>;
  commonQuestions: Array<string>;
}

interface Passport {
  ecl?: string;
  pid?: string;
  eyr?: string;
  hcl?: string;
  byr?: string;
  iyr?: string;
  cid?: string;
  hgt?: string;
}

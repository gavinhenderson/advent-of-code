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

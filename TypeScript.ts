//! დაწერეთ არსებული კოდი Typescript-ში:

// მაგალითი 1

let name: string = "Alice";

// მაგალითი 2

let numbers: number[] = [1, 2, 3];

// მაგალითი 3

function multiply(a: number, b: number): number {
  return a * b;
}

// მაგალითი 4

interface User {
  id: number;
  name: string;
}

const user: User = { id: 1, name: "Alice" };

// მაგალითი 5
// რისთვის ვიყენებთ არსებული კოდში = Guest-ს :

function greet(name: string = "Guest"): void {
  console.log(`Hello, ${name}!`);
}

// პასუხი:

// მაგალითი 6
// დაწერეთ ტიპი რომელიც მოერგება ყველა ქვემოთ ჩამოთვლილ ელემენტს. მაგ: type Config = {

interface ConfigOptions {
  fontSize: number;
  layout: string | null;
}

interface Config {
  theme: string;
  options?: ConfigOptions;
  tester?: string;
}

const config1: Config = {
  theme: "dark",
  options: {
    fontSize: 16,
    layout: null,
  },
};

const config2: Config = {
  theme: "dark",
};

const config3: Config = {
  tester: "test",
};

// მაგალითი 7
// დაწერეთ ტიპი რომელიც მოერგება ყველა ქვემოთ ჩამოთვლილ ელემენტს. მაგ: type MixedArray =

const array1: (number | string | { name: string })[] = [
  42,
  "hello",
  { name: "Alice" },
];
const array2: (string | boolean | { isValid: boolean })[] = [
  "apple",
  true,
  { isValid: false },
];
const array3: never[] = [];

// მაგალითი 8
// აღწერეთ რისი ტიპიზაცია ხდება არსებულ კოდში წერილობით

type Handler = {
  process?: () => string;
  validate?: (input: string) => boolean;
  log?: () => void;
};


// მაგალითი 9

// შექმენით ტიპი მონაცემისთივს:

type User = {};

const user: User = {
  id: 101,
  username: "tech_learner",
  isAdmin: false,
  profile: {
    fullName: "Alice Johnson",
    age: 25,
    interests: ["coding", "gaming", "reading"],
  },
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
    },
  },
  metadata: undefined,
};

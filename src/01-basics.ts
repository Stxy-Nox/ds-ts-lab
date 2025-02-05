import {Friend, Colleague, ColleagueHistory } from './myTypes'




const friend1 = {
  name: "caixian wang",
  phone: "087-12345",
  age: 25,
};

const friend2 = {
  name: "shaohua xu",
  phone: "086--12345",
  age: 31,
};




//   -------------------
const colleague1 = {
  name: "hanrui sun",
  department: "Engineering",
  contact: {
    email: "rgraham@company.com",
    extension: 121,
  },
};

const colleague2 = {
  name: "jingyu tan",
  department: "Finance",
  contact: {
    email: "pburke@company.com",
    extension: 132,
  },
};

const colleague3 = {
  name: "junchen wang",
  department: "HR",
  contact: {
    email: "dos@company.com",
    extension: 125,
  },
};

export const friends = [friend1, friend2];



export const colleagues : ColleagueHistory = {
  current: [colleague1, colleague2, colleague3],
  former: [],
};



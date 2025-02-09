import {Friend, Colleague, EmailContact} from './myTypes'
import {friends, colleagues } from './01-basics'

function older(f: Friend) : string {
  f.age += 1
  return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(f:Friend[]) : string[] {
  return f.map( friend => {
    friend.age += 1;
    return `${friend.name} is now ${friend.age}`
  })
}

console.log(allOlder(friends))

function findFriends( 
  friends: Friend[], 
  finder: (f: Friend) => boolean
): string[] {
  const result = friends.filter(finder).map(f => f.name);
  return result;
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));


function highestExtension(cs: Colleague[]) { // Inferred retun type
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}

console.log(highestExtension(colleagues.current));

function addColleague(cs: Colleague[], name: string, department: string, email: string): void {
  const highestExt = highestExtension(cs).contact.extension;
  const newColleague: Colleague = {
    name,
    department,
    contact: {
      email,
      extension: highestExt + 1,
    }
  }
  cs.push(newColleague);
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max? : number
): EmailContact[] {
  let end = colleagues.length;
  if (max !== undefined) {
     end = max < 2 ? 1 : max
  }
  const sorted = colleagues.sort(sorter);
  const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return fullResult.slice(0,end)
}
// Test invocations
console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW


function addInterest(f: Friend, i: string): string[] {
  if (f.interests == undefined) {
    f.interests = [];
  }
  f.interests.push(i);
  return f.interests;
}

console.log(addInterest(friends[0], 'Politics'))


//Section 1

//what types are these? Write your answer in a comment beside it.

1; Number
"cat"; string
true; boolean
[]; array
{}; hash
1.1; Number
undefined; undefined

//Section 2

// what is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...
1; //true
"cat";//true
true;true
NaN; false
[];true
{}; true
undefined; false
""; false
0;false
null; false

//Section 3

//Using examples that are different from above...

//3.1 Assign a variable that is a number  
var number = 2
//3.2 Assign a variable that is a string  
var string = "hello"
//3.3 Assign a variable that is a boolean 
var boolean = true
//3.4 Assign a variable that is an object
var object = {type: object, name: object}

//Section 4
//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

var myVar = "Hello";
if (myVar){
  console.log(myVar);
} else {
  console.log("bye")
}

//Section 5
var animals = ["raccoon","hedgehog","mouse","gerbil"];

//5.1. Assign the first element to a variable
console.log(animals[0]);
//5.2. Assign the last element to a variable
console.log(animals[3]);
//5.3. Assign the length of an array to a variable
console.log(animals.length);
//5.4. Add an item to the end of the array
animals.push("mouse");
console.log(animals);
//5.5. Add an item to the start of the array
animals.unshift("badger")
console.log(animals)
//5.6. Assign the index of hedgehog to a variable
console.log(animals[1]);

//Section 6

//6.1 Create an array of 5 vegetables
var veg = ["carrot", "broccoli", "cabbage", "neep", "courgette"]
//6.2 Loop over the array and write to the console using a "while"
var i = 0;
while (i < vegies.length) {
  console.log(vegies[i]);
    i++;
}
//6.3 Loop again using a "for" with a counter
for (var i =0; i < vegies.length; i++) {
  console.log(vegies[i]);
}
//6.4 Loop again using a "for in"
   for (veg in vegies) {
   console.log(veg);
   }

//Section 7
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
]
//7.1 Calculate the total cash in accounts
total =0;
for (account of accounts) {
  total += account.amount;
}
console.log(total)
//7.2 Find the name of the account with the largest balance
     i did it but with too much help so doesn't count
//7.3 Find the name of the account with the smallest balance
      i did it but with too much help so doesn't count
//7.4 Calculate the average bank account value
    total =0;
    for (account of accounts) {
      total += account.amount/accounts.length;
    }
    console.log(total)
//7.5 Find the value of marcs bank account
for (account of accounts) {
  if (account.name === 'marc'){
    console.log(account.amount)
  }
}
//7.6 Find the holder of the largest bank account

//7.7 Calculate the total cash in business accounts
console.log(total)
var total = 0;
for (account of accounts) {
  if (account.type === "business"){
    total += account.amount;
  }
}
console.log(total)

//7.8 Find the largest personal account owner
var biggestPersoAccount = accounts[0];
for (account of accounts) {
  if (account.amount > biggestPersoAccount.amount  && account.type === "personal"){
    biggestPersoAccount = account 
  }
}
console.log(biggestPersoAccount.name)

//Section 8
//Assign a variable myPerson to a hash, giving them a name, height favourate food
 
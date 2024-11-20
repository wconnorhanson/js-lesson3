let coders = [
    'Will',
    'Charlie',
    'Connor',
    'Josh',
    'Zeek',
    'Janjala',
    'Favor',
    'Lachelle',
    'Clint',
    'Christopher',
    'Renee',
    'Chloe',
    'Trelin',
    'Darius'
];

// Repetition Structures
/* 
    Looping-

    'for' loop
    'while' loop
    'forEach' loop

        -Not covered-
    "forIn"
    "forOf"
 */

/* 
    'for' loop

    Loops through a data set
    -Syntax-
    for (initialization; condition; iteration) {do stuff}
*/

//loop through the array 'coders'

for (let i = 0; i < coders.length; i++) {
    console.log(`Good morning, ${coders[i]}`)
};

for (let i = coders.length - 1; i >= 0; i--) {
    console.log(`Good morning, ${coders[i]}`)
};

for (let i = 1; i <= 10; i++) {
    console.log(i)
}
// --------------------------New stuff is below here----------------------------- // 
for (let i = 1; i<= 10; i+=2) { //infinite loop
    console.log(i)
}

/* 
    i+2 - infinite loop. Needs an assignment on the 2
    i++ - incriment then print
    ++i - prints then incriments
*/

/* 
    While loops complete a task while a condition is true

    syntax:
    while (condition) {
    // do stuff
    }
 */

// Greet each coder using a while loop
let i = 0 // cannot be inside of loop, it will reset the value as 0. 
while (i < coders.length) {
    // i = 0 causes it to become infinite loop. Value is constantly reset to 0
    console.log(`Good morning, ${coders[i]}`)
    i++ //DO NOT FORGET TO ADD THE INCRIMENT. It bricked
}

// Console is just for testing -/- console.log is a way to text
//

let j = 1
while (j < 11) {
    console.log(j)
    j++
}

/* 
    forEach loop specifically works for arrays and will complete a task for every item

    syntax:
    arrName.forEach(item => {
        /do stuff
    })
*/

// Greet each coder using forEach loop
coders.forEach(coder => {
    console.log(`Good morning ${coder}!!`)
})
// coder is like initializing a variable, similar to 'let'
// '=>' or the "fat arrow" just means to return
// sets every item in the array as 'coder' then returns (=>) {} for each item

coders.forEach(coder => console.log(`Goodbye, ${coder}`))
// only one task being done, curly brace is not needed

// declaritive programming - Telling the computer what to do and how to do it
// imperative programming (recommended) - Telling the computer what to do, but not how to do it


// *THANKS WILL*
//doWhile loops will do it at least once. Can easily go infinite
let k = 1

do {
    console.log(k)
} while (k > 2);

// Nested loops, again thanks to *FUCKEN WILL*
// Nested loop needs two data sets.

// multi-dimensional array
const teams = [
    ['los angeles', 'dodgers'],
    ['detroit', 'lions'],
    ['green bay', 'packers'],
    ['edmonton', 'oilers'],
    ['new york', 'liberty']
]
// it's an array with arrays inside of it

for (let i = 0; i < teams.length; i++) {
    console.log(teams[i])
}
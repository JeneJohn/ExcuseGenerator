// excuse-generator.js
// Array of time references for excuses
const when = [
    "today",
    "yesterday",
    "this morning",
    "last night",
    "over the weekend"
];
// Array of objects or situations for excuses
const what = [
    "my homework",
    "the report",
    "my keys",
    "the meeting notes",
    "the cake"
];
// Array of possible actions (past tense) for excuses
const action = [
    "ate",
    "broke",
    "lost",
    "forgot",
    "spoiled"
];
// Array of possible subjects for excuses
const who = [
    "My dog",
    "My neighbor",
    "The delivery guy",
    "A random stranger"
];
// Simple Excuse Generator

function getRandomExcuse() {
    const excuses = [
        "My dog ate my homework.",
        "I was stuck in traffic.",
        "My alarm didn't go off.",
        "I lost track of time.",
        "There was a power outage.",
        "I wasn't feeling well.",
        "My computer crashed.",
        "I had a family emergency.",
        "I got caught in the rain.",
        "I had to help a friend in need."
    ];
    const index = Math.floor(Math.random() * excuses.length);
    return excuses[index];
}

// Example usage:
console.log(getRandomExcuse());

// Get a random value from the when array
const randomWhen = when[Math.floor(Math.random() * when.length)];
// Get a random value from the what array
const randomWhat = what[Math.floor(Math.random() * what.length)];
// Get a random value from the action array
const randomAction = action[Math.floor(Math.random() * action.length)];
// Get a random value from the who array
const randomWho = who[Math.floor(Math.random() * who.length)];

// Concatenate the random values into a single excuse sentence
const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
console.log(excuse);

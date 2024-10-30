/**
 * Unit 3 - Conditionals and Loops
 * ICS3 - Mr. Brash 🐿️
 * 
 * For this unit, Mr. Brash is trying something different. Each lesson will
 * be in this one repository, separated in the Lessons folder.
 * 
 * If you run into Git or Github issues, call Mr. Brash over.
 **/ 


'use strict';

/*** Event Listeners ***/



/*** Functions ***/

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Oki doki, let's go!!
function user() {
    let age = prompt(`How old are you?`);
    if (+age >= 60) {
        return `You qualify for a senior discount!`;
    }
    
    if (+age < 16) {
        return `You are not old enough to drive yet :(`;
    }

    if (+age == 44) {
        return `So is Mr. Brash!`;
    }

    if (+age == 17) {
        return `So is Mr. Squirrel!`;
    }

    return `You are old enough to drive!`;
}

// "What's in a name?"
// "A lot! A lot when it's Pnackleless !"
// (reference to dimension 20's A Court of Fey and Flowers)
function name() {
    let user_name = prompt(`What is your name?`);
    let name_length = user_name.length;

    if (user_name == `Mr. Squirrel`) {
        console.log(`🐿️?`);
    }

    if (name_length > 7) {
        console.log(`You have a long name!`);
    }

    if (name_length < 4) {
        console.log(`You have a short name!`);
    }

    let length_guess = prompt(`How many characters long is your name?`)

    if (length_guess > name_length) {
        return `Nope! Too high!`;
    }

    if (length_guess < name_length) {
        return `Nope! Too low!`;
    }

    return `That's right! Your name is ${name_length} characters long!`;
}
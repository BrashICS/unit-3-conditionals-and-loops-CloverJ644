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


// ALRIGHT HALLOWEEN UPDATE LET'S GO YAHOOOOO!!!!!
// Can you tell I'm excited :3

function startGame() {
    alert("Hello user! Welcome to the demo of my spooky text-based adventure game! Hope you enjoy your stay~");
    let name = prompt ("Please input the name of your character");
    alert(`You are an adventurer by the name of ${name}. With a trusty not-so sharp sword, a book of spells, and a lantern, you've been sent off on an adventure.`);
    alert(`You are journeying into a dark forest on the outskirts of town, sent to explore the forest, to see if it's at all worth expanding into.`);
    alert(`You are alone. You, your gear, and a lantern they provided you. The wind howls around you.`);
    alert(`Get moving.`);
    alert(`You enter the forest, dark trees looming over you as you trek along the dirt path that leads into the forest. It doesn't take long for the path to grow rougher, less proper. You begin to trip and stumble over roots and the like. It seems this is as far as anyone's gotten...`);
    alert(`> 1 light your lantern to see your surroundings better, or > 2 unsheath your sword and cut through the roots.`)
    let lan_or_swr = prompt(`please choose`);
    if (lan_or_swr == 1) {
        lantern_use()
    }

    if (lan_or_swr == 2) {
        sword_use()
    }

    alert(`Continuing through the forest with flickering lantern light, you look at the trees around you, towering over you. The forest is thick, dark, and unruly. It's as if the forest is alive with death itself...`);
    alert(`... Unfortunately, that's all I have for the demo! I'll add more later, I prommy <:3`);
    return `get bent loser >:P`;
}

function lantern_use() {
    alert(`You fumble a little with the lantern as you open it, using a small bit of magic to light it.`);
    alert(`You squint as your eyes adjust to the light, but now glancing at your feet, you can see the roots around you. You step carefully around them as the terrain becomes more difficult. You continue through the forest.`);
}

function sword_use() {
    alert(`You unsheath your sword and brandish it, slicing through a root that had snagged your foot.`);
    alert(`You make some progress, though it takes a bit of blind swinging, which is rather dangerous. You might've nicked yourself on your blade, but you aren't sure. After a few feet of struggling, you cave and light your lantern. With a light to guide you now, you continue through the forest.`)
}
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
    let lan_or_swr = prompt(`> 1 Light your lantern to see your surroundings better
    /
    > 2 Unsheath your sword and cut through the roots.`);
    if (lan_or_swr == 1) {
        lantern_use()
    }

    if (lan_or_swr == 2) {
        sword_use()
    }

    alert(`Continuing through the forest with flickering lantern light, you look at the trees around you, towering over you. The forest is thick, dark, and unruly. It's as if the forest is alive with death itself...`);
    alert(`In your dim lantern light, you can see the gnarled black branches that seem to reach towards you. The forest is eerily quiet, only the sounds of your own booted footsteps against crunching grass, the wind whistling through the branches, and the slight clinks of your lantern and sword.`);
    alert(`... Is something watching you?`);
    let paranoia = prompt(`> 1 Of course not, why would there be? 
    /
    > 2 I swear there is`);
    if (paranoia == 1) {
        paranoia_no()
    }

    if (paranoia == 2) {
        paranoia_yes()
    }

    alert(`... And unfortunately, that's all I have for the demo! I'll add more later, I prommy <:3`);
    return `Thank you for playing!`;
}

function lantern_use() {
    alert(`You fumble a little with the lantern as you open it, using a small bit of magic to light it.`);
    alert(`You squint as your eyes adjust to the light, but now glancing at your feet, you can see the roots around you. You step carefully around them as the terrain becomes more difficult. You continue through the forest.`);
}

function sword_use() {
    alert(`You unsheath your sword and brandish it, slicing through a root that had snagged your foot.`);
    alert(`You make some progress, though it takes a bit of blind swinging, which is rather dangerous. You might've nicked yourself on your blade, but you aren't sure. After a few feet of struggling, you cave and light your lantern. With a light to guide you now, you continue through the forest.`)
}

function paranoia_no() {
    alert(`You shrug off the feeling. It's nothing. You haven't seen a living thing since you entered this forest, and the whole reason you're here is to see if it's worth people coming to this place, and living here. Even if something /was/ looking at you, it's probably just some kind of animal. Nothing to worry about.`);
    alert(`You trek onwards.`);
}

function paranoia_yes() {
    alert(`You don't know when exactly it started, but something is watching you. Something is /looking at you/. Studying you. Analytically. Clinically, almost...`);
    alert(`It's unsettling. You find yourself looking over your shoulder, checking, trying to catch a glimpse of the creature. Whatever it is, it's following you. It's /hunting/ you...`);
    alert(`What do you do?`);
    let hunted_choice = prompt(`> 1 Unsheath your sword and brandish it
        /
        > 2 Open your book of spells and cast something
        /
        > 3 Shine your lantern towards the trees`);
    if (hunted_choice = 1) {
        hunted_sword()
        return `The darkness consumes you. Your body is never found.`;
    }

    if (hunted_choice = 2) {
        hunted_magic()
    }

    if (hunted_choice = 3) {
        hunted_lantern()
    }
    alert(`With your fears eased, at least slightly, you continue on.`);
}

function hunted_sword() {
    alert(`Your sword gives a familiar metallic whispering sound as you unsheath it from its leather, and you hold it out towards the trees behind you`);
    alert(`It's quiet.`);
    alert(`Carefully, you take a step towards the trees. You know that the creature is there. Right in front of you, hidden in the darkness of the trees. You level the sword at it.`);
    alert(`Cowardly beast. It won't even come out and face you. In a moment of bravery, you call out in time with a rustling of the brush, and—`);
}

function hunted_magic() {
    alert(`You flip open your spellbook, looking through the pages. There must be something helpful in here, surely... Something useful. Someething to fight with.`);
    alert(`It's quiet.`);
    alert(`Finally, you find something you can use. A simple fire spell. It won't take much energy, and it should scare any creature that could be following you off. Flame sparks against your palm before flaring out in a burst. It brightens the forest for a moment. There's a flicker of a reflection in the eyes of a beast, but you see in the darkness that it scurries away.`);
    alert(`... Ah. The fire must've frightened it. Well, you suppose it isn't a problem anymore.`);
}

function hunted_lantern() {
    alert(`You turn your lightsource towards the trees, taking a few steps forward. The orange glow of the firelight illuminates the trees, letting you see the darkened wood of the forest around you.`);
    alert(`It's quiet.`);
    alert(`You can't see anything. Even as you step further into the wood, holding out your lantern. Even in the furthest reaches of the light, you can't see anything but trees and branches. It seems there wasn't anything after all...`);
    alert(`Well, that's a relief.`);
}
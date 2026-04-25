// My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:

// "dolphin" -> "The Dolphin"

// However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:

// "alaska" -> "Alaskalaska"

// Complete the function that takes a noun as a string, and returns her preferred band name written as a string.

function generateBandName(noun) {
    const firstCharacter= noun[0] 
    const lastCharacter= noun[noun.length-1]
    if (firstCharacter===lastCharacter) {
        return noun[0].toUpperCase() + noun.slice(1) + noun.slice(1);
        
    }
    return "The"+ " " + noun[0].toUpperCase() + noun.slice(1) 


}


const alaskaBandName = "alaska";
const result = generateBandName(alaskaBandName);
console.log(result);

const capDolphin = "dolphin";
const newResult = generateBandName(capDolphin);
console.log(newResult);



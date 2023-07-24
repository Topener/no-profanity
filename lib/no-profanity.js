import { ProfanityEngine } from "@coffeeandfun/google-profanity-words";
let profanity = new ProfanityEngine();
const baseList = profanity.all();

const isProfane = (args) => {
    const matches = containsProfanities(args);
    return matches.length > 0;
};

const containsProfanities = (args) => {
    const { testString, wordList } = parseArgs(args);
    const matches = [];
    const regex = new RegExp(`\\b(${wordList.join("|")})\\b`, "ig");
    let match;

    while ((match = regex.exec(testString)) !== null) {
        matches.push({ word: match[0], index: match.index }); // Add the matched word to the matches array
    }

    return matches;
};

const replaceProfanities = (args) => {
    const { testString, options } = parseArgs(args);
    const matches = containsProfanities(args);

    const replacement = options.replacement ? options.replacement : "*";
    let newString = testString;

    matches.forEach((match) => {
        const { word, index } = match;
        const asterisks = replacement.repeat(word.length);
        newString = newString.substring(0, index) + asterisks + testString.substring(index + word.length);
    });
    return newString;
};

const parseArgs = (args) => {
    let excludededSet = new Set();
    if (args?.options?.excludes) {
        excludededSet = new Set([...args.options.excludes]);
    }
    let wordList = baseList.filter((word) => !excludededSet.has(word));

    let options, testString;
    if (typeof args === "string") {
        testString = args;
        options = {};
    } else {
        ({ testString, options } = args);
    }

    if (typeof options?.includes === "object" && options?.includes?.length > 0) {
        wordList = [...wordList, ...options.includes];
    }

    return { testString, options, wordList };
};

export { isProfane, containsProfanities, replaceProfanities };

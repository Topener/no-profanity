/**
 * Checks if the given test string contains any profanities based on the provided arguments.
 * @param {string | { testString: string, options: object }} arguments - The arguments as per documentation where `testString` is the string to test and `options` is an object containing options. Or just a string to test without additional options.
 * @returns {boolean} - A boolean value indicating whether the test string contains profanities or not.
 */
const isProfane: (args: string | { testString: string; options: object }) => boolean;

/**
 * Checks if the given test string contains any profanities based on the provided arguments.
 * @param {string | { testString: string, options: object }} arguments - The arguments as per documentation where `testString` is the string to test and `options` is an object containing options. Or just a string to test without additional options.
 * @returns {Array<{ word: string, index: number }>} - An array of objects representing the matched profanities and their indices in the test string.
 */
const containsProfanities: (args: string | { testString: string; options: object }) => Array<{ word: string; index: number }>;

/**
 * Replaces profanities in the given test string based on the provided arguments.
 * @param {string | { testString: string, options: object }} arguments - The arguments as per documentation where `testString` is the string to test and `options` is an object containing options. Or just a string to test without additional options.
 * @returns {string} - The test string with profanities replaced.
 */
const replaceProfanities: (args: string | { testString: string; options: object }) => string;

/**
 * Parses the arguments and returns an object containing the test string, options, and word list.
 * @param {string | { testString: string, options: object }} arguments - The arguments as per documentation where `testString` is the string to test and `options` is an object containing options. Or just a string to test without additional options.
 * @returns {{ testString: string, options: object, wordList: Array<string> }} - The parsed arguments.
 */
const parseArgs: (args: string | { testString: string; options: object }) => {
    testString: string;
    options: object;
    wordList: Array<string>;
};

/**
 * Logs a message if warnings are not suppressed in the options.
 * @param {string} msg - The message to log.
 * @param {string | { testString: string, options: object }} args - The arguments passed to the function.
 * @returns {void}
 */
const log: (msg: string, args: string | { testString: string; options: object }) => void;

const { replaceProfanities } = require("../lib/no-profanity.js");

describe("filter", () => {
    test("Should append words to the filter list.", () => {
        const options = { list: ["go", "dog"], surpressWarnings: true };
        expect(replaceProfanities({ testString: "Go dog go", options })).toBe("** *** **");
    });

    test("Should not replace words at all because of empty list.", () => {
        const options = { emptyList: true, surpressWarnings: true };
        expect(replaceProfanities({ testString: "fuck shit", options })).toBe("fuck shit");
    });

    test("should pre-sanitize correctly using a regex pattern", () => {
        const options = {
            regex: /\bdog\b/,
            surpressWarnings: true,
        };

        expect(replaceProfanities({ testString: "the dog is great", options })).toBe("the  is great");
    });

    test("should replace with x's instead of *'s", () => {
        const options = {
            placeHolder: "x",
            surpressWarnings: true,
        };

        expect(replaceProfanities({ testString: "fuck shit", options })).toBe("xxxx xxxx");
    });
});

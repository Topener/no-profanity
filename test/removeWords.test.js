const { replaceProfanities } = require("../lib/no-profanity.js");

describe("filter", () => {
    describe("removeWords", () => {
        it("Should allow you to remove words from the filter blacklist and no longer filter them (case-insensitive)", () => {
            const options = { excludes: ["hells"] };

            expect(replaceProfanities({ testString: "This is a hells good test", options })).toBe("This is a hells good test");
        });

        it("Should allow you to remove an array of words from the filter blacklist and no longer filter them", () => {
            const options = { excludes: ["hells", "sadist"] };
            expect(replaceProfanities({ testString: "This is a hells sadist test", options })).toBe("This is a hells sadist test");
        });
    });
});

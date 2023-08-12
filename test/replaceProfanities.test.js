const { replaceProfanities } = require("../lib/no-profanity.js");

describe("replaceProfanities", () => {
    it("Should replace a bad word within a sentence asterisks (******)", () => {
        expect(replaceProfanities("Don't be an asshole")).toBe("Don't be an *******");
    });

    it("Should replace multiple instances of any bad words within a sentence asterisks (******)", () => {
        expect(replaceProfanities("cunts asshole knob xxx")).toBe("***** ******* **** ***");
    });

    it("Should not replace anything within a sentence if there are no bad words", () => {
        expect(replaceProfanities("The cat ran fast")).toBe("The cat ran fast");
    });

    it("Should replace a string with proper placeholder when overridden", () => {
        const options = { replacement: "x" };
        expect(replaceProfanities({ testString: "This is a fucking good test", options })).toBe("This is a xxxxxxx good test");
    });

    it("should not replace a profane word when it's excluded", () => {
        const options = { excludes: ["asshole"] };
        expect(replaceProfanities({ testString: "don't be an asshole", options })).toBe("don't be an asshole");
    });

    it("should replace a non-profane word when it's included", () => {
        const options = { includes: ["an"] };
        expect(replaceProfanities({ testString: "don't be an asshole", options })).toBe("don't be ** *******");
    });

    it("Should tokenize words according to regex word boundaries", () => {
        expect(replaceProfanities("what a bitch...fuck you")).toBe("what a *****...**** you");
        expect(replaceProfanities("<p>Don't be an asshole</p>")).toBe("<p>Don't be an *******</p>");
    });

    it("Shouldn't filter words that aren't profane.", () => {
        expect(replaceProfanities("hello there")).toBe("hello there");
    });

    it("should replace tabs with spaces", () => {
        const options = {
            preSanitizeReplacement: "spaces",
            preSanitize: /\btabs\b/,
        };
        expect(replaceProfanities({ testString: "tabs are the best", options })).toBe("spaces are the best");
    });
});

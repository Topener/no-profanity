import { replaceProfanities } from "../lib/no-profanity.js";

describe("filter", () => {
    test("Should append words to the filter list.", () => {
        const options = { includes: ["go", "dog"] };
        expect(replaceProfanities({ testString: "Go dog go", options })).toBe("** *** **");
    });
});

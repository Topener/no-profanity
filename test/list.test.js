const { getProfanities } = require("../lib/no-profanity");

describe("getProfanities", () => {
    it("should return an array of profanities", () => {
        const profanities = getProfanities();
        expect(profanities).toBeInstanceOf(Array);
        expect(profanities.length).toBeGreaterThan(1000);
    });

    it("should be an empty array when the emptyList option is true", () => {
        const profanities = getProfanities({ options: { emptyList: true } });
        expect(profanities).toBeInstanceOf(Array);
        expect(profanities.length).toBe(0);
    });

    it("should be a bigger number when adding a few words", () => {
        const profanities = getProfanities({ options: { includes: ["foo", "bar"] } });
        const profanities2 = getProfanities();
        expect(profanities.length).toBeGreaterThan(profanities2.length);
    });

    it("should be smaller when excluding a few words", () => {
        const profanities = getProfanities({ options: { includes: ["foo", "bar"] } });
        const profanities2 = getProfanities();
    });
});

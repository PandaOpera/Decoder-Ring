// Write your tests here!
const expect = require("chai").expect
const substitutionModule = require("../src/substitution")
describe('substitution()', () => {
    describe ('error-handling', () => {
        it("include spaces, letters, and special characters", () =>{
            const expected = "message";
            const actual = substitutionModule.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
            expect(actual).to.equal(expected);
        });
        it("capital letter ignored", () =>{
            const expected = 'thinkful';
            const actual = substitutionModule.substitution('Jrufscpw', "xoyqmcgrukswaflnthdjpzibev", false);
            expect(actual).to.equal(expected);
        });
        it('no duplicate letters in substitution alphabet parameter', () => {
            const actual = substitutionModule.substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
            expect(actual).to.be.false
        })
    });
});

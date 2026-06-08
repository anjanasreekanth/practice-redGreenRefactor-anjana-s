const countVowels = require('../count-vowels.js');

//Red test case
describe("The count vowels function", function(){
    test("Returns number of vowels in a string", () =>{
       let count = countVowels("Java")
        expect(count).toBe(2);
    });

});
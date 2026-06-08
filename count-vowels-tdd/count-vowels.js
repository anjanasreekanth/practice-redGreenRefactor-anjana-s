function countVowels(str){
    
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (const character of str){
        if(vowels.includes(character)){
           count++;
        }
    }
 return count;
}
//testing the green section
//console.log(countVowels("LaunchCode"));

//Refactoring the code
console.log(`Number of vowels are: ${countVowels("Refactor")}`);
module.exports = countVowels;
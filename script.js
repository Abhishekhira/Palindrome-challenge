console.log("palindrome check challenge")
//basically palindrome methods is used to check the sequence of character from left to right and right to left and  palindrome is the word or number which is same as we read it from forward as well as backbard
//lets learn about hown palindrome method works

function palindrome(str) {
    const string=str.split('').reverse().join('')
    console.log(string)
}
palindrome('eye')

//now as we saw palindrome function working perfectly fine but what if we have non alphanumeric charcter in hour palindrome word so we have to remove these charcter and then check if that word is palindrome or not so for this we are going to use regex:regex is basicallyy regular expression which is a sequence of specific character that matches a specific search pattern


function palCheck(strg) {
    const regex=/[\W_]/g;
    const smallString=strg.toLowerCase().replace(regex,"")
    const reversed=smallString.split('').reverse().join('')
    // if (reversed===strg) return true;
    // return false;
     
   return reversed;
}
console.log(palCheck('racecar'))
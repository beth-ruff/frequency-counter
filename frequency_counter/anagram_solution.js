// Given two strings, write a function to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// example: validAnagram('', '') // true
// example: validAnagram('anagram', 'nagaram') // true
// example: validAnagram('awesome', 'awesom') // false

//comparing strings:
function validAnagram(str1, str2){
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');
    if (sortedStr1 === sortedStr2) {
        return true;
    } else {
        return false;
    }
}

//comparing objects:
function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    let obj1 = {};
    let obj2 = {};
    for(let val of str1){
        obj1[val] = (obj1[val] || 0) + 1;
    }
    for(let val of str2){
        obj2[val] = (obj2[val] || 0) + 1;
    }
    for(let key in obj1) {
        if(!(key in obj2)) {
            return false;
        }
        if(obj2[key] !== obj1[key]){
            return false;
        }
    }
    return true;
}

//or

function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    const obj = {};
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        obj[char] ? obj[char] += 1 : obj[char] = 1;
    }
    for (let i = 0; i < str2.length; i++) {
        let char = str2[i];
        if (!obj[char]) {
            return false;
        } else {
            obj[char] -= 1;
        }
    }
    return true;
}
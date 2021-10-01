
function max(a, b) {
    if (a > b) return a;
    return b;
}

function maxOfThree(a, b, c) {
    let m = a;
    if (b > m) m = b;
    if (c > m) m = c;
    return m;
}

function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char);
}

function sum(nums) {
    return nums.reduce(function(acc, num) {
        return acc + num;
    }, 0);
}

function multiply(nums) {
    return nums.reduce(function (acc, num) {
        return acc * num;
    }, 1);
}

function reverse(str) {
    let s = "";
    for(let i=str.length-1; i >= 0; i--) {
        s += str[i];
    }
    return s;
}

function findLongestWord(words) {
    let max = words[0].length;
    words.forEach(function(e) {
        if (e.length > max) max = e.length;
    });
    return max;
}

function filterLongWords(words, i) {
    return words.filter(function(e) {
        return e.length > i;
    });
}

const a = [1,3,5,3,3]; 
const x10 = a.map(function(e) {
    return e * 10;
});

const threes = a.filter(function(e){
    return e === 3;
});

const product = a.reduce(function(acc, e) {
    return acc * e;
}, 1);


function test(expected, found) {
    if (expected === found) return 'TEST SUCCEEDED';
    return 'TEST FAILED. Expected: ' + expected + ', but found: ' + found;
}

function testArray(expected, found) {
    if (expected.length !== found.length) 
        return 'TEST FAILED. Expected: ' + expected + ', but found: ' + found;

    for(let i = 0; i < expected.length; i++) {
        if (expected[i] !== found[i])
            return 'TEST FAILED. Expected: ' + expected[i] + ', but found: ' + found[i];
    }

    return 'TEST SUCCEEDED' 
}


/****** Testing **********/

console.log('Expected output of max(4,5) is 5 ' + test(5, max(4,5)));
console.log('Expected output of max(6,4,5) is 6 ' + test(6, maxOfThree(6,4,5)));
console.log('Expected output of isVowel("e") is true ' + test(true, isVowel("e")));
console.log('Expected output of sum(4,5,1) is 10 ' + test(10, sum([4,5,1])));
console.log('Expected output of multiply([4,5,2]) is 40 ' + test(40, multiply([4,5,2])));
console.log('Expected output of reverse("Konnichiwa") is awihcinnoK ' + test('awihcinnoK', reverse('Konnichiwa')));
console.log('Expected output of findLongestWord(["cat", "word", "umbrella"]) is 8 ' + test(8, findLongestWord(["cat", "word", "umbrella"])));
console.log('Expected output of filterLongWords(["cat", "word", "umbrella"], 4) is ["umbrella"] ' + testArray(['umbrella'], filterLongWords(["cat", "word", "umbrella"], 4)));
console.log('Expected output of multiplying each elements of [1,3,5,3,3] by 10 is [10, 30, 50, 30, 30] ' + testArray([10, 30, 50, 30, 30], x10));
console.log('Expected output of filtering only those that are equal to 3 is [3,3,3] ' + testArray([3, 3, 3], threes));
console.log('Expected output of product of [1,3,5,3,3] is 135 ' + test(135, product));
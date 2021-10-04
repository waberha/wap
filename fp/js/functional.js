

function sum(nums) {
    return nums.reduce((acc, e) => acc + e, 0);
}


function multiply(nums) {
    return nums.reduce((acc, e) => acc * e, 1);
}

function reverse(str) {
    return [...str].sort((a,b) => -1).join('');
}

function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}
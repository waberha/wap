mocha.setup('bdd');
let assert = chai.assert;

describe("sum", function() {

    function testSum(ary) {
        let expected = 0;
        for(e of ary) expected += e;
        it(`sum of ${ary} is ${expected}`, function() {
            assert.equal(sum(ary), expected);
        })
    }

    testSum([1,2,3]);
    testSum([-2,-1,0]);
    testSum([10,20,30]);
});


describe("multiply", function() {

    function testMultiply(ary) {
        let expected = 1;
        for(e of ary) expected *= e;
        it(`product of ${ary} is ${expected}`, function() {
            assert.equal(multiply(ary), expected);
        })
    }

    testMultiply([1,2,3]);
    testMultiply([-2,-1,0]);
    testMultiply([10,20,30]);
});


describe("reverse", function() {

    function testReverse(str, rev) {
        it(`reverse of '${str}' is ${rev}`, function() {
            assert.equal(reverse(str), rev);
        })
    }

    testReverse('hello', 'olleh');
    testReverse('deified', 'deified');
    testReverse('functional', 'lanoitcnuf');
});


describe("filterLongWords", function() {

    function testFilterLongWords(words, i, longWords) {
        it(`words longer than ${i} for '${words}' are '${longWords}'`, function() {
            assert.deepEqual(filterLongWords(words, i), longWords);
        })
    }

    testFilterLongWords(['js', 'function', 'walks', 'into', 'a', 'bar'], 4, ['function', 'walks']);
});

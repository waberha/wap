

describe("filter", function() {

    let str = 'This house is not nice!';
    let expected = 'This house is nice!';

    it(`'${str}'' after filetered is '${expected}'`, function() {
        assert.equal(str.filter('not'), expected);
    })
});


describe("bubble sort", function() {

    let nums = [6,4,0, 3,-2,1];
    let expected =  [-2, 0, 1, 3, 4, 6];

    it(`${nums} sorted is ${expected}`, function() {
        assert.deepEqual(nums.bubbleSort(), expected);
    })
})

describe("teacher", function() {

    let teacher = new Teacher();
    teacher.initialize('John', 25);
    let subject = 'Math';

    let expected = `John is now teaching ${subject}`;

    it (`teacher.teach() should print '${expected}'`, function() {
        assert.equal(teacher.teach(subject), expected)
    })
})
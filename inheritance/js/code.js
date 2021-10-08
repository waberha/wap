
String.prototype.filter = function(...banned) {

    return this.split(' ')
        .filter(str => !banned.includes(str))
        .join(' ');
};

Array.prototype.bubbleSort = function() {
    return this.sort((a,b) => a-b);
};


var Person = function(){};
Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function() {
    return this.name + ", " + this.age + " years old.";
}

var Teacher = function(){};
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.teach = function(subject) {
    return `${this.name} is now teaching ${subject}`;
}


// Q#1 soln
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('What is your name? ', name => {
    
    console.log(`Welcome ${name}`);
    readAge();

    function readAge() {
        readline.question('How old are you? ', age => {
            
            age = parseInt(age);
            if (isNaN(age)) {
                console.log('Invalid input! Please try again')
                readAge();
                return;
            }
            else if (age < 16) console.log('You are not allowed to drive in Iowa');
            else console.log("You're allowed to get a drivers license in Iowa");
            readline.close();
        });
    }

});


// Q#2 soln
{
    let sum = 0;
    
    function readNumber() {
        readline.question('Please enter a number. To stop the program type \'stop\' ', num => {
            if (num === 'stop'){
                console.log(`The sum of all the numbers you typed is ${sum}`);
                readline.close();
                return;
            } else if (!isNaN(parseInt(num))) {
                sum += parseInt(num);
            }
            readNumber();
        })
    }

    readNumber();
}

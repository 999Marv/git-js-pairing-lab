//Code your solutions in this file
function fiveToOneHundred() {
    for (let i = 5; i <= 100; i++) {
        console.log(i)
    }
}
// fiveToOneHundred()

function multiplesOfThree() {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

//multiplesOfThree()

function multiplesOfThreeorFive() {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
}

// multiplesOfThreeorFive()

function untilNum(num) {
    for (let i = 1; i <= num; i++) {
        console.log(i)
    }
}
// untilNum(9)

function multiply(a, b) {
    return a * b
}

// console.log(multiply(3, 7.5))

function add(a, b) {
    if (a === b) {
        return 3 * (a * b)
    }
    else {
        return a * b
    }
}
//console.log(add(3,3))

function isNegative(num) {
    return num < 0;
}

// console.log(isNegative(-2))
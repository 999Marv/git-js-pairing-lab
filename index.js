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

function triangleArea(a, b) {
    return .5 * (a * b)
}
// console.log(triangleArea(5,7))

function betweenTwentyAndFourty(num) {
    return num > 20 && num < 40
}

// console.log(betweenTwentyAndFourty(299))
function largest(a, b, c) {
    return Math.max(a, b, c)
}
// console.log(largest(4,6,8))


//                      BONUS QUESTIONS

function getExtension(file) {
    return `.${file.split('.')[1]}`
}
// console.log(getExtension("app.js"))

function isLeapYear(i) {
    if ( i % 400 ===0|| i % 4 === 0 && i % 100 !== 0){
        return true 
    } else {
        return false 
    }
}
// console.log(isLeapYear(1999))




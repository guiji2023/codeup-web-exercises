
//1.


let a = 1;
let b = a++;
// a ++ changes the value of 'a' as well
let c = ++a;

console.log(`c = ${c}`);


let d = "hello";
let e = false;

d++;
e++;

console.log(`d is ${d}, e is ${e}`)

let perplexed;
perplexed +2;
console.log(`perplexed is ${perplexed}`)

let price = 2.7;
price.toFixed(2);
console.log(`price is ${price} and its type is ${typeof price}`)


// let price = "2.7";
// price.toFixed(2);

// toFixed does not work because price is a string.

let nan1  =isNaN(0)

let nan2  =isNaN(1)

let nan3  =isNaN("")

let nan4  =isNaN("string")

let nan5  =isNaN("0")

let nan6  =isNaN("1")

let nan7  =isNaN("3.145")

let nan8  =isNaN(Number.MAX_VALUE)

let nan9  =isNaN(Infinity)

let nan10  =isNaN("true")

let nan11 = isNaN(true)

let nan12 = isNaN("false")

let nan13 = isNaN(false)

let nan14 = NaN == NaN

console.log(`
isNaN(0) is ${nan1}

isNaN(1) is ${nan2}

isNaN("") is ${nan3}
 
isNaN("string") is ${nan4}

isNaN("0") is ${nan5}

isNaN("1") is ${nan6}

isNaN("3.145") is ${nan7}

isNaN(Number.MAX_VALUE) is ${nan8}

isNaN(Infinity) is ${nan9}

isNaN("true") is ${nan10}

isNaN(true) is ${nan11}

isNaN("false") is ${nan12}

isNaN(false) is ${nan13}

NaN == NaN is ${nan14}`)


// to illustrate why the isNaN() function is needed:

let boValue1 =!true

let boValue2 =!false

let boValue3 =!!true

let boValue4 =!!false

let boValue5 =!!0

let boValue6 =!!-0

let boValue7 =!!1

let boValue8 =!!-1

let boValue9 =!!0.1

let boValue10 =!!"hello"

let boValue11 =!!""

let boValue12 =!!''

let boValue13 =!!"false"

let boValue14 =!!"0"

console.log(`

    !true is ${boValue1}
    
    !false is ${boValue2}
    
    !!true is ${boValue3}
    
    !!false is ${boValue4}
    
    !!0 is ${boValue5}
    
    !!-0 is ${boValue6}
    
    !!1 is ${boValue7}
    
    !!-1 is ${boValue8}
    
    !!0.1 is ${boValue9}
    
    !!"hello" is ${boValue10}
    
    !!"" is ${boValue11}
    
    !!'' is ${boValue12}
    
    !!"false" is ${boValue13}
    
    !!"0" is ${boValue14}`
);

//2

let sample = "Hello Codeup";
let sampleLength = sample.length;
console.log(`
    The length of sample is ${sampleLength}`);

let sampleUpperCase = sample.toUpperCase();
let sampleLowerCase = sample.toLowerCase();
console.log(`
    Upper Case of sample is ${sampleUpperCase}
    Lower Case of sample is ${sampleLowerCase}
`);

let concatenatedStr = sample +" Students";

console.log(`
    The concatenated string is ${concatenatedStr}
`)

let replacedStr = concatenatedStr.replace("Students","Class");
console.log(`
    The replaced string is ${replacedStr}
`)

console.log("The index of 'c' is", sample.indexOf('c'));
console.log("The index of 'C' is", sample.indexOf('C'));


let startIndex = sample.indexOf('C');

let endIndex = startIndex + "codeup".length;
console.log("The new string is:", sample.substring(startIndex,endIndex));


let mermaidDay = 3;
let brotherBearDay = 5;
let herculesDay = 1;

let pricePerDay = 3;

let sum = (mermaidDay + brotherBearDay + herculesDay) * pricePerDay;
console.log(`The total amount is: $${sum}`);

let googleRate = 400;
let amazonRate = 380;
let facebook = 350;

let payment = googleRate * 6 + facebook * 10 + amazonRate * 4;
console.log(`The total payment received is: $${payment}`);

let username = 'codeup';
let password = 'notastrongpassword ';

let atLeast5Char = username.length > 5 ;
let notIncludeUsername = !password.toLowerCase().includes(username.toLowerCase());
let noMoreThan20Char = username.length <= 20;
// let noStartWhiteSpace = username[0] !==" " && password[0] !==" ";
// let noEndWhiteSpace = username[username.length -1] !==" " && password[password.length -1] !==" ";
let noStartOrEndWithWhiteSpace = username === username.trim() && password === password.trim();

const isPasswordvalid = atLeast5Char&&notIncludeUsername&&noMoreThan20Char&&noStartOrEndWithWhiteSpace

isPasswordvalid? console.log("The password is good to use"): console.log("Choose another password!")

let totalCost = 23.23;
totalCost = totalCost.toLocaleString("en-US", {style:"currency", currency:"USD"});
console.log(totalCost);


const event = new Date(Date.UTC(2023, 10, 5, 9, 40, 0));
console.log(event.toLocaleString('en-US', {timeZone:"UTC"}));
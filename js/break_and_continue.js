
const isValidNumber = (a) =>{
     return a % 2 == 1 && a > 1 && a < 50;
}

let a = parseInt(prompt("Enter an odd number between 1 and 50!"))

while (!isValidNumber(a)){
    alert(`You entered ${a}, which is not an appropriate number`);
    a = parseInt(prompt("Enter an odd number between 1 and 50!"))
}

//do while loop
// do {
//     alert(`You entered ${a}, which is not an appropriate number`);
//     a = parseInt(prompt("Enter an odd number between 1 and 50!"))
// } while (!isValidNumber(a))

console.log(`Number to skip is: ${a}`);
console.log("\n");
for (let i = 1; i <50;i = i +2){
    if (i == a){
        console.log(`Yikes! Skipping number: ${i}`);
        continue;
    }
    console.log(`Here is an odd number: ${i} `);
}

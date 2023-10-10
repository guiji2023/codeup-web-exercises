
// While Loops
let num = 1;
while(num < 40000){
    num *=2;
    console.log(num);
}


//Do while loop

//Generate a number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;
let soldCones = Math.floor(Math.random() * 5) +1;

do {
    if (allCones > soldCones){
        console.log(`${soldCones} cones sold...`);
        allCones -= soldCones;
    } else if (allCones == soldCones){
        console.log(`${soldCones} cones sold...`);
        console.log(`Yay! I sold them all!`)
        break;
    } else {
        console.log(`Cannot sell you ${soldCones} cones I only have ${allCones}...`)
    }
    soldCones = Math.floor(Math.random() * 5) +1;
}while(true)
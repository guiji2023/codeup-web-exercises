

const showMultiplicationTable = (a) =>{
    for (let i = 1; i < 11; i++){
        console.log(`${a} x ${i} = ${a * i}`);
    }
}

// let num = prompt("Enter a single digit number")
// num = parseInt(num);
showMultiplicationTable(7);


for (let i = 0; i <11; i++){
    let num = Math.floor(Math.random() * 180 + 20) ;
    let typeOfInt = (num % 2 == 1) ? "odd": "even";
    console.log(`${num} is ${typeOfInt} \n`);
}


const numberPyramid = (num)=>{
    for (let i = 1; i<=num; i++){
        const message = i.toString().repeat(i);
        console.log(message);
    }
}
numberPyramid(9);


for(let i = 100; i > 0; i = i- 5){
    console.log(i);
}
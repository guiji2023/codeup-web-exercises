const fizzBuzz = (start, end) => {

    if (!Number.isInteger(start) || !Number.isInteger((end))) {
        console.log("Wrong input!!")
        return false
    }

    for (let i = start; i <= end; i++) {
        if (i % 3 === 0 || (i % 5) === 0) {
            console.log(`Fizz`);
        } else {
            console.log(i);
        }
    }
}


fizzBuzz(10, 100);
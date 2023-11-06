// IIFE

// If there is a function required for the IIFE, it should be written outside the IIFE with no argument


(() => {
    alert(`this is working!`);

    //example of a countdown on a webpage
    // setInterval method
    let countdown = 10;
    console.log(countdown);
    const countdownTimer = setInterval(() => {
        countdown--;
        console.log(countdown);
        if (countdown === 0) {
            clearInterval(countdownTimer);
            console.log(`Done`);

        }
    }, 1000);

    //setTimeOut() method
    const noAdds = setTimeout(() => {
        console.log(`PIKABOO!`)

    }, 5000);


})();
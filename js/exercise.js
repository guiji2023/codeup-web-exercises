var kidsWithCandies = function (candies, extraCandies) {

    let output = [];

    let maxCan = Math.max(...candies);

    for (let candy of candies) {
        if ((candy + extraCandies) >= maxCan) {
            output.push(true);
        } else {
            output.push(false);
        }

    }

    return output;
};

const input = kidsWithCandies([2, 3, 5, 7], 2);

console.log(input);
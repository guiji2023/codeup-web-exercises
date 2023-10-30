const findLongestWord = (sentence) => {

    if (typeof sentence !== "string") {
        return false;
    }

    const arr = sentence.split(" ");
    let longWord = "";
    arr.forEach(word => {
        if (word.length > longWord.length) {
            longWord = word;
        }
    })

    return longWord


};


console.log(findLongestWord(NaN));
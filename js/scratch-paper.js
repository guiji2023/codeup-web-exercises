function isNumberORStringNumber(a) {


    const weirdTypes = ["undefined", "boolean", "null"]
    weirdTypes.forEach(i => {
        if (typeof a === i) {
            return false;
        }
    })

    if (a === "" || isNaN(a)) {
        return false;
    }

    if (typeof Number(a) === "number") {
        return true;
    } else {
        return false;
    }


}


let a = 1;
let b = "1";
let c = 'true';
let d = NaN;
let e = undefined;
let f = true;
let g = "0";

console.log(isNumberORStringNumber(a));
console.log(isNumberORStringNumber(b));
console.log(isNumberORStringNumber(c));
console.log(isNumberORStringNumber(d));
console.log(isNumberORStringNumber(e));
console.log(isNumberORStringNumber(f));
console.log(isNumberORStringNumber(g));

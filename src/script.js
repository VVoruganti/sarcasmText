// script that converts the text into a sarcastic format
function main(str) {
    const temp = str.split("").map(x => {
        let num = Math.random();
        if(num > 0.4) {
            return x.toUpperCase();  
        } else {
            return x.toLowerCase();
        }
    });
    return temp.join("");
}


console.log(main("the brown lazy fox jumped over the ravine"));

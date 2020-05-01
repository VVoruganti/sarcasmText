// script that converts the text into a sarcastic format
function main(str) {
    const temp = str.toLowerCase().split("").map(x => {
        let num = Math.random();
        if(num > 0.4) {
            return x.toUpperCase();  
        } else {
            return x.toLowerCase();
        }
    });
    return temp.join("");
}

function convert() {
    const text = document.querySelector("#input");
    const output = document.querySelector("#output");
    text.value = main(text.value);
}

function copy() {
    convert()
    const output = document.getElementById("input");
    output.select();
    document.execCommand("copy");
}
document.querySelector("#copy").onclick = function(){copy()};

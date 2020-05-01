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

function convert() {
    const text = document.querySelector("#input").value;
    const output = document.querySelector("#output");
    console.log(text);
    output.innerHTML = main(text);
}

function copy() {
    const output = document.querySelector("#output");
    output.select();
    output.setSelectRange(0,99999);

    document.execCommand("copy");
}

document.querySelector("#convert").addEventListener("click", convert())

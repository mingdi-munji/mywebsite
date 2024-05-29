    let target = document.querySelector("#dynamic");

function dynamic(stringArr) {
    if (stringArr.length > 0) {
        target.textContent += stringArr.shift();
        
        setTimeout(function() {
            dynamic(stringArr);
        }, 100);
    } else {
        setTimeout(resetTyping, 3000);
    }
}

function resetTyping() {
    target.textContent = "";
    dynamic(insaMAL.split(""));
}

var insaMAL = document.getElementById("dynamic").innerHTML;
target.textContent = "";
dynamic(insaMAL.split(""));

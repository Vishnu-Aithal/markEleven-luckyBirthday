var dateInput = document.querySelector("#date");
var luckyNumberInput = document.querySelector("#lucky-number");
var checkBtn = document.querySelector("#check-btn");
var message = document.querySelector("#message");

dateInput.onchange = () => {
    luckyNumberInput.removeAttribute("disabled");
    luckyNumberInput.value = "";
    message.style.display = "none";
}
function calcDateSum(dateStr) {
    var datewithouthyphen = dateStr.replaceAll('-', "");
    var sum = 0;
    for (char of datewithouthyphen) {
        sum = sum + parseInt(char);
    }
    return sum
}

function luckyMessage() {
    message.innerText = "Yay! Your Birthday is Lucky!";
    message.style.display = "block";
}

function unluckyMessage() {
    message.innerText = "Ooops! Your Birthday is Unlucky!";
    message.style.display = "block";
}


function clickHandler() {
    var dateStr = dateInput.value;
    var sum = calcDateSum(dateStr);
    var luckyNumber = luckyNumberInput.value;
    if (sum % luckyNumber == 0) {
        luckyMessage();
    } else {
        unluckyMessage();
    }



}

checkBtn.addEventListener("click", clickHandler);
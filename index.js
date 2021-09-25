var dateInput = document.querySelector("#date");
var luckyNumberInput = document.querySelector("#lucky-number");
var checkBtn = document.querySelector("#check-btn");
var message = document.querySelector("#message");
// to catch clear button on android phones
// clear on mobile date input sets "value" to "defaultValue"
dateInput.defualtValue = "";

dateInput.onchange = (event) => {
    message.style.display = "none";
    if ((event.target.value != "")) {
        luckyNumberInput.removeAttribute("disabled");
        if ((luckyNumberInput.value != "")) {
            checkBtn.removeAttribute("disabled");
        }
    } else {
        // luckyNumberInput.setAttribute("disabled", "");
        checkBtn.setAttribute("disabled", "");
    }
}

luckyNumberInput.oninput = (event) => {
    message.style.display = "none";
    if ((event.target.validity.valid) & (event.target.value != "")) {
        if (dateInput.value != "") {
            checkBtn.removeAttribute("disabled")
        }
    } else {
        event.target.value = "";
        checkBtn.setAttribute("disabled", "");
    }
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
var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-button");
var outputText = document.querySelector("#output-text") ;

checkButton.addEventListener("click", function checkBirthDateIsLuckyOrNot(){
    sumOfDate();
    if(dateOfBirth.value&&luckyNumber.value)
        checkDateLuckyOrNot();
    else
    outputText.innerText = "Please enter both the fields";
})

function sumOfDate() {
    var dob = dateOfBirth.value.replaceAll("-", "");
    sum = 0;
    for (let i=0; i<dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

function checkDateLuckyOrNot() {
    var givenluckyNumber = luckyNumber.value;
    if (sum %  givenluckyNumber === 0) {
        outputText.innerText = "Hehe! Your birthday is lucky 🥳";
    }
    else {
        outputText.innerText = "Your birthday is not that lucky 🥺";
    }
}
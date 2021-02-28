function question1() {
    var num1 = document.getElementById("q1-num1").value;
    var num2 = document.getElementById("q1-num2").value;
    if (num1 > num2) {
        alert("Number 1 '" + num1 + "' is greater!");
    }
    else {
        alert("Number 2 = '" + num2 + "' is greater!");
    }
}
function question2() {
    var num1 = document.getElementById("q2-num1").value;
    var num2 = document.getElementById("q2-num2").value;
    var num3 = document.getElementById("q2-num3").value;
    if (num1 > num2 && num2 > num3)
        alert("Number 1 is greater!");
    else if (num1 < num2 && num2 > num3)
        alert("Number 2 is greater!");
    else
        alert("Number 3 is greater!");
}
function question3() {
    var num1 = document.getElementById("q2-num1").value;
    var num2 = document.getElementById("q2-num2").value;
    var num3 = document.getElementById("q2-num3").value;
    if (num1 > num2 && num2 >= num3)
        alert("Number 1 is greater!");
    else if (num2 > num3 && num3 >= num1)
        alert("Number 2 is greater!");
    else
        alert("Number 3 is greater!");
}
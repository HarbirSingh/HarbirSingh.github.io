var leftOfCursor = "";
var rightOfCursor = "";
var noOfClosingBrackets = 0;
var kString = "";
var iString = "";
var lastkString = "";
var tString = "asdfghjkl";
var ans1 = "";
var ans2 = "";
var ans3 = "";
$(document).ready(
    function () {
        var iString = document.getElementById("iScreen");
        var leftBracket = document.getElementById("leftBracket");
        var rightBracket = document.getElementById("rightBracket");
    }
);
var clickCount = 0;


function testFunction(ch) {

}

function testFunction2() {
    var node = math.eval(iString);
    iScreen.innerHTML = node;
}

function pressedPi() {
    var constants = document.getElementById("constants");

}


function pressedButton(ch) {
    iString += ch;
    print();
}

function pressedConstant(ch) {
    document.getElementById("constants1").style.display = "none";
    document.getElementById("constants2").style.display = "none";
    iString += ch;
    print();
}

function parseAns() {
    document.getElementById("aScreen3").innerHTML = document.getElementById("aScreen2").innerHTML;
    document.getElementById("aScreen2").innerHTML = document.getElementById("aScreen1").innerHTML;
    var isError = false;
    try {
        var node = math.eval(iString);
    } catch (e) {
        isError = true;
    }
    if (isError) {
        document.getElementById("aScreen1").innerHTML = "ansError";
        //console.log(document.getElementById("aScreen1").innerHTML);
    } else {
        document.getElementById("aScreen1").innerHTML = node;
    }
}

function parseSQRT() {
    iString += "&radic;";
    leftOfCursor += "\\sqrt";
    print();
}

function enterAnsValue(Str) {
    iString += document.getElementById(Str).innerHTML;
    print();
}

leftBracket.addEventListener('click', function () {
    clickCount++;
    if (clickCount === 1) {
        singleClickTimer = setTimeout(function () {
            clickCount = 0;
        }, 200);
        pressedButton('(');
    } else if (clickCount === 2) {
        clickCount = 0;
        iString = iString.slice(0, -1);
        pressedButton('[');
        clearTimeout(singleClickTimer);
    }
}, false);

rightBracket.addEventListener('click', function () {
    clickCount++;
    if (clickCount === 1) {
        singleClickTimer = setTimeout(function () {
            clickCount = 0;
        }, 200);
        pressedButton(')');
    } else if (clickCount === 2) {
        clickCount = 0;
        iString = iString.slice(0, -1);
        pressedButton(']');
        clearTimeout(singleClickTimer);
    } else {
        console.log("You went too far.");
    }
}, false);

equalButton.addEventListener('click', function () {
    clickCount++;
    if (clickCount === 1) {
        singleClickTimer3 = setTimeout(function () {
            clickCount = 0;
            parseAns();
        }, 200);
    } else if (clickCount === 2) {
        clearTimeout(singleClickTimer3);
        clickCount = 0;
        pressedButton('=');
    } else {
        console.log("You went too far.");
    }
}, false);

function pressedPi() {
    document.getElementById("constants1").style.display = "flex";
    document.getElementById("constants2").style.display = "flex";
}

function parseCE() {
    kString = "0";
    iString = "";
    lastkString = "0";
    iScreen.innerHTML = "0";
    katex.render(kString, kScreen);
}

function pressedBackspace() {
    iString = iString.slice(0, -1);
    print();
}
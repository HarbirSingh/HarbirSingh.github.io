var leftOfCursor = "";
var rightOfCursor = "";
var noOfClosingBrackets = 0;
var kString = "";
var iString = "";
var lastkString = "";
var tString = "asdfghjkl";
$(document).ready(
    function()
    {
        var iString = document.getElementById("iScreen");
        var leftBracket = document.getElementById("leftBracket"); 
        var rightBracket = document.getElementById("leftBracket"); 
    }
);
var clickCount = 0;


function testFunction(ch) {
    
}

function testFunction2() {
    var node = math.eval(iString);
    iScreen.innerHTML = node;
}


function pressedButton(ch) { 
    iString += ch;
    print();
}

function parseAns() {
    var node = math.eval(iString);
    document.getElementById("aScreen").innerHTML = node;
}

function parseSQRT() {
    iString += "&radic;";
    leftOfCursor += "\\sqrt";
    print();
}
 
leftBracket.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 1) {
        singleClickTimer = setTimeout(function() {
            clickCount = 0;
            pressedButton('(');
        }, 200);
    } else if (clickCount === 2) {
        clearTimeout(singleClickTimer);
        clickCount = 0;
        pressedButton('[');
    }
}, false);
 
rightBracket.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 1) {
        singleClickTimer = setTimeout(function() {
            clickCount = 0;
            pressedButton(')');
        }, 200);
    } else if (clickCount === 2) {
        clearTimeout(singleClickTimer);
        clickCount = 0;
        pressedButton(']');
    }
}, false);

function parsePi() {
    iString += "&radic;";
    leftOfCursor += "\\sqrt";
    print();
}

function parseCE() {
    kString = "0";
    iString = ""; 
    lastkString = "0";
    iScreen.innerHTML = "0"; 
    katex.render(kString, kScreen);
}
 
function pressedBackspace() {
    iString = iString.slice(0,-1); 
    print();
}
 


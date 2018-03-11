var leftOfCursor = "";
var rightOfCursor = "";
var noOfClosingBrackets = 0;
var kString = "";
var iString = "";
var lastkString = "";
var tString = "asdfghjkl";

function testFunction(ch) {
    var node = math.parse(iString);
    node.toTex(); // returns '\sqrt{ {\frac{x}{x} }+{1} }'
    katex.render(node.toTex(), kScreen);
}

function testFunction2() {
    var node = math.eval(iString);
    document.getElementById("iScreen").innerHTML = node;
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

function parsePi() {
    iString += "&radic;";
    leftOfCursor += "\\sqrt";
    print();
}

function parseCE() {
    kString = "0";
    iString = ""; 
    lastkString = "0";
    document.getElementById("iScreen").innerHTML = "0"; 
    katex.render(kString, kScreen);
}
 
function pressedBackspace() {
    iString = iString.slice(0,-1); 
    print();
}
 


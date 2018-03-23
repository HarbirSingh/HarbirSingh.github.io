var leftOfCursor = "";
var rightOfCursor = "";
var noOfClosingBrackets = 0;
var kString = "";
var iString = "";
var lastkString = "";
var tString = "asdfghjkl";
var parser = math.parser();
console.log(devicePixelRatio);
document.getElementById("iScreen").innerHTML = devicePixelRatio;
if (localStorage.getItem('drg') == null) {
    localStorage.setItem('drg', 'deg');
    console.log("fasif");
}
if (localStorage.getItem('variables') != null) {
    parser.scope = JSON.parse(localStorage.getItem('variables'));
} else {
    parser.scope = {
        h: 6.626e-34,
        g: 9.807,
        Po: 101325,
        Na: 6.022e23,
        k: 1.38e-23,
        F: 9.648e4,
        R: 8.314,
        G: 6.674e-11,
        me: 9.109e-31,
        mp: 1.6726e-27,
        mn: 1.675e-27,
        co: 2.998e8,

    };
}
console.log(parser.scope);
var iScreen = document.getElementById("iScreen");
var leftBracket = document.getElementById("leftBracket");
var rightBracket = document.getElementById("rightBracket");
var clickCount = 0;


function storevariables() {
    localStorage.setItem('variables', JSON.stringify(parser.scope));
}

function testFunction() {
    console.log(parser.scope);

}

function testFunction2() {
    console.log(JSON.stringify(parser.scope));
}


function pressedButton(ch) {
    iString += ch;
    print();
}

function pressedPi() {
    document.getElementById("constants1").style.display = "flex";
    document.getElementById("constants2").style.display = "flex";
}
function pressedkScreen() {
    document.getElementById("plot").style.display = "none";
}

function pressedConstant(ch) {
    document.getElementById("constants1").style.display = "none";
    document.getElementById("constants2").style.display = "none";
    iString += ch;
    print();
}

function plot() {
    document.getElementById("plot").style.display = "flex";
    try {
        functionPlot({
            width: screen.width + 20,
            height: screen.width,
            target: '#plot',
            yAxis: {domain: [-1, 1]},
            xAxis: {domain: [8, 24]},
            data: [{
                fn: iString,
                sampler: 'builtIn', // this will make function-plot use the evaluator of math.js
                graphType: 'polyline',
                color: 'red'
            }],
            grid: true
        });
    } catch (err) {
        console.log(err);
        alert(err);
    }
}

function parseAns() {
    document.getElementById("aScreen3").innerHTML = document.getElementById("aScreen2").innerHTML;
    document.getElementById("aScreen2").innerHTML = document.getElementById("aScreen1").innerHTML;
    var isError = false;
    try {
        var node = parser.eval(iString);
        var ans = math.format(node, 4);
        console.log(parser.eval(iString));
    } catch (e) {
        isError = true;
    }
    if (isError) {
        document.getElementById("aScreen1").innerHTML = "ansError";
        //console.log(document.getElementById("aScreen1").innerHTML);
    } else {
        document.getElementById("aScreen1").innerHTML = ans;
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

function parseCE() {
    kString = "0";
    iString = "";
    lastkString = "0";
    iScreen.innerHTML = "0";
    katex.render(kString, kScreen);
}

function pressedBackspace() {
    if (iString.length > 1) {
        iString = iString.slice(0, -1);
        print();
    } else if (iString.length == 1) {
        parseCE();
    }
}
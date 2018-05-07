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
        "G": 6.674e-11,
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
    var variables = document.getElementById("variables");
    variables.style.display = "block";

    // IE7 only supports appending rows to tbody
    var tbody = document.createElement("tbody");
    for (var key in parser.scope) {
        var tr = document.createElement("tr");
        if (parser.scope.hasOwnProperty(key)) {
            //Stringbig += (key + " : " + parser.scope[key] + "<br>");
            var td = document.createElement("td");
            var txt = document.createTextNode(key);
            td.appendChild(txt);
            tr.appendChild(td);
            var td2 = document.createElement("td2");
            var txt = document.createTextNode(parser.scope[key]);
            td2.onclick = function () {
                variables.style.display = "none";
                iString+=key;
                print();
            };
            td2.appendChild(txt);
            tr.appendChild(td2);
        }
        tbody.appendChild(tr);
    }
    variables.appendChild(tbody);
}

function pressedkScreen() {
    document.getElementById("plot").style.display = "none";
}

function pressedConstant(ch) {
    document.getElementById("variables").style.display = "none";
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
            yAxis: {
                domain: [-1, 1]
            },
            xAxis: {
                domain: [8, 24]
            },
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
        document.getElementById("aScreen1").innerHTML = ans;
    } catch (e) {
        document.getElementById("aScreen1").innerHTML = "ansError";
        isError = true;
    }
    if (isError) {
        //console.log(document.getElementById("aScreen1").innerHTML);
    } else {
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

function print() {
    document.getElementById("iScreen").innerHTML = iString;
    var node = math.parse(iString);
    node.toTex(); // returns '\sqrt{ {\frac{x}{x} }+{1} }'
    katex.render(node.toTex(), kScreen);
}
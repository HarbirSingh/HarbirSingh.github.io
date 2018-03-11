var leftOfCursor = "";
var rightOfCursor = "";
var noOfClosingBrackets = 0;
var kString = "";
var iString = "";
var dString = "";
var lastkString = "";

function parseNumber(ch) {
    leftOfCursor += ch;
    iString += ch;
    kString = leftOfCursor + rightOfCursor;;
    dString = leftOfCursor + "   " + rightOfCursor;
    katexRender(kString, kScreen);
    document.getElementById("iScreen").innerHTML = iString;
    document.getElementById("dScreen").innerHTML = dString;
}

function parseLetter(ch) {
    iString += ch;
    isLetterAtEnd = /.*[a-z]$/.test(leftOfCursor);
    var temp = "\\" + ch;
    if (!isLetterAtEnd) {
        leftOfCursor += temp;
    }
    else {
        leftOfCursor += ch;
    }
    kString = leftOfCursor + rightOfCursor;
    dString = leftOfCursor + "   " + rightOfCursor;
    document.getElementById("iScreen").innerHTML = iString;
    document.getElementById("dScreen").innerHTML = dString;
    katexRender(kString, kScreen);
}

function parseDivivde() {
    leftOfCursor = "";
    rightOfCursor = "";
    noOfClosingBrackets = 0;
    kString = "0";
    iString = "0";
    dString = "0";
    lastkString = "0";
    document.getElementById("iScreen").innerHTML = iString;
    document.getElementById("dScreen").innerHTML = dString;
    katexRender(kString, kScreen);
}

function parseCE() {
    leftOfCursor = "";
    rightOfCursor = "";
    noOfClosingBrackets = 0;
    kString = "0";
    iString = "0";
    dString = "0";
    lastkString = "0";
    document.getElementById("iScreen").innerHTML = iString;
    document.getElementById("dScreen").innerHTML = dString;
    katexRender(kString, kScreen);
}

function katexRender(kStringin, kScreenin) {
    iserror = false;
    try {
        katex.render(kStringin, kScreenin);
    }
    catch (e) {
        iserror = true;
    }
    if (!iserror) {
        lastkString = kStringin;
    }
    else {
        katex.render(lastkString, kScreenin);
    }

}



if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(function (registration) {
            console.log('Registration successful, scope is:', registration.scope);
        })
        .catch(function (error) {
            console.log('Service worker registration failed, error:', error);
        });
}

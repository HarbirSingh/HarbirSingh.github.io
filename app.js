var leftOfCursor = "";
var rightOfCursor = "";
var noOfClosingBrackets = 0;
var kString = "";
var iString = "";
var dString = "";

function parseNumber(ch) {
    leftOfCursor += ch;
    iString += ch;
    kString = leftOfCursor + rightOfCursor;;
    dString = leftOfCursor + "   " + rightOfCursor;
    katex.render(kString, kScreen);
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
    try {
        katex.render(kString, kScreen);
    }
    catch(e)
    {
        console.log(e);
    }
    katex.render(kString, kScreen);
}
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
      console.log('Registration successful, scope is:', registration.scope);
    })
    .catch(function(error) {
      console.log('Service worker registration failed, error:', error);
    });
  }
  
var replacements = {};

// our extended configuration options
var config = {
    angles: 'deg' // 'rad', 'deg', 'grad'
};
// create trigonometric functions replacing the input depending on angle config
['sin', 'cos', 'tan', 'sec', 'cot', 'csc'].forEach(function (name) {
    var fn = math[name]; // the original function

    var fnNumber = function (x) {
        // convert from configured type of angles to radians
        switch (config.angles) {
            case 'deg':
                return fn(x / 360 * 2 * Math.PI);
            case 'grad':
                return fn(x / 400 * 2 * Math.PI);
            default:
                return fn(x);
        }
    };

    // create a typed-function which check the input types
    replacements[name] = math.typed(name, {
        'number': fnNumber,
        'Array | Matrix': function (x) {
            return math.map(x, fnNumber);
        }
    });
});

// create trigonometric functions replacing the output depending on angle config
['asin', 'acos', 'atan', 'atan2', 'acot', 'acsc', 'asec'].forEach(function (name) {
    var fn = math[name]; // the original function

    var fnNumber = function (x) {
        var result = fn(x);

        if (typeof result === 'number') {
            // convert to radians to configured type of angles
            switch (config.angles) {
                case 'deg':
                    return result / 2 / Math.PI * 360;
                case 'grad':
                    return result / 2 / Math.PI * 400;
                default:
                    return result;
            }
        }

        return result;
    };

    // create a typed-function which check the input types
    replacements[name] = math.typed(name, {
        'number': fnNumber,
        'Array | Matrix': function (x) {
            return math.map(x, fnNumber);
        }
    });
});

// import all replacements into math.js, override existing trigonometric functions
math.import(replacements, {
    override: true
});

config.angles = localStorage.getItem('drg'); //initialset

function degreeMode() {
    var drgin = localStorage.getItem('drg');
    switch (drgin) {
        case 'deg':
            config.angles = 'rad';
            document.getElementById('degButton').innerHTML = 'rad';
            localStorage.setItem('drg', 'rad');
            break;

        case 'rad':
            config.angles = 'grad';
            document.getElementById('degButton').innerHTML = 'grad';
            localStorage.setItem('drg', 'grad');
            break;

        case 'grad':
            config.angles = 'deg';
            document.getElementById('degButton').innerHTML = 'deg';
            localStorage.setItem('drg', 'deg');
            break;

        default:
            break;
    } 
};
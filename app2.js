function print() {
    document.getElementById("iScreen").innerHTML = iString;
    var node = math.parse(iString);
    node.toTex(); // returns '\sqrt{ {\frac{x}{x} }+{1} }'
    katex.render(node.toTex(), kScreen);
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
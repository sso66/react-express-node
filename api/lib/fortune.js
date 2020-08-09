// lib/fortune.js

console.log("Mounting fortune.js...");

var fortuneCookies = [
    "Conquer your fears of they will conquer you.",
    "Riverss need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant supprise.",
    "Whenever possible, keep it simple."
];

exports.getFortune = function() {
    var idx = Math.floor(Math.random() * fortuneCookies.length);
    
    return fortuneCookies[idx];
}

// eof

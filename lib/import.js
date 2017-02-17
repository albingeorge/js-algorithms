var mappings = require("../algorithm_mappings.js");

module.exports = function(algorithm_name) {
    if(algorithm_name in mappings) {
        console.log(mappings[algorithm_name]);
    } else {
        console.log("Mapping missing");
        console.log("Check algorithm_mappings.js file");
    }
}
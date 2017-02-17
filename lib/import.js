var mappings = require("../algorithm_mappings.js");

module.exports = function(algorithm_name) {
    if(algorithm_name in mappings) {
        return require("../algorithms/" + mappings[algorithm_name]["type"] + "/" + mappings[algorithm_name]["file_name"]);
    } else {
        console.log("Mapping missing");
        console.log("Check algorithm_mappings.js file");
    }
}
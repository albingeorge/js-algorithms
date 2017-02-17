var program = require('commander'),
    algo_import = require("./lib/import.js");

program
    .version('0.0.1')
    .option('-a, --algorithm <algorithm-name>', 'Relative path to algorithm');

program.parse(process.argv);


if(typeof(program.algorithm) == "undefined") {
    console.log("Algorithm file required.");
    console.log("Try --help");
} else {
    algo_import(program.algorithm).call();
}

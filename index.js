var program = require('commander');

program
  .version('0.0.1')
  .option('-a, --algorithm <blah>', 'Relative path to algorithm')
  .option('-i, --input-file <blah>', 'Relative path to input file');
program.parse(process.argv);

console.log(program.inputFile);

if(typeof(program.algorithm == "undefined")) {
    console.log("Algorithm file required.");
    console.log("Try --help");
} else {
    var algo = require(program.algorithm);
    algo(program.inputFile);
}

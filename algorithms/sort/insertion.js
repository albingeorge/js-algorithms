// Complexity: O(n^2)

module.exports = function() {

    var input = [3, 6, 1, 7, 2, 3, 9, 8];
    let print_input = () => {
        console.log(input.join(", "));
    }
    console.log("Welcome to insertion sort!");
    console.log("Input:");
    print_input();

    for(let i=1; i<input.length; i++) {
        for(let j=i - 1; j>=0; j--) {
            if(input[j + 1] < input[j]) {
                [input[j], input[j + 1]] = [input[j + 1], input[j]];
            } else {
                break;
            }
        }
    }
    console.log("Output:");
    print_input();
}
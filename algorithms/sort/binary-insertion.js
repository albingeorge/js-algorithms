// Complexity: O(n * lg(n))

// Somewhat the same as insertion sort, but instead of pairwise swap,
// it finds where to insert the current element and inserts it there
// by shifting all the elements to the right of that position to
// the current element's position by 1

module.exports = function() {

    console.log("Welcome to binary insertion sort!");
    let input = [3, 2, 7, 6, 9, 8, 1];


    let print_array = (input) => {
        console.log(input.join(", "));
    }

    console.log("Input:");
    print_array(input);
    console.log("");


    let binary_search = (array, item, start, end) => {

        if(end <= start) {
            return (item > array[start] ? (start + 1): start);
        }

        let mid = parseInt((start + end) / 2);

        if(item == array[mid]) {
            return mid + 1;
        }

        if(item > array[mid]) {
            return binary_search(array, item, mid + 1, end);
        }
        return binary_search(array, item, start, mid);

    };



    for(let i = 1; i < input.length; i++) {
        var current = input[i];

        let position = binary_search(input, current, 0, i-1);

        for(let j=i; j > position; j--) {
            input[j] = input[j - 1];
        }

        input[position] = current;
    }

    console.log("");
    console.log("Output:");
    print_array(input);
}
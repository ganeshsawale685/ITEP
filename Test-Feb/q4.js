// Q4. Array – Find Occurrence (2 Marks)

// Write a JavaScript program to find the occurrence of each element in:


function countOccurrences(arr) {
    let count = {};

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (count[num]) {
            count[num]++;
        } else {
            count[num] = 1;
        }
    }

    console.log(count)
}


let arr = [1, 2, 2, 3, 1];
countOccurrences(arr)
function bsearch(A, x) {
    let left = 0;
    let right = A.length - 1;
    let guess;
    while (left <= right) {
        guess = Math.floor((left + right) / 2);
        if (A[guess] === x) {
            return guess;
        } else if (A[guess] > x) {
            right = guess - 1;
        } else {
            left = guess + 1;
        };
    };
    return -1;
};

console.log(bsearch([1, 4, 7, 8, 8, 7], 7));
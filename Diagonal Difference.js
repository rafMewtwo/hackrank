function diagonalDifference(arr) {
    // Write your code here
    let rightSum = 0;
    let leftSum = 0;
    for(let i=0; i<arr.length; i++) {
        rightSum += arr[i][i]
        leftSum += arr[i][(arr.length-1) - i]
    }
    return Math.abs(rightSum - leftSum);

}
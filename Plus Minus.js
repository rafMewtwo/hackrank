function plusMinus(arr) {
    // Write your code here
    let positiveNumberCount = 0;
    let negativeNumberCount = 0;
    let zeroNumberCount = 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i]>0) {
            positiveNumberCount++;
        }
        if (arr[i]<0) {
            negativeNumberCount++;
        }
        if (arr[i]===0) {
            zeroNumberCount++;
        }
    }
    console.log(`${(positiveNumberCount/arr.length).toFixed(6)} \n${(negativeNumberCount/arr.length).toFixed(6)} \n${(zeroNumberCount/arr.length).toFixed(6)}`)
}
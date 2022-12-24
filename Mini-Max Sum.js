function miniMaxSum(arr) {
    // Write your code here
    let flex;
    let orderArr = [...arr];
    let max = 0;
    let min = 0;
    
    for (let i=0; i<orderArr.length; i++) {
        flex = orderArr[i]
        for(let j=0; j<orderArr.length; j++) {
            if (orderArr[i] > orderArr[j]) {
                flex = orderArr[i]
                orderArr[i] = orderArr[j]
                orderArr[j] = flex
            }
        }
    }
    
    for (let i=0; i<=3; i++) {
        max += orderArr[i];
        min += orderArr[orderArr.length - (i+1)]
    }
    
    console.log(min, max)
}
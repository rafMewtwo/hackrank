function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let kang1 = x1
    let kang2 = x2
    let result = 'NO'
    for (let i=0;i<10000;i++) {
        kang1 += v1
        kang2 += v2
        if (kang1 === kang2) {
            result = 'YES'
        }
    }
    return result
}

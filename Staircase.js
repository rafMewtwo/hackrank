function staircase(n) {
    // Write your code here
    
    let str = '';
    for (let i=0; i<n; i++) {
        str = '';
        for (let j=i; j<n-1; j++) {
            str += ' ';
        }
        for (let j=n; j>=n-+i; j--) {
            str += '#';
        }
    console.log(str);
    }
    
}
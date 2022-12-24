function compareTriplets(a, b) {
    // Write your code here
    // sabe as pontuacoes de alice e bob
    let playerOnePoints = 0;
    let playerTwoPoints = 0;
    
    for(let i=0; i<a.length; i++) {
        if (a[i] > b[i]) {
            playerOnePoints++;
        } else if(a[i] < b[i]) {
            playerTwoPoints++;
        }
    }
    
    return [playerOnePoints, playerTwoPoints]
}
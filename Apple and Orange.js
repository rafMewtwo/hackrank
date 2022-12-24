function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    const applesFalls = apples.map(apple => apple + a)
    const orangeFalls = oranges.map(orange => orange + b)
    const resultApples = []
    const resultOranges = []
    applesFalls.forEach(apple => {
        if(apple >= s && apple <= t) {
            resultApples.push(apple)
        }
    })
    orangeFalls.forEach(orange => {
        if(orange >= s && orange <= t) {
            resultOranges.push(orange)
        }
    })
    console.log(resultApples.length)
    console.log(resultOranges.length)
}

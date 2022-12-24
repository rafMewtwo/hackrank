function birthdayCakeCandles(candles) {
    // Write your code here
    let maxHeightCandle = candles[0];
    for (let i=0; i<candles.length; i++) {
        if (maxHeightCandle < candles[i]) {
            maxHeightCandle = candles[i];
        }
    }
    const countMaxHeightCandle = candles.filter((heightCandle) => heightCandle === maxHeightCandle)
    return countMaxHeightCandle.length;

}

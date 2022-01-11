const limit = 50;
let fibo = [0];

for(let i=1; i <= limit; i++){
    if (fibo[i - 1] === 0) {
        fibo.push(i - 1)
    } else {
        fibo.push(fibo[i-1] + fibo[i-2]);
    }
    console.log(fibo[i]);
}
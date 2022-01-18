for (let i = 2; i <= 100; i++ ) {
    console.log(`¿ ${i} Es primo? ${isNumPrimo(i)}`)
}
function isNumPrimo (num) {
    //casos especiales
    if (num == 2 || num == 3 || num == 5 || num == 7) {
        return true
    }else if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0) {
        return false
    } else {
        return true
    }
}
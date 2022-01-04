// Ej de ejecucción en consola: node index hola olah
const palabra1 = process.argv[2].split("") // Primera palabra
const palabra2 = process.argv[3].split("") // Segunda palabra
if (process.argv[2] === process.argv[3]) {
    console.log("Dos palabras exactamente iguales no son un enagrama")
} else if (palabra1.length === palabra2.length) {
    for (let i = 0; i < palabra1.length; i++) {
        if (palabra2.includes(palabra1[i])) {
            removeItemOfArray(palabra1[i])
        } else {
            console.log(`${process.argv[3]} no es un anagrama de ${palabra1.join("")}`)
            break
        }
        if(i === palabra1.length -1) {
            console.log(`${process.argv[3]} es un anagrama de ${palabra1.join("")}`)
        }
    }
} else {
    console.log("Para comprobar si son un anagrama, tienen que ser de la misma longitud")
}

function removeItemOfArray (item) {
    const i = palabra2.indexOf(item)
    i !== -1 && palabra2.splice(i, 1)
}
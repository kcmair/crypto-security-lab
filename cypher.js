const cypher = (str) => {
let result = ``;
    
    for (let i = 0; i < str.length; i++){
        const shift = i + 1
        // console.log(shift)
        result += String.fromCharCode(str.charCodeAt(i) + shift)
    }
    return result
}
console.log(cypher(`abcdefghij`))
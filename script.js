function removeFromArray(str, charToDelete) {
    return str
        .split("")
        .filter(char => !charToDelete.includes(char))
        .join("")

}
console.log(
    removeFromArray("Hello world", ["l", "d"])
);


//Або через replace --->

let text = "Hello world";
let result = text.replace(/[ld]/g, "");
console.log(result);
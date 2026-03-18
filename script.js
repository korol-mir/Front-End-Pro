function outer() {
    let counter = 0;
    function inner() {
        let promptUser = prompt("Enter a number:");
        if(promptUser === null) {
            return;
        }
        counter += parseInt(promptUser);
        console.log("Current sum:", counter);
        inner();
    }
    inner();
}

outer();
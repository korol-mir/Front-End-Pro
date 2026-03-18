function outer() {
    function inner() {
        for(let i = 0; i < 10; i++) {
        let promptUser = prompt("Enter a number bigger that 100");
        if(promptUser > 100) {
            console.log(promptUser);
        }
        if(promptUser < 100) {
            console.log("Try again");
        }
        }
    }
    inner();
}

outer();
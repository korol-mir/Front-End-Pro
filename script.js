const myButton = document.querySelector("#myBtn");
const myTitle = document.querySelector(".h1")
function showData () {
    myTitle.classList.toggle("active");
}

myButton.addEventListener("click", showData);
const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const userName = formData.get("userName");
    const userMessage = formData.get("userMessage");
    const userPhone = formData.get("userPhone");
    const userEmail = formData.get("userEmail");
    const errorName = form.querySelector("#errorName");
    const errorMessage = form.querySelector("#errorMessage");
    const errorPhone = form.querySelector("#errorPhone");
    const errorEmail = form.querySelector("#errorEmail");

    const nameRegex = /^[A-Za-zА-Яа-яЁёІіЇїЄє'-\s]{2,50}$/;
    const messageRegex = /^.{5,}$/;
    const phoneRegex = /^\+380\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(userName)) {
        errorName.classList.add("errorActive");
        return;
    }
    errorName.classList.remove("errorActive");

    if (!messageRegex.test(userMessage)) {
        errorMessage.classList.add("errorActive");
        return;
    }
    errorMessage.classList.remove("errorActive");


    if (!phoneRegex.test(userPhone)) {
        errorPhone.classList.add("errorActive");
        return;
    }
    errorPhone.classList.remove("errorActive");


    if (!emailRegex.test(userEmail)) {
        errorEmail.classList.add("errorActive");
        return;
    }
    errorEmail.classList.remove("errorActive");

    console.log(userName, userMessage, userPhone, userEmail);

    this.reset();
});
const random = Math.trunc(Math.random() * 9 + 1);

const imgTag = document.querySelector("img");

imgTag.src = "./img/img" + random  + ".jpg";

const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
    alert('Клікнута кнопка: ' + e.target.textContent);
});
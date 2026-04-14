const buttonIns = document.querySelector('#insLin');
const buttonGo = document.querySelector('#goToLink');

buttonIns.addEventListener('click', () => {
    const link = prompt('Enter the link:');

        buttonGo.addEventListener('click', () => {
        window.open(link);
        }
    );
    }
);


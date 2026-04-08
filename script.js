const body = document.querySelector('body');

const table = document.createElement('table');

for (let i = 1; i <= 10; i++) {
    const row = document.createElement('tr');
    table.append(row);

    for (let j = 1; j <= 10; j++) {
        const cell = document.createElement('td');
        cell.innerText = `${i * j}`;
        cell.classList.add('bordered');
        row.append(cell);
    }
};

body.append(table);

let company = {
    sales: [
        {name: 'John', salary: 1000},
        {name: 'Alice', salary: 600}
    ],
    development: {
        web: [
            {name: 'Peter', salary: 2000},
            {name: 'Alex', salary: 1800}
        ],
        internals: [
            {name: 'Jack', salary: 1300}
        ]
    }
};

function sumSalaries(department) {
    let sum = 0;
    if(Array.isArray(department)) {
        for(let i = 0; i < department.length; i++) {
            sum += department[i].salary;
        }
    } else {
        for(let key in department) {
            sum += sumSalaries(department[key]);
        }
    }
    return sum;
}

console.log(sumSalaries(company));


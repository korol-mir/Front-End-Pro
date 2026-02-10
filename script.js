const book = {
    contacts:[
        {
            name: 'Vlad',
            phone: '123456789',
            email: 'Vlad@gmail.com',
    },
    {
            name: 'Dima',
            phone: '987654321',
            email: 'Dima@gmail.com',
    },
    {
            name: 'Anna',
            phone: '111222333',
            email: 'Anna@gmail.com',
    },
],
};

while(true) {
    const input = prompt('Введіть новий контакт через add або знайдіть існуючий через search');

    if(input === null || input === 'STOP') {
        break;
    };

    if(input === 'add') {
        const newContact = prompt('Введіть контакт (name,phone,email):');
        const parts = newContact.split(',');
        const newRecord = {
            name: parts[0],
            phone: parts[1],
            email: parts[2]
        };
        book.contacts.push(newRecord);
    };

    if(input === 'search') {
        const search = prompt('Введіть ім\'я');
    };

    if(search === 'Vlad' || search === 'Dima' || search === 'Anna') {
        console.log();
    };
};
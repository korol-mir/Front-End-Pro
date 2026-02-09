const infoForUser = {
    name: prompt('Введіть ім\'я'),
    age: prompt('Введіть ваш вік'),
    city: prompt('Введіть ваше місто'),
    pet: prompt('Ваша домашня тваринна'),
};

for(const key of Object.keys(infoForUser)) {
  console.log(key, ':', infoForUser[key]);
}
const path = require('path')

const fs = require('fs');

//
// Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів, але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.
//
// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу. (ті, що були в папці inPerson будуть в папці online)
// const userOnline = [
//     {
//         name: "Andrii",
//         age: 22,
//         city: "Lviv"
//     }]
// const inPesonUser = [{
//     name: "Roman",
//     age: 45,
//     city: "Odesa"
// }]
//
// fs.mkdir(path.join(__dirname, 'main'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     fs.mkdir(path.join(__dirname, 'main', 'online'), (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//         fs.mkdir(path.join(__dirname, 'main', 'inPerson'), (err) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//             for (const user of userOnline) {
//                 fs.writeFile(path.join(__dirname, 'main', 'online', 'userOnline.txt'), `Name:${user.name}\nAge:${user.age}\nCiti:${user.city}\n`, (err) => {
//                     if (err) {
//                         console.log(err);
//                         throw err;
//                     }
//                     for (const person of inPesonUser) {
//                         fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'userInPerson.txt'), `Name:${person.name}\nAge:${person.age}\nCiti:${person.city}\n`, (err) => {
//                             if (err) {
//                                 console.log(err);
//                                 throw err;
//                             }
//                         })
//                     }
//                 })
//             }
//
//         })
//         })
//     })



fs.readFile(path.join(__dirname, 'main', 'online', 'userOnline.txt'), 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    }
    fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'userInPerson.txt'), `${data}`, {flag: 'w'}, (err) => {
        if (err) {
            console.log(err)
        }
    })
})

fs.readFile(path.join(__dirname, 'main', 'inPerson', 'userInPerson.txt'), 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    }
    fs.appendFile(path.join(__dirname, 'main', 'online', 'userOnline.txt'), `${data}`, {flag: 'w'}, (err) => {
        if (err) {
            console.log(err)
        }
    })
})
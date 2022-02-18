//ДЗ
//
// декілька ендпоінтів зробити
//
// 1. /login, поля які треба відрендерити в файлі hbs: firstName, lastName, email(унікальне поле), password, age, city
// просто зробити темплейт з цим усім і вводити свої дані які будуть пушитися в масив і редірект робити на сторінку з усіма юзерами
// /users і перевірка чи такий імейл не існує, якщо існує то редірект на еррор пейдж
// 2. /users просто сторінка з усіма юзерами, але можна по квері параметрам їх фільтрувати по age і city
// 3. /user/:id сторінка з інфою про одного юзера
//
// 4. зробити якщо не відпрацюють ендпоінти то на сторінку notFound редірект

const express = require("express");
const path = require('path');
const {engine} = require('express-handlebars');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

const users = [];

let error = '';

app.get('/login', (req, res) => {
    res.render('login',);
});

app.get('/users', ({query}, res) => {
    if (Object.keys(query).length) {
        let userPage = [...users];
        if (query.age) {
            userPage = userPage.filter(user => user.age === query.age);
        }
        if (query.city) {
            userPage = userPage.filter(user => user.city === query.city)
        }
        res.render('users', {users: userPage})
        return
    }
    res.render('users', {users})
})

app.post('/login', ({body}, res) => {
    const userExist = users.some(user => user.email === body.email);
    if (userExist) {
        error = 'цей емайл вже використовується';
        res.redirect('/error');
        return;
    }

    users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1});
    res.redirect('/users')
})

app.get('/users/:id', ({params}, res) => {
    const user = users.find(user => user.id === +params.id);
    if (!user) {
        error = `Даного юзера не знайдено ${params.id}`;
        res.redirect('/error');
        return;
    }
    res.render('userInfo',{user});
})
app.get('/error', (req, res) => {
    res.render('error', { error });
});

app.use((req,res)=>{
    res.render('notFaund')
})


app.listen(5200, () => {
    console.log('Serves has started on PORT 5200')
})
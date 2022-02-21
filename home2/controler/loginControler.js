const users = require('../db/users');

module.exports = {
    getLogin: (req, res) => {
        res.render('login')
    },

    pushUsers: ({body}, res) => {
        const userExist = users.some(user => user.email === body.email);
        if (userExist) {
            error = 'цей емайл вже використовується';
            res.redirect('/error');
            return;
        }
        users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1});
        res.redirect('/users')
    }
};
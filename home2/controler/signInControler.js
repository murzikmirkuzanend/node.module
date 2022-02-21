const users = require("../db/users");

module.exports = {
    signInAll: (req, res) => {
        res.render('signIn');
    },
    singInPost: ({body}, res) => {
        const user = users.find(user => user.email === body.email && user.password === body.password);
        res.redirect(`/users/${user.id}`);
    }
};
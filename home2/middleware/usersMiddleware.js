const users = require('../db/users')


module.exports = {
    UserIdValid: (req, res, next) => {
        try {
            const {id} = req.params;

            if (!Number.isInteger(+id) || Number.isNaN(+id)) {
                throw new Error('Not valid ID!');
            }

            const user = users.find(user => user.id === +id);
            if (!user) throw new Error(`User with ID: ${id} exist!`);

            req.user = user;
            next();
        } catch ({message}) {
            res.redirect(`/error?error=${message}`);
        }
    },

    UserDataValid: (req, res, next) => {
        try {
            const {firstName, lastName, email, password, age, city} = req.body;

            if (firstName.length <= 3 || lastName.length <= 3) {
                throw new Error('Твоє імя та прізвище повинно містити як мінімум 3 слова');
            }

            if (!email.includes('@')) {
                throw new Error('тут ти повинен використати на приклад @gmail.com і так далі');
            }

            if (password.length < 5) {
                throw new Error('Not valid password');
            }

            if (age < 16) {
                throw new Error('Not valid age. Min 16');
            }

            if (!city) {
                throw new Error('Not valid city');
            }

            next();
        } catch ({message}) {
            res.redirect(`/error?error=${message}`);
        }
    }
};
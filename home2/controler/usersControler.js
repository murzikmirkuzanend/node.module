const users = require('../db/users')

module.exports = {

    getAllUsers: ({query}, res) => {
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
    },
    getUsersBayId: ({params}, res) => {
        const user = users.find(user => user.id === +params.id);
        res.render('userInfo', {user});
    }
}
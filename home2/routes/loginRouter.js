const {Router} = require('express');

const loginRouter = Router();

const usersMiddleware  = require('../middleware/usersMiddleware');

const postsController = require('../controler/loginControler');

loginRouter.get('/',postsController.getLogin );
loginRouter.post('/',
    usersMiddleware.UserDataValid,
    postsController.pushUsers
    );

module.exports = loginRouter;
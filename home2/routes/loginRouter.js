const {Router} = require('express');

const loginRouter = Router();

const postsController = require('../controler/loginControler')

loginRouter.get('/',postsController.getLogin );
loginRouter.post('/',postsController.pushUsers)

module.exports = loginRouter;
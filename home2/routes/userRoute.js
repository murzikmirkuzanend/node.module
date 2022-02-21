const {Router} = require('express');

const usersController = require('../controler/usersControler')


const userRouter = Router();

userRouter.get('/', usersController.getAllUsers)

userRouter.get('/:id',usersController.getUsersBayId)

module.exports = userRouter;
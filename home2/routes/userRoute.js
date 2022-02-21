const {Router} = require('express');

const usersController = require('../controler/usersControler')

const usersMiddleware  = require('../middleware/usersMiddleware');

const userRouter = Router();

userRouter.get('/', usersController.getAllUsers)

userRouter.get('/:id',
    usersController.getUsersBayId,
    usersMiddleware.UserIdValid,
    usersMiddleware.isUserExist
)

module.exports = userRouter;
const {Router} = require('express');

const usersController = require('../controler/usersControler');

const usersMiddleware = require('../middleware/usersMiddleware');

const userRouter = Router();

userRouter.get('/', usersController.getAllUsers);

userRouter.get('/:id',
    usersMiddleware.UserIdValid,
    usersController.getUsersBayId
);

module.exports = userRouter;
const {Router} = require('express');

const signInRouter = Router();

const signInController = require('../controler/signInControler')

const signInMiddleware = require('../middleware/signInMiddleware')

signInRouter.get('/', signInController.signInAll)
signInRouter.post('/', signInController.singInPost,
    signInMiddleware.checkUserAuth)

module.exports = signInRouter
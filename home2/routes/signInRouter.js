const {Router} = require('express');

const signInRouter = Router();

const signInController = require('../controler/signInControler')

signInRouter.get('/',signInController.signInAll )
signInRouter.post('/',signInController.singInPost )

module.exports = signInRouter
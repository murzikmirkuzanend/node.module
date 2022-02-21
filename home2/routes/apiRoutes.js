const {Router} = require('express');

const userRouter = require('./userRoute');
const loginRouter = require('./loginRouter');
const signInRouter = require('./signInRouter');

const routes = Router();
routes.use('/users',userRouter);
routes.use('/login',loginRouter);
routes.use('/signIn',signInRouter);


module.exports= routes;
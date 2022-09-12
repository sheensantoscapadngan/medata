import express from 'express';
import { login, signup } from '../controller/AuthController.js';

const AuthRouter = express.Router();

AuthRouter.route('/login').get(login);
AuthRouter.route('/signup').post(signup);

export default AuthRouter;

import { Request, Response } from 'express';

export function login(req: Request, res: Response) {
  res.send('login');
}

export function signup(req: Request, res: Response) {
  res.send('signup');
}

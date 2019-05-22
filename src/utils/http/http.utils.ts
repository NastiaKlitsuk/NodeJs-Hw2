import { Response } from 'express';

export function send201(response: Response) {
  response.sendStatus(201);
}

export function send404(response: Response) {
  response.sendStatus(404);
}

export function send400(response: Response) {
  response.sendStatus(400);
}

export function send409(response: Response) {
  response.sendStatus(409);
}
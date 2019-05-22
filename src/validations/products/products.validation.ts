import { Response } from 'express';
import {
  send404,
  send400,
  send409,
} from '../../utils/http/http.utils';

export function send404ForNotExistingProduct(
  isExist: boolean,
  response: Response
): boolean {
  if (!isExist) {
    send404(response);
    return true;
  }
  return false;
}

export function send400ForInvalidProductId(id: string, response: Response) {
  const isNumber = Number(id);
  if (!isNumber) {
    send400(response);
    return true;
  }
  return false;
}

export function send409ForInvalidProductName(
  productName: string,
  response: Response
) {
  if (productName.length < 3) {
    send409(response);
    return true;
  }
  return false;
}

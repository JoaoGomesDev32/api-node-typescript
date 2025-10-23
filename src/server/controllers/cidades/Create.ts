import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';

interface ICidade {
  municipio: string;
  distrito: string;
}

interface IFilter {
  filter: string,
}

export const createValidation = validation({
  body: yup.object().shape({
    municipio: yup.string().required().min(3),
    distrito: yup.string().required().min(3),
  }),
  query: yup.object().shape({
    filter: yup.string().required().min(3),
  }),
});


export const create = async (
  req: Request<{}, {}, ICidade>,
  res: Response
) => {
  console.log(req.body);

  return res.send('Create!');
};

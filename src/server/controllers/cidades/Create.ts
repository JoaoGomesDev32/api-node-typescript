import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

interface InterfaceCidade {
  municipio: string;
  distrito: string;
}

const bodyValidation: yup.ObjectSchema<InterfaceCidade> = yup.object().shape({
  municipio: yup.string().required().min(3),
  distrito: yup.string().required().min(3),
});

export const createBodyValidator: RequestHandler = async (req, res, next) => {
  try {
    await bodyValidation.validate(req.body, { abortEarly: false });
    return next();
  } catch (err) {
    const yupError = err as yup.ValidationError;
    const errors: Record<string, string> = {};

    yupError.inner.forEach((error) => {
      if (error.path === undefined) return;
      errors[error.path] = error.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({ errors });
  }
};

interface InterfaceFilter {
  filter: string,
}

const queryValidation: yup.ObjectSchema<InterfaceFilter> = yup.object().shape({
  filter: yup.string().required().min(3),
});

export const createQueryValidator: RequestHandler = async (req, res, next) => {
  try {
    await queryValidation.validate(req.query, { abortEarly: false });
    return next();
  } catch (err) {
    const yupError = err as yup.ValidationError;
    const errors: Record<string, string> = {};

    yupError.inner.forEach((error) => {
      if (error.path === undefined) return;
      errors[error.path] = error.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({ errors });
  }
};


export const create = async (
  req: Request<{}, {}, InterfaceCidade>,
  res: Response
) => {
  console.log(req.body);

  return res.send('Create!');
};

import { RequestHandler } from 'express';

type TValidation = () => RequestHandler;

export const validation: TValidation = () => async (req, res, next) => {
  console.log('test');

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
import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

export const ValidateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body);
      await schema.parseAsync({ body: req.body });
      next();
    } catch (error) {
      next(error);
    }
  };
};

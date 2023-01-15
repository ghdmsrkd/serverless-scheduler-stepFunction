import { scheduleRepository } from '@src/repository';
import express, { NextFunction, Request, Response } from 'express';
import serverless from 'serverless-http';

const app = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: 'Hello from root!',
  });
});

app.post(
  '/scheduler',
  async (req: Request, res: Response, next: NextFunction) => {
    await scheduleRepository.createScheduler();
    return res.status(200).json({
      message: 'Hello from path!',
    });
  },
);

app.use((req: Request, res: Response, next: NextFunction) => {
  return res.status(404).json({
    error: 'Not Found',
  });
});

module.exports.handler = serverless(app);

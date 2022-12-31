import { schedulerController } from '@src/controller';
import { Handler } from 'aws-lambda';

exports.handler = async (event: any, context: any, callback: any) => {
  console.log(event);
  schedulerController;
};

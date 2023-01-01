import { schedulerController } from '@src/controller';
import { Handler } from 'aws-lambda';
import { c } from 'cron';

exports.handler = async (event: any, context: any, callback: any) => {
  console.log(event);
  const eventHandler = schedulerController.getEventHandler(
    event.context.State.Name,
  );

  try {
    const res = await eventHandler(event.body);
    console.log(res);
    return res;
  } catch (e: any) {
    console.error(e);
    throw new Error(e);
  }
};

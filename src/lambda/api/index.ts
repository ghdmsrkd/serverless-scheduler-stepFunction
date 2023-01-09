import { schedulerService } from '@src/service';
import { Handler } from 'aws-lambda';

exports.handler = async (event: any, context: any, callback: any) => {
  console.log(JSON.stringify(event));

  try {
    await schedulerService.createSchedule();
    return {
      status: 200,
    };
  } catch (e: any) {
    console.error(e);
    throw new Error(e);
  }
};

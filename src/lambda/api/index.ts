import { Handler } from 'aws-lambda';

exports.handler = async (event: any, context: any, callback: any) => {
  console.log(event);

  try {
    return;
  } catch (e: any) {
    console.error(e);
    throw new Error(e);
  }
};

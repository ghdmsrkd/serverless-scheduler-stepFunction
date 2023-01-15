import DynamoDB from 'aws-sdk/clients/dynamodb';

const DocumentClient = new DynamoDB.DocumentClient({
  accessKeyId: process.env.ACCESS_KEY ?? undefined,
  secretAccessKey: process.env.SECRET_ACCESS_KEY ?? undefined,
  convertEmptyValues: false,
});

export { DocumentClient };

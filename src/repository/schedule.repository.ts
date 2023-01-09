import { Table, Entity } from 'dynamodb-toolbox';
import DynamoDB from 'aws-sdk/clients/dynamodb';

const DocumentClient = new DynamoDB.DocumentClient({
  accessKeyId: 'AKIAWVJEQLD3VR3UECN6',
  secretAccessKey: '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',
  convertEmptyValues: false,
});
console.log(DocumentClient);

// Instantiate a table
const ScheduleTable = new Table({
  // Specify table name (used by DynamoDB)
  name: 'Schedule',

  partitionKey: 'pk',
  sortKey: 'sk',

  DocumentClient,
});

const ScheduleEntity = new Entity({
  // Specify entity name
  name: 'schedule',

  // Define attributes
  attributes: {
    pk: { partitionKey: true },
    sk: { hidden: true, sortKey: true },
    title: { type: 'string' },
    description: { type: 'string' },
    message: { type: 'string' },
    retry: { type: 'number' },
    schedule_type: ['sk', 0],
    scheduled_at: ['sk', 1],
    status: { type: 'string', default: 'stop' },
  },

  // Assign it to our table
  table: ScheduleTable,

  // In Typescript, the "as const" statement is needed for type inference
} as const);

export class ScheduleRepository {
  private instance;
  constructor() {
    this.instance = ScheduleEntity;
  }

  async createSchedule() {
    try {
      const nowDate = new Date();
      const nextSchedule = new Date(
        nowDate.setMinutes(nowDate.getMinutes() + 1),
      );
      const customer = {
        pk: 111,
        title: '스케줄 테스트',
        description: '테스트 용도 스케쥴',
        message: '메시지',
        retry: 0,
        schedule_type: 'timestamp',
        scheduled_at: nextSchedule.toISOString(),
      };
      console.log(customer);
      return await this.instance.put(customer);
    } catch (error) {
      console.error(error);
    }
  }
}

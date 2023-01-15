import { Table, Entity } from 'dynamodb-toolbox';
import { DocumentClient } from '@src/core.init';

const SchedulerTable = new Table({
  name: 'Scheduler',
  partitionKey: 'pk',
  sortKey: 'sk',
  DocumentClient,
});

const SchedulerEntity = new Entity({
  name: 'scheduler',
  attributes: {
    pk: { partitionKey: true },
    sk: { hidden: true, sortKey: true },
    title: { type: 'string' },
    description: { type: 'string' },
    message: { type: 'string' },
    retry: { type: 'number' },
    scheduler_type: ['sk', 0],
    scheduled_at: ['sk', 1],
    status: { type: 'string', default: 'stop' },
  },
  table: SchedulerTable,
} as const);

export class SchedulerRepository {
  private instance;
  constructor() {
    this.instance = SchedulerEntity;
  }

  async createScheduler() {
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
        scheduler_type: 'timestamp',
        scheduled_at: nextSchedule.toISOString(),
      };
      console.log(customer);
      return await this.instance.put(customer);
    } catch (error) {
      console.error(error);
    }
  }
}

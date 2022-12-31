import { schedulerService } from '@src/service';
import { SchedulerController } from './scheduler.controller';

const schedulerController = new SchedulerController(schedulerService);

export { schedulerController };

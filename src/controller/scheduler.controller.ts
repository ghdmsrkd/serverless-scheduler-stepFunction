import { SchedulerService } from '@src/service/scheduler.service';

export class SchedulerController {
  private eventMap: Record<string, (eventMessage: any) => Promise<any>>;
  constructor(private schedulerService: SchedulerService) {
    this.eventMap = {
      TranslateSchedule: this.translateSchedule.bind(this),
      GetScheduleStatus: this.getScheduleStatus.bind(this),
      PublishMessage: this.publishMessage.bind(this),
    };
  }
  getEventHandler(eventPattern: string) {
    const eventHandler = this.eventMap[eventPattern];
    if (!eventHandler) {
      console.error('eventPattern =>', eventPattern);
      throw new Error('Invalidated Event Pattern!!');
    }
    return eventHandler;
  }

  private async translateSchedule(eventMessage: any) {
    return this.schedulerService.translateSchedule();
  }

  private async getScheduleStatus(eventMessage: any) {
    return this.schedulerService.getScheduleStatus();
  }

  private async publishMessage(eventMessage: any) {
    return this.schedulerService.publishMessage();
  }
}

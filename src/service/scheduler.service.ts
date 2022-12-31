export class SchedulerService {
  async publishMessage() {
    return true;
  }
  async getScheduleStatus() {
    const nowDate = new Date();
    const nextSchedule = new Date(nowDate.setMinutes(nowDate.getMinutes() + 1));
    return {
      scheduledAt: nextSchedule.toISOString(),
    };
  }
  async translateSchedule() {
    const nowDate = new Date();
    const nextSchedule = new Date(nowDate.setMinutes(nowDate.getMinutes() + 1));
    return {
      isScheduleStop: null,
      scheduledAt: nextSchedule.toISOString(),
    };
  }
}

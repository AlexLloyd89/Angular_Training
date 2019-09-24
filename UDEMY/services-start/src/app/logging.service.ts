export class LoggingService {
  logStatusChange(status: string) {
    console.log(`a server status changes, new status: ${status}`);
  }
}

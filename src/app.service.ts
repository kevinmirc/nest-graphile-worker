import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  justWait(interval: { seconds: number }): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, interval.seconds * 1000);
    });
  }
}

import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const key = 'Request-response-time';
    console.time(key)
    console.log('Hi from middleware!')

    res.on('finish', () => console.timeEnd(key))
    next();
  }
}

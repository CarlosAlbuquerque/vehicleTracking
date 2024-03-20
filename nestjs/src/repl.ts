import { repl } from '@nestjs/core';
import { AppModule } from './app.module';

// run 'npm run repl' in terminal
// run command in terminal > await get(RoutesDriverService).createOrUpdate({route_id: '65fae28d7ecbb25d9c8d1153', lat: 0, lng: 0})

async function bootstrap() {
  await repl(AppModule);
}

bootstrap();
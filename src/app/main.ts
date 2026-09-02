import { Startup } from "./Startup";

async function bootstrap(): Promise<void> {
  const startup = new Startup();

  await startup.initialize();
}

void bootstrap();

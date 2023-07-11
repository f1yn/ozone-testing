import { createService } from '/ozone/service-deno/service.ts';

const serverToBeReady = createService();

await serverToBeReady;

console.log('Server is ready');
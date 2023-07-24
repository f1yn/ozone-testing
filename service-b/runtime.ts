import { createService, send } from '@o3/service-deno/service.ts';

const serverToBeReady = createService();

await serverToBeReady;

console.log('Server is ready');

// Perform repetitive action because why not
setInterval(() => {
    send('SOME_INTENT', { whoop: true })
}, 1000)
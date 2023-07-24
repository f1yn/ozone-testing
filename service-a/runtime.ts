import { createService, addListener } from '@o3/service-deno/service.ts';

const serverToBeReady = createService();

await serverToBeReady;

addListener('SOME_INTENT', () => {
    console.log("Received SOME_INTENT")
})

console.log('Server is ready');
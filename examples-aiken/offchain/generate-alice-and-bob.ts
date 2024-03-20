import { lucid } from "./instance-lucid.ts";

// Generate two wallets for Alice and Bob
const alicePK = await lucid.utils.generatePrivateKey();
const bobPK = await lucid.utils.generatePrivateKey();

// Save the seeds to a file
await Deno.writeTextFile("./assets/alice-pk", alicePK);
console.log("Alice private key saved on ./assets/alice-pk");
await Deno.writeTextFile("./assets/bob-pk", bobPK);
console.log("Bob private key saved on ./assets/bob-pk");

import { lucid } from "./instance-lucid.ts";

// Print Alice's utxos
const alicePK = await Deno.readTextFile("./assets/alice-pk");
lucid.selectWalletFromPrivateKey(alicePK);
console.log("Alice's address:\n", await lucid.wallet.address());
console.log("Alice's utxos:\n", await lucid.wallet.getUtxos());
console.log("\n")

// Print Bob's utxos
const bobPK = await Deno.readTextFile("./assets/bob-pk");
lucid.selectWalletFromPrivateKey(bobPK);
console.log("Bob's address:\n", await lucid.wallet.address());
console.log("Bob's utxos:\n", await lucid.wallet.getUtxos());

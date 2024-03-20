// deno-lint-ignore-file no-explicit-any
import { lucid } from "./instance-lucid.ts";
import { SpendingValidator } from "./lucid/mod.ts";

// Load validator
const plutusJSON = JSON.parse(await Deno.readTextFile("plutus.json"));

const validator: SpendingValidator = {
    type: "PlutusV2",
    script: plutusJSON.validators.filter((val: any) => val.title == "gift_burn_42.fortyTwo")[0].compiledCode
}

// Query utxos at 42 validator
const validatorAddr = await lucid.utils.validatorToAddress(validator);
const utxos = await lucid.utxosAt(validatorAddr);
console.log("42 validator address:\n", validatorAddr);
console.log("42 validator utxos:\n", utxos);

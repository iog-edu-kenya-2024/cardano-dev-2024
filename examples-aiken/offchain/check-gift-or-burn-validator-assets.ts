// deno-lint-ignore-file no-explicit-any
import { lucid } from "./instance-lucid.ts";
import { SpendingValidator } from "./lucid/mod.ts";

// Load validator
const plutusJSON = JSON.parse(await Deno.readTextFile("plutus.json"));
const giftValidator: SpendingValidator = {
    type: "PlutusV2",
    script: plutusJSON.validators.filter((val: any) => val.title == "gift_burn_42.gift")[0].compiledCode
}

const _burnValidator: SpendingValidator = {
    type: "PlutusV2",
    script: plutusJSON.validators.filter((val: any) => val.title == "gift_burn_42.burn")[0].compiledCode
}

const validator = giftValidator;

// Query utxos at gift/burn validator
const validatorAddr = await lucid.utils.validatorToAddress(validator);
const utxos = await lucid.utxosAt(validatorAddr);
console.log("Gift validator address:\n", validatorAddr);
console.log("Gift validator utxos:\n", utxos);

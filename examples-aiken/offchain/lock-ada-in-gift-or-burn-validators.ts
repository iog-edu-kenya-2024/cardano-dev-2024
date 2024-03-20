// deno-lint-ignore-file no-explicit-any
import { lucid } from "./instance-lucid.ts";
import { Data, fromText } from "./lucid/mod.ts";
import { SpendingValidator } from "./lucid/mod.ts";

// Load Alice's wallet
const alicePK = await Deno.readTextFile("./assets/alice-pk");
lucid.selectWalletFromPrivateKey(alicePK);

// Load validator
const plutusJSON = JSON.parse(await Deno.readTextFile("plutus.json"));

const _giftValidator: SpendingValidator = {
    type: "PlutusV2",
    script: plutusJSON.validators.filter((val: any) => val.title == "gift_burn_42.gift")[0].compiledCode
}

const burnValidator: SpendingValidator = {
    type: "PlutusV2",
    script: plutusJSON.validators.filter((val: any) => val.title == "gift_burn_42.burn")[0].compiledCode
}

const validator = burnValidator;

// Prepare values
const validatorAddr = await lucid.utils.validatorToAddress(validator);
console.log("Validator address:", validatorAddr);
const datum = { inline: Data.to(fromText("testing123")) };
const value = { lovelace: 10000000n };

// Prepare raw transaction
const tx = await lucid
    .newTx()
    .payToContract(validatorAddr, datum, value)
    .complete()

// Sign transaction
const signedTx = await tx.sign().complete();
// Submit transaction
const txId = await signedTx.submit();
console.log("Transaction submitted with id:", txId);

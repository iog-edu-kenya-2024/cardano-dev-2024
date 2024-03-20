// deno-lint-ignore-file no-explicit-any
import { lucid } from "./instance-lucid.ts";
import { Data, fromText } from "./lucid/mod.ts";
import { SpendingValidator } from "./lucid/mod.ts";

// Load Bob's wallet
const bobPK = await Deno.readTextFile("./assets/bob-pk");
lucid.selectWalletFromPrivateKey(bobPK);

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
const utxos = await lucid.utxosAt(validatorAddr);
const ourUTxO = utxos.find((utxo) => utxo.datum == Data.to(fromText("testing123")));
if (ourUTxO === undefined) {
    console.log("UTxO not found at validator");
    Deno.exit(0);
}

console.log("UTxO to be consumed:", ourUTxO);
// Prepare raw transaction
const tx = await lucid
    .newTx()
    .collectFrom([ourUTxO], Data.void())
    .attachSpendingValidator(validator)
    .complete()

// Sign transaction
const signedTx = await tx.sign().complete();
// Submit transaction
const txId = await signedTx.submit();
console.log("Transaction submitted with id:", txId);
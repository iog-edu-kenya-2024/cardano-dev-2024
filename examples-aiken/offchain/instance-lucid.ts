import { Maestro, Lucid } from "./lucid/mod.ts";

const maestroToken = Deno.env.get("MAESTRO_TOKEN")!;
const maestro = new Maestro({
    network: "Preview",
    apiKey: maestroToken,
    turboSubmit: false
});
const lucid = await Lucid.new(maestro, "Preview");
export { lucid };


import { build } from "tsdown";

await build({
    entry: ["src/index.ts"],
    format: "esm",
    target: "node22",
    platform: "node",
    dts: true,
    clean: true,
    outExtensions: () => ({
        js: ".js",
    }),
});

import defaultConfig, { defineConfig } from "@forsakringskassan/eslint-config";
import typescriptConfig from "@forsakringskassan/eslint-config-typescript";

export default [
    defineConfig({
        name: "Ignored files",
        ignores: [
            "**/coverage/**",
            "**/dist/**",
            "**/node_modules/**",
            "**/temp/**",
        ],
    }),

    ...defaultConfig,
    typescriptConfig(),
];

import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections"
import { defineEcConfig } from "astro-expressive-code"

// eslint-disable-next-line no-restricted-imports
import { pluginFileIcons } from "./src/lib/ec/langIcon.js"

export default defineEcConfig({
  defaultLocale: "ja_JP",
  plugins: [
    pluginCollapsibleSections(),
    pluginFileIcons({ showIconByDefault: true }),
  ],
  styleOverrides: {
    codeFontFamily:
      "'Fira Code', 'Noto Sans JP', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
  themes: ["one-dark-pro"],
})

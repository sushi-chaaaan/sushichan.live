/* eslint-disable perfectionist/sort-objects */
import type { ExpressiveCodePlugin } from "astro-expressive-code"

export interface PluginFileIconsOptions {
  /**
   * If true, the icon will be shown by default.
   *
   * @default true
   * @memberof PluginIconOptions
   */
  showIconByDefault?: boolean

  size?: `${number}em`
}

export interface PluginFileIconsProps {
  showIcon: boolean
}

declare module "@expressive-code/core" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface ExpressiveCodeBlockProps extends PluginFileIconsProps {}
}

export function pluginFileIcons(
  options: PluginFileIconsOptions = {},
): ExpressiveCodePlugin {
  const { showIconByDefault = true } = options
  return {
    hooks: {
      preprocessMetadata: ({ codeBlock }) => {
        const { metaOptions, props } = codeBlock
        props.showIcon =
          metaOptions.getBoolean("showIcon") ??
          props.showIcon ??
          showIconByDefault
      },
      postprocessRenderedBlock: ({ codeBlock }) => {
        if (!codeBlock.props.showIcon) return
      },
    },
    name: "FileIcons",
  }
}

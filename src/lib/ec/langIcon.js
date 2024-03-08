"use strict"
import { getIconData, iconToSVG, replaceIDs } from "@iconify/utils"
import { icons } from "@iconify-json/vscode-icons"
import { fromHtmlIsomorphic } from "hast-util-from-html-isomorphic"
import { select } from "hast-util-select"

function getIconSvg(name) {
  name ??= "default-file"
  var iconData = getIconData(icons, name)
  if (!iconData) return null
  var svg = iconToSVG(iconData)
  const svgAttributesStr = Object.keys(svg.attributes)
    .map(
      (attr) =>
        // No need to check attributes for special characters, such as quotes,
        // they cannot contain anything that needs escaping.
        `${attr}="${svg[attr]}"`,
    )
    .join(" ")
  console.log(svg.body)
  return replaceIDs(
    `<svg ${svgAttributesStr}>${svg.body}</svg>`,
    (id) => `icon-${id}`,
  )
}

export function pluginFileIcons(options) {
  if (options === void 0) {
    options = {}
  }
  var _a = options.showIconByDefault,
    showIconByDefault = _a === void 0 ? true : _a
  return {
    hooks: {
      postprocessRenderedBlock: function (_a) {
        if (!_a.codeBlock.props.showIcon) return
        var renderData = _a.renderData
        const titleAst = select(
          "figure > figcaption.header > span.title",
          renderData.blockAst,
        )
        if (!titleAst || titleAst.children.length < 1) return
        var iconSvg = getIconSvg(null)
        console.log(iconSvg)

        const svg = fromHtmlIsomorphic(iconSvg, { fragment: true })
        console.log(svg)
        titleAst.children = [
          // グラデーションのあるSVGを正しく描画できていない
          svg,
          // (0, h)(
          //   "svg",
          //   {
          //     ...iconSvg.attributes,
          //     style: "vertical-align: -0.25em; margin-inline-end: 0.25em;",
          //   },
          //   svg,
          // ),
          ...titleAst.children,
        ]
      },
      preprocessMetadata: function (_a) {
        var _b, _c
        var codeBlock = _a.codeBlock
        var metaOptions = codeBlock.metaOptions,
          props = codeBlock.props
        props.showIcon =
          (_c =
            (_b = metaOptions.getBoolean("showIcon")) !== null && _b !== void 0
              ? _b
              : props.showIcon) !== null && _c !== void 0
            ? _c
            : showIconByDefault
      },
    },
    name: "FileIcons",
  }
}

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"
import { Root } from "./src/components/root"

export function wrapPageElement({ element, props }) {
  return <Root {...props}>{element}</Root>
}

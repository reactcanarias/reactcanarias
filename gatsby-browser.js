/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import { Root } from "./src/components/root"

export function wrapPageElement({ element, props }) {
  return <Root {...props}>{element}</Root>
}

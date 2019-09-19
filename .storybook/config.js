import React from "react"
import { configure, addDecorator } from "@storybook/react"
import { ThemeProvider } from "theme-ui"

import { Root } from "../src/components/root"
import theme from "../src/gatsby-plugin-theme-ui/index"
// import { action } from "@storybook/addon-actions"

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
// // This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
// window.___navigate = pathname => {
//   action("NavigateTo:")(pathname)
// }
if (!process.env.JEST_WORKER_ID) {
  addDecorator(story => (
    <ThemeProvider theme={theme}>
      <Root>{story()}</Root>
    </ThemeProvider>
  ))
}
configure(loadStories, module)

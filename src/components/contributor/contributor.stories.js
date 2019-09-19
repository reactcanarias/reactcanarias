import React from "react"

import { storiesOf } from "@storybook/react"

import { Contributor } from "./contributor"

if (!process.env.JEST_WORKER_ID) {
  storiesOf("Contributor", module).add("Simple use", () => (
    <Contributor name="John Doe" github="john" company="Netflix" />
  ))
}

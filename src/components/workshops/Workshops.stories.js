import React from "react"

import { storiesOf } from "@storybook/react"

import { WorkshopsSection } from "./WorkshopsSection"

if (!process.env.JEST_WORKER_ID) {
  storiesOf("Workshops", module).add("Simple use", () => <WorkshopsSection />)
}

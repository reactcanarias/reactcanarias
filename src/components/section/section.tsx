import React, { ReactNode } from "react"
import styled from "styled-components"

const Container = styled.section``

interface SectionProps {
  backgroundColor?: string
  children?: ReactNode
}

export const Section: React.FC<SectionProps> = ({
  backgroundColor = "#FFF",
  children,
}) => {
  return <Container style={{ backgroundColor }}>{children}</Container>
}

export default Section

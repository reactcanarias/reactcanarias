import React, { ReactNode } from "react"
import { Styled } from "theme-ui"
import { Global, css } from "@emotion/core"
import emotionNormalize from "emotion-normalize"

interface RootProps {
  children?: ReactNode
}

export function Root(props: RootProps) {
  return (
    <Styled.root>
      <Global
        styles={css`
          ${emotionNormalize}
        `}
      ></Global>
      {props.children}
    </Styled.root>
  )
}

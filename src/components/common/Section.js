import React from "react"
import styled from "styled-components"

import Img from "gatsby-image"

import Title from "../styled/Title.css.js"
import Section from "../styled/Section.css.js"
import Content from "../styled/Content.css.js"

const Image = styled(Img)`
  display: block;
  margin: 0 auto;
  border-radius: 1em;
  padding: 0.5rem;
  max-width: 600px;
`

const Inner = styled.div`
  padding: 1rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
  }
`

const Item = styled.div``

export default ({ reverse, title, showTitle, image, children }) => {
  return (
    <Section>
      {showTitle && <Title data-testid="section-title">{title}</Title>}
      <Inner>
        <Item style={{ order: reverse + 1 }}>
          <Image fluid={image} alt="" />
        </Item>
        <Item style={{ order: !reverse + 1 }}>
          <Content>{children}</Content>
        </Item>
      </Inner>
    </Section>
  )
}

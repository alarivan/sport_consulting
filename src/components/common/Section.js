import React from "react"
import styled from "styled-components"

import { Row, Col } from "react-flexa"

import Title from "../styled/Title.css.js"
import Section from "../styled/Section.css.js"
import Content from "../styled/Content.css.js"

const Image = styled.img`
  display: block;
  margin: 0 auto;
  border-radius: 1em;
  padding: 0.5rem;
`

export default ({ reverse, title, showTitle, image, children }) => {
  return (
    <Section>
      {showTitle && <Title data-testid="section-title">{title}</Title>}
      <Row style={{ width: "100%" }} gutter={0}>
        <Col
          gutter={0}
          xs={12}
          lg={6}
          order={{ xs: 0, lg: reverse + 1 }}
          alignSelf="center"
        >
          <Image src={image} alt="" />
        </Col>
        <Col
          gutter={0}
          xs={12}
          lg={6}
          order={{ xs: 0, lg: !reverse + 1 }}
          alignSelf="center"
        >
          <Content>{children}</Content>
        </Col>
      </Row>
    </Section>
  )
}

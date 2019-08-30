import React from "react"
import styled from "styled-components"
import { Row, Col } from "react-flexa"
import { graphql, useStaticQuery } from "gatsby"

import Title from "./styled/Title.css.js"
import Section from "./styled/Section.css.js"
import Content from "./styled/Content.css.js"

const Label = styled.label`
  display: block;
  margin-bottom: 0.25rem;
`
const Value = styled.div`
  display: block;
  font-weight: 600;
`

export default () => {
  const data = useStaticQuery(graphql`
    query ContactInfoQuery {
      contactJson {
        email
        title
        phone
        address
      }
    }
  `)
  const { title, email, phone, address } = data.contactJson

  return (
    <Section>
      <Title>{title}</Title>
      <Row style={{ width: "100%" }} gutter={0} justifyContent="center">
        <Col gutter={0} xs={10} md={8} alignSelf="center">
          <Content style={{ textAlign: "center" }}>
            <p>
              <Label>Email:</Label>

              <Value>
                <a href={`mailto:${email}`}>{email}</a>
              </Value>
            </p>
            <p>
              <Label>Phone:</Label>
              <Value>{phone}</Value>
            </p>
            <p>
              <Label>Address:</Label>
              <Value>{address}</Value>
            </p>
          </Content>
        </Col>
      </Row>
    </Section>
  )
}

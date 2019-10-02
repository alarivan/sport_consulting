import React from "react"
import styled from "styled-components"
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
  max-width: 500px;
  margin: 0 auto;
`

const Block = styled.div`
  margin-bottom: 1rem;
`

const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
      <Inner>
        <Content style={{ textAlign: "center" }}>
          <Block>
            <Label>Email:</Label>

            <Value>
              <a href={`mailto:${email}`}>{email}</a>
            </Value>
          </Block>
          <Block>
            <Label>Phone:</Label>
            <Value>{phone}</Value>
          </Block>
          <Block>
            <Label>Address:</Label>
            <Value>{address}</Value>
          </Block>
        </Content>
      </Inner>
    </Section>
  )
}

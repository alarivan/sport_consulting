import React from "react"
import styled, { keyframes } from "styled-components"
import { Row, Col } from "react-flexa"
import { graphql, useStaticQuery } from "gatsby"
import ArrowDown from "./icons/ArrowDown.js"
import Logo from "./logo"

const LogoWrapper = styled.div`
  max-width: 525px;
  display: block;
  margin: 0 auto;
`

const Tagline = styled.h3`
  text-align: center;
`

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`

const Arrow = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  width: 100%;
  text-align: center;

  animation: ${BounceAnimation} 1s linear infinite;
  animation-delay: 800ms;
`

const CenteredArrowDown = styled(ArrowDown)`
  margin: 0 auto;
`

export default () => {
  const data = useStaticQuery(graphql`
    query MainInfoQuery {
      mainJson {
        tagline
      }
    }
  `)
  const { tagline } = data.mainJson

  return (
    <Row
      gutter={0}
      style={{ height: "100vh", position: "relative" }}
      justifyContent="center"
    >
      <Col xs={12} gutter={0} alignSelf="center">
        <div style={{ padding: "1rem" }}>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <Tagline>{tagline}</Tagline>
        </div>
        <Arrow>
          <CenteredArrowDown />
        </Arrow>
      </Col>
    </Row>
  )
}

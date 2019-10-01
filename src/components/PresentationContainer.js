import React from "react"

import Section from "./common/Section"
import Modal from "./Modal/index"
import Form from "./Form/index"
import Button from "./styled/Button.css.js"

import Contact from "./Contact"
import Banner from "./Banner"

import { StaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default ({
  isModalOpen,
  onModalOpenClick,
  onModalCloseClick,
  onFormSubmit,
  successModal,
  onSuccessModalClose,
}) => {
  return (
    <StaticQuery
      query={graphql`
        query SectionsQuery {
          allContentfulSection(sort: { fields: [position], order: ASC }) {
            edges {
              node {
                title
                reverse
                image {
                  fluid(maxWidth: 600) {
                    src
                  }
                }
                body {
                  json
                }
                position
                showTitle
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <Modal
            title="Book Your Free Consultation"
            isOpen={isModalOpen}
            onClose={onModalCloseClick}
          >
            <Form onFormSubmit={onFormSubmit} />
          </Modal>
          <Modal
            title="Success!"
            isOpen={successModal}
            onClose={onSuccessModalClose}
          >
            <h1 style={{ textAlign: "center" }}>We will contact you soon!</h1>
          </Modal>
          <Banner data={data} />
          {data.allContentfulSection.edges.map((section, index) => (
            <Section
              reverse={section.node.reverse}
              key={index}
              title={section.node.title}
              showTitle={section.node.showTitle}
              image={section.node.image.fluid.src}
            >
              <div style={{ marginBottom: "1.5rem" }}>
                {documentToReactComponents(section.node.body.json)}
              </div>

              <div style={{ textAlign: "center" }}>
                <Button onClick={onModalOpenClick}>
                  Book Your Free Consultation
                </Button>
              </div>
            </Section>
          ))}
          <Contact />
          <div style={{ display: "none" }}>
            <Form onFormSubmit={() => {}} />
          </div>
        </>
      )}
    ></StaticQuery>
  )
}

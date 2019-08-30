import React, { useState } from "react"
import qs from "query-string"
import PresentationContainer from "./PresentationContainer"

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [successModal, setSuccessModal] = useState(false)

  const handleModalOpenClick = () => {
    setIsModalOpen(true)
  }

  const handleModalCloseClick = () => {
    setIsModalOpen(false)
  }

  const handleSuccessModalOpen = () => {
    setSuccessModal(true)
  }

  const handleSuccessModalClose = () => {
    setSuccessModal(false)
  }

  const handleFormSubmit = (values, setSubmitting) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: qs.stringify({ "form-name": "contact", ...values }),
    })
      .then(() => {
        setSubmitting(false)
        setIsModalOpen(false)
        handleSuccessModalOpen()
      })
      .catch(error => console.error(error))
  }

  return (
    <PresentationContainer
      isModalOpen={isModalOpen}
      onModalOpenClick={handleModalOpenClick}
      onModalCloseClick={handleModalCloseClick}
      onFormSubmit={handleFormSubmit}
      successModal={successModal}
      onSuccessModalClose={handleSuccessModalClose}
    />
  )
}

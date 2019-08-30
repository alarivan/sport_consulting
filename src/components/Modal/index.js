import React, { useEffect } from "react"

import {
  ModalBackground,
  ModalContainer,
  ModalHeader,
  ModalHeaderTitle,
  ModalHeaderClose,
} from "./styles"
import IconCross from "../icons/Cross"

export default function Modal({ isOpen, onClose, title, children }) {
  const onEscKeyDown = e => {
    if (e.key !== "Escape") return

    onClose()
  }
  if (isOpen) {
    useEffect(() => {
      window.addEventListener("keydown", onEscKeyDown, false)

      return () => {
        window.removeEventListener("keydown", onEscKeyDown, false)
      }
    }, [isOpen])
    return (
      <ModalBackground open={isOpen} onClick={onClose}>
        <ModalContainer
          open={isOpen}
          onClick={event => event.stopPropagation()}
        >
          <ModalHeader>
            <ModalHeaderTitle>{title || ""}</ModalHeaderTitle>
            <ModalHeaderClose onClick={onClose}>
              <IconCross />
            </ModalHeaderClose>
          </ModalHeader>
          {children}
        </ModalContainer>
      </ModalBackground>
    )
  } else {
    typeof document !== `undefined` &&
      document.body.style.removeProperty(`overflow-y`)
    return null
  }
}

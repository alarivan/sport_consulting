import React, { useEffect } from "react"

import {
  ModalBackground,
  ModalContainer,
  ModalHeader,
  ModalHeaderTitle,
  ModalHeaderClose,
} from "./styles"
import IconCross from "../icons/Cross"
import { useSpring, animated } from "react-spring"

const AnimatedModalContainer = animated(ModalContainer)

export default function Modal({ isOpen, onClose, title, children }) {
  const contentProps = useSpring({
    opacity: isOpen ? 1 : 0,
    config: { duration: 100 },
  })

  useEffect(() => {
    window.addEventListener("keydown", onEscKeyDown, false)

    return () => {
      window.removeEventListener("keydown", onEscKeyDown, false)
    }
  }, [isOpen])

  const onEscKeyDown = e => {
    if (e.key !== "Escape") return

    onClose()
  }

  if (isOpen) {
    return (
      <ModalBackground open={isOpen} onClick={onClose}>
        <AnimatedModalContainer
          style={contentProps}
          onClick={event => event.stopPropagation()}
        >
          <ModalHeader>
            <ModalHeaderTitle>{title || ""}</ModalHeaderTitle>
            <ModalHeaderClose onClick={onClose}>
              <IconCross />
            </ModalHeaderClose>
          </ModalHeader>
          {children}
        </AnimatedModalContainer>
      </ModalBackground>
    )
  } else {
    typeof document !== `undefined` &&
      document.body.style.removeProperty(`overflow-y`)
    return null
  }
}


import React from "react";

interface IButton {
  text: string | JSX.Element
}

/**
 * @name Button
 * @description The button component
 * @param {string} text - The text or jsx of the button
 * @returns {JSX.Element} - it returns JSX.Element
 * @example
 * <Button text="Press Me" />
 */

const Button = (props: IButton): JSX.Element => {
  const {
    text
  } = props

  return (
    <button>
      {text}
    </button>
  )

}

export default Button
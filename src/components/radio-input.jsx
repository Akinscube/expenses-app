import React from "react"
import "../assets/styles/components/radio-input.css"

const RadioButton = ({ name, value, checked, onChange, disabled, children }) => {
  return (
    <label className="radio-input">
      <input
        className={checked ? "radio radio-checked" : "radio radio-unchecked"}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      {children}
    </label>
  )
}

export default RadioButton

import React from 'react'


function Input({
  textInput,
  status,
  handleKeyDown,
  handleChangeInput,
  currentInput
}) {
  return (
    <input type="text" ref={textInput} className="form-control form-control-lg " width="100%" disabled={status != "started"} className="input" onKeyDown={handleKeyDown}
      onChange={handleChangeInput} value={currentInput} />

  )
}

export default Input
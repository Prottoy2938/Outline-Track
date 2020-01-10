import { useState } from "react"

export default initialValue => {
  const [state, setstate] = useState(initialValue)

  const handleChange = e => {
    setstate(e.target.value)
  }

  const reset = () => {
    setstate("")
  }
  const toggle = () => {
    setstate(!state)
  }
  return [state, toggle, handleChange, reset]
}

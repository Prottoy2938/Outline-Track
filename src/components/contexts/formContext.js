import { useState } from "react"

export default initialValue => {
  const [state, setstate] = useState(initialValue)

  const handleChange = e => {
    setstate(e.target.value)
  }

  const reset = () => {
    setstate("")
  }
  return [state, handleChange, reset]
}

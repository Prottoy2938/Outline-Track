import { useEffect } from "react"

export default () => {
  //This web applications url has changed, those who has the old url which brings them here will be redirected
  //to a new url
  useEffect(() => {
    window.location.replace(
      "https://cluster-11.github.io/image-recognition-mobileNet/"
    )
  }, [])
  return null
}

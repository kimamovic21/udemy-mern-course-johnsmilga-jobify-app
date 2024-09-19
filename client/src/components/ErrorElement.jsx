import { useRouteError } from "react-router-dom"

const ErrorElement = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <h4>There was an an error...</h4>
  )
}

export default ErrorElement
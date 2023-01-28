import { Link, useRouteError } from "react-router-dom"

export default function CarrersError() {
    const error = useRouteError()
  return (
    <div className="carrers-error">
        <h2>Error</h2>
        <p>{error.message}</p>
        <Link to="/">Back To HomePage</Link>
    </div>
  )
}

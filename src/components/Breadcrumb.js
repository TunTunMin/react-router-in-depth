import { Link, useLocation } from "react-router-dom"

export default function Breadcrumb() {
    const localtion = useLocation()
    let currentLink = []
    console.log('location', localtion)  
    const crumbs = localtion.pathname.split('/').filter((crumb) => crumb !== '').map(crumb => {
        currentLink.push(`/${crumb}`)

        return (
            <div className="crumb" key={crumb}>
              <Link to={currentLink.join('')}>{crumb}</Link>
            </div>
        )
    })
    // const crumbs = localtion.
  return (
    <div className="breadcrumbs">
        {crumbs}
    </div>
  )
}

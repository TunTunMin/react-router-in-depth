import { Outlet } from "react-router-dom";

export default function CarrerLayout() {
  return (
    <div className="carrers-layout">
        <h2>Carrers</h2>
        <p>Id ullamco magna duis aliqua consequat laboris eu Lorem. Dolor enim reprehenderit dolore duis. Irure fugiat officia ut enim id nisi sint labore officia dolore deserunt ut.</p>

        <Outlet></Outlet>
    </div>
  )
}

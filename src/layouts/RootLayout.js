import { NavLink, Outlet } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
const RootLayout = () => {
    return (
        <div className="root-layout">
        <header>
        <nav>
            <h1>TunMinRouter</h1>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="about" >About</NavLink>
            <NavLink to="help" >Help</NavLink>
            <NavLink to="carrers" >Carrers</NavLink>
        </nav>
        <Breadcrumb />
        </header>

        <main>
            <Outlet />
        </main>
        </div>
        )
    }
    
    export default RootLayout;
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="overflow-nav-windows"></div>
            <Outlet />
        </>
    )
}

export default Layout

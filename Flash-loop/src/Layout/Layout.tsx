import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = () => {
    return (
        <>
            <Navbar />
            <div style={{height: '60px'}}></div>
            <Outlet />
        </>
    )
}

export default Layout

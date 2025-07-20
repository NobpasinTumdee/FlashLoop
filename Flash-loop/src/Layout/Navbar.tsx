import { Link, useLocation } from "react-router-dom"
import './Layout.css'

const Navbar = () => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;
    return (
        <>
            <nav className="Main-nav">
                <div className="group-nemu">
                    <Link to="/add" className={`Nenu-nav ${isActive('/add') ? 'active' : ''}`} >
                        <img height={30} width={30} src="https://webstockreview.net/images/dictionary-clipart-book-index-11.png" alt="Vocabulary" />
                    </Link>
                    <Link to="/home" className={`Nenu-nav ${isActive('/home') ? 'active' : ''}`}>
                        <img height={30} width={30} src="https://static.vecteezy.com/system/resources/previews/022/288/647/non_2x/3d-home-icon-free-png.png" alt="HOME" />
                    </Link>
                    <Link to="/review" className={`Nenu-nav ${isActive('/review') ? 'active' : ''}`}>
                        <img height={30} width={30} src="https://th.bing.com/th/id/R.892c6094d01d82aa1a83000715a97b20?rik=FyaZIUwCxAvDxw&pid=ImgRaw&r=0" alt="flash" />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar

import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import { updateStreak } from '../streak-db';
import { useEffect, useState } from "react";
import Streak_icon from '../assets/streak-flame.png';

const Layout = () => {
    const [streak, setStreak] = useState(0);

    useEffect(() => {
        updateStreak().then(setStreak);
    }, []);

    // Theme
    const setalduin = () => {document.querySelector("body")?.setAttribute("data-theme", "alduin");localStorage.setItem("SelectedTheme", "alduin")}
    const setolivia = () => {document.querySelector("body")?.setAttribute("data-theme", "olivia");localStorage.setItem("SelectedTheme", "olivia")}
    const setLight = () => {document.querySelector("body")?.setAttribute("data-theme", "light");localStorage.setItem("SelectedTheme", "light")}
    const sethanok = () => {document.querySelector("body")?.setAttribute("data-theme", "hanok");localStorage.setItem("SelectedTheme", "hanok")}
    const setdarling = () => {document.querySelector("body")?.setAttribute("data-theme", "darling");localStorage.setItem("SelectedTheme", "darling")}
    const SelectedTheme = localStorage.getItem("SelectedTheme");
    if (SelectedTheme === "alduin") {setalduin(); } else if (SelectedTheme === "olivia") {setolivia();} else if (SelectedTheme === "Light") {setLight();} else if (SelectedTheme === "hanok") {sethanok();} else if (SelectedTheme === "darling") {setdarling();}
    
    return (
        <>
            <Navbar />
            <div className="overflow-nav-windows"></div>
            <div className="streak">
                <img width={40} src={Streak_icon} alt="" />
                <p>{streak}</p>
            </div>
            <Outlet />
        </>
    )
}

export default Layout

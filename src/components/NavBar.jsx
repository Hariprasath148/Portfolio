import { NavLink } from 'react-router-dom';
import '../css/navbar.css';
import logo_dark  from '../assets/images/strokedark.png';

export default function NavBar() {
    function opennav(){
        document.querySelector(".nav_menu").classList.toggle("show");
        document.querySelector("#ham_burger").classList.toggle("open");
    }

    function change_theme(){
        document.querySelector("body").classList.toggle("dark"); 
    }

    return <>
        <div className="nav_bar">
            <div id="logo">
                <NavLink id='logo_link' to="/">
                    <img src={logo_dark} alt="logo" />
                </NavLink>
            </div>
            <input type="checkbox" name="theme_switch" id="switch_theme" onChange={change_theme} />
            <div id="ham_burger" className="" onClick={opennav}>
                <span className="hamburger_line"></span>
                <span className="hamburger_line"></span>
                <span className="hamburger_line"></span>
            </div>
        </div>
        <div className="nav_menu row">
            <div className="nav_menu_one col-lg-8">
                <div className='nav_link'>
                    <ul>
                        <li><span>01</span><NavLink className={({isActive})=>(isActive?"nav_link active":"nav_link")} to="/">HOME</NavLink></li>
                        <li><span>02</span><NavLink className={({isActive})=>(isActive?"nav_link active":"nav_link")} to="/about">ABOUT</NavLink></li>
                        <li><span>03</span><NavLink className={({isActive})=>(isActive?"nav_link active":"nav_link")} to="/projects">PROJECTS</NavLink></li>
                        <li><span>04</span><NavLink className={({isActive})=>(isActive?"nav_link active":"nav_link")} to="/certificates">CERTIFICATES</NavLink></li>
                    </ul>
                </div>
                <div>
                </div>
            </div>
            <div className="nav_menu_two col-lg-4"></div>
        </div>
    </>
}
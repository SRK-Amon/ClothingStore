import logo from "../assets/images/logo.svg"
import like from "../assets/images/like.svg"
import basket from "../assets/images/basket.svg"
import menu from "../assets/images/menu.png"
import close from "../assets/images/close.png"
import { useState } from "react";
const Nav = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);}
        return (
            <nav className="nav">
                <div className="container">
                    <div className="nav_box">
                        <a href="#!" className="nav_logo">
                            <img src={logo} alt="" />
                        </a>
                        <img src={menu} alt="" className={`menu ${isActive ? "active" : ""}`} onClick={handleClick} />
                        <ul className={`nav_list ${isActive ? "active" : ""}`}>
                        <img src={close} alt="" className="close" onClick={handleClick} />
                            <li><a href="#!" className="nav_link">HOME PAGE</a></li>
                            <li><a href="#!" className="nav_link">SHOP</a></li>
                            <li><a href="#!" className="nav_link">BLOG</a></li>
                            <div className="nav_mini_box">
                            <img src={like} alt="" className="nav_mini_box_img" />
                            <img src={basket} alt="" className="nav_mini_box_img" />
                        </div>
                        </ul>
                        <div className="nav_mini_box">
                            <img src={like} alt="" className="nav_mini_box_img" />
                            <img src={basket} alt="" className="nav_mini_box_img" />
                        </div>
                    </div>
                </div>
            </nav>
        )
    }

    export default Nav

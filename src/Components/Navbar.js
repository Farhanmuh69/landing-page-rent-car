import "./NavbarStyles.css";
import { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import LogoNav from "../assets/LogBBJ.png";
import { WaLink } from "./socialLink";

class Navbar extends Component {
    state = {clicked: false };
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <a className="navbar-logo" href="/">
                    <img src={LogoNav} alt="Logo" />
                </a>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 
                        "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <Link className={item.cName} 
                                to={item.url}>
                                <i className={item.icon}>
                                    </i>{item.title}
                            </Link>
                        </li>
                        )
                    })}
                    <li>
                        <Link to={WaLink} target="_blank"><button>Contact</button></Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;
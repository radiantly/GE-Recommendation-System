import React, { Component } from 'react';
import {MenuItems} from "./MenuItems";
import './Navbar.css';
import NotificationsActiveSharpIcon from '@mui/icons-material/NotificationsActiveSharp';

class Navbar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
    return(
        <nav className="NavbarItems">
            <h1 className="navbar-logo">GE-Healthcare<i className="fab fa-aws"></i></h1>
            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times':'fas fa-bars' }></i>

            </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item,index)=>{
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                            {item.title} {item.icons}
                            </a>
                        </li>
                        
                    )

                })}
            </ul>
            <div class="dropdown">
                <button class="dropbtn">More 
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                <a href="https://google.com"> <NotificationsActiveSharpIcon className="small"/> Notification</a>
                <a href="https://google.com">Link 2</a>
                <a href="https://google.com">Link 3</a>
                </div>
            </div> 
        </nav>
    )
}
}

export default Navbar
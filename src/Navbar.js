import React, { Component } from 'react';
import logo from './logo.svg';
import NavbarButton from './NavbarButton';
import NavbarButtonList from './NavbarButtonList';

class Navbar extends Component {
    render() {
        return (
            <nav className={"navbar"}>
                <ul className="navbarHome">
                    <div className="navbarLogo"><img src={logo} className="App-logo" alt="logo" /></div>
                    <NavbarButton buttonName={"Tommydreamer57"}/>
                </ul>
                <NavbarButtonList />
            </nav>
        )
    }
}

export default Navbar;

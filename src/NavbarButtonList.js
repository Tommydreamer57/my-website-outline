import React, { Component } from 'react';
import NavbarButton from './NavbarButton';

class NavbarButtonList extends Component {
    render() {
        return (
            <ul className="navbarButtonList">
                <NavbarButton buttonName={'Home'}/>
                <NavbarButton buttonName={"About"}/>
                <NavbarButton buttonName={"Portfolio"}/>
                <NavbarButton buttonName={"Contact"}/>
            </ul>
        )
    }
}

export default NavbarButtonList;

import React, { Component } from 'react';

export default function NavbarButton(props) {
    var buttonName = props.buttonName;
    var reference = props.reference;
    return <li className="navbarButton"><a href="#"><p>{buttonName}</p></a></li>
}

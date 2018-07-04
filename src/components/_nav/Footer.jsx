import React from 'react';
import { Menu } from 'semantic-ui-react';
import './Footer.css';

const Footer = props => {
    return (
      <Menu inverted fixed="bottom" className="footer_navbar">
        <Menu.Item>
        <small>design © 2018 Suthicha Poonakaow</small>
        </Menu.Item>
      </Menu>
    )
}

export default Footer;

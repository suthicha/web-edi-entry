import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import './NavBar.css';

const NavBar = props => {
  return (
      <Menu inverted fixed="top" className="top_navbar">
        <Menu.Item>
          <Icon name="list" link fitted onClick={props.toggleClick} />
        </Menu.Item>
        <Menu.Menu position="right">
          <div className="ui right aligned category search item">
            <div className="ui transparent icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Search..."
              />
              <i className="search link icon" />
            </div>
            <div className="results" />
          </div>
        </Menu.Menu>
      </Menu>
  );
};

export default NavBar;

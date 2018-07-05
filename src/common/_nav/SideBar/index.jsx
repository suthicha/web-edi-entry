import React from "react";
import { Sidebar, Menu, Icon } from "semantic-ui-react";

const SideBar = props => {
  return (
    <Sidebar
      as={Menu}
      animation="push"
      width="thin"
      visible={props.visible}
      icon="labeled"
      vertical
    >
      <Menu.Item name="home">
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item name="gamepad">
        <Icon name="gamepad" />
        Games
      </Menu.Item>
      <Menu.Item name="camera">
        <Icon name="camera" />
        Channels
      </Menu.Item>
    </Sidebar>
  );
};

export default SideBar;

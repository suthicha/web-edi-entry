import React, { Component } from 'react';
import NavBar from '../_nav/NavBar';
import Footer from '../_nav/Footer';
import SideBar from '../_nav/SideBar';
import { Sidebar, Segment } from 'semantic-ui-react'

class App extends Component {
  state = {
    visible: false,
  }

  toggleVisibility = () => this.setState({visible:!this.state.visible})

  render() {
    return (
      <div id="main">
        <NavBar toggleClick={this.toggleVisibility} />
        <Sidebar.Pushable as={Segment}>
          <SideBar visible={this.state.visible} />
          <Sidebar.Pusher>
            <div id="wrapper">
              <h1>Wrapper...</h1>
            </div>
            <Footer />
          </Sidebar.Pusher>
        </Sidebar.Pushable>    
      </div>
    );
  }
}

export default App;

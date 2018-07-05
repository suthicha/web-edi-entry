import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from "react-router-dom";

import NavBar from '../_nav/NavBar';
import Footer from '../_nav/Footer';
import SideBar from '../_nav/SideBar';
import { Sidebar, Segment } from 'semantic-ui-react'

import { LoginForm } from '../../view/authenticate';

class App extends Component {
  state = {
    visible: false,
  }

  toggleVisibility = () => this.setState({visible:!this.state.visible})

  render() {
    const { checked } = this.props;
    return (
      <div>
      <Switch>
          <Route exact={true} path="/" component={LoginForm} />
        </Switch>
        { checked && 
          <Route 
            path="/(.+)"
            render={()=>(
              <div id="main>">
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
            )}
          />}
      </div>
    );
  }
}

App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  checked: PropTypes.bool.isRequired
}

const mapState = ({ session }) => ({
  checked: session.checked,
  authenticated: session.authenticated
});

export default withRouter(connect(mapState)(App));

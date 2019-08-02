import React, { Component } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import MyProvider from "./components/Provider";

import "./App.css";

class App extends Component {

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <MyProvider>
        <div>
          <Header>
          </Header>
          <Wrapper>
          </Wrapper>
          <Footer>Made with 
            <a className="orange-text text-lighten-3" href="http://materializecss.com"> Materialize
            </a>
          </Footer>
        </div>
      </MyProvider>
    );
  }
}

export default App;

import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";
import Global from "./styles/global";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./containers/Main";
import Favorites from "./containers/Favorites";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <Global />
        <ThemeProvider theme={theme}>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>
          </Switch>
          <Footer />
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;

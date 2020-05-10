import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Main, Favorites } from "./containers";
import { Header, Footer } from "./components";
import theme from "./lib/styles/Theme";

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
          <Footer />
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;

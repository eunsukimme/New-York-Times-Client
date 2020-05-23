import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header, Footer } from "./components";
import Loader from "./components/common/Loader";
import theme from "./lib/styles/Theme";

const Main = React.lazy(() => import("./containers/Main"));
const Favorites = React.lazy(() => import("./containers/Favorites"));

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loader visible={true} />}>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/favorites" component={Favorites} />
            </Switch>
            <Footer />
          </Router>
        </Suspense>
      </ThemeProvider>
    );
  }
}

export default App;

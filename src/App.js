import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import FooterMenu from "./components/FooterMenu/FooterMenu";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Contact from "./routes/Contact/Contact";
import Listings from "./routes/Listings/Listings";
import NotFound from "./routes/NotFound/NotFound";
import allListings from "../src/allListings";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    isLoading: false,
    listings: allListings
  };

  render() {
    return (
      <Router>
        <main className="App">
          <Layout>
            <HeaderMenu />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Home {...props} listings={this.state.listings} />
                )}
              />
              <Route path="/about" component={About} />
              <Route
                path="/listings"
                render={props => (
                  <Listings {...props} listings={this.state.listings} />
                )}
              />
              <Route path="/contact" render={props => <Contact {...props} />} />
              <Route component={NotFound} />
            </Switch>
            <FooterMenu />
          </Layout>
        </main>
      </Router>
    );
  }
}

export default App;

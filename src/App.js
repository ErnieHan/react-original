import React from "react";
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
import { setApp } from "./store/actions";
// i18n
import { Translation } from "react-i18next";
import i18n from "i18next";
// Router
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
//
import styled from "styled-components";

const Div = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function NoMatch() {
  return <h1>Page404</h1>;
}

class App extends React.Component {
  state = {
    language: "zhTW"
  };

  changeLanguage = async () => {
    if (this.state.language === "zhTW") {
      this.setState({
        language: "en"
      });
      i18n.changeLanguage("en");
    } else {
      this.setState({
        language: "zhTW"
      });
      i18n.changeLanguage("zhTW");
    }
  };

  render() {
    return (
      <Div>
        <button onClick={this.changeLanguage}>{this.state.language}</button>
        <Translation>{t => <>{t("app.hello")}</>}</Translation>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </div>
        </Router>
      </Div>
    );
  }
}

App.propTypes = {
  setApp: PropTypes.func,
  setAppActive: PropTypes.bool
};

const mapStateToProps = state => ({
  setAppActive: state.app.active
});

const mapDispatchToProps = dispatch => {
  return {
    setApp: () => dispatch(setApp())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setApp } from "./store/actions";
import { Translation } from "react-i18next";
import i18n from "i18next";

class App extends React.Component {
  state = {
    language: "zhTW"
  };

  changeLanguage = () => {
    i18n.changeLanguage("en");
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.changeLanguage}>繁體 / EN</button>
        <Translation>{t => <>{t("app.hello")}</>}</Translation>
      </div>
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

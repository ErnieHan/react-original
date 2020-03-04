import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { setApp } from "../store/actions";

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  active: state.app.active
});

export const mapDispatchToProps = dispatch => {
  return {
    setApp: () => dispatch(setApp())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

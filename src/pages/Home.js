import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { fetchApple, fetchData } from "../store/actions/home";

export class Home extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        {console.log("setAppActive", this.props.setAppActive)}
        {console.log("fetched", this.props.fetched)}
        <h1>Home Page</h1>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  fetched: state.home.fetched,
  setAppActive: state.app.index.active
});

export const mapDispatchToProps = dispatch => {
  return {
    fetchApple: () => dispatch(fetchApple()),
    fetchData: () => dispatch(fetchData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

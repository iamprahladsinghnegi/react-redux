import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import "./index.scss";
import { anotherName, fetchAnotherName } from "./actions";

class ReduxApp extends Component {
  constructor(props) {
    super(props);
    this.state = { componentState: "redux-app" };
  }
  render() {
    // console.log(this.props);
    return (
      <div className="reduxApp">
        <h1>Redux App</h1>
        {this.props.myname}
        <br />
        <Button
          onClick={() => {
            this.props.changeName("someone here");
          }}
        >
          check anyone here
        </Button>
        <Button
          onClick={() => {
            this.props.changeName2("everyone here");
          }}
        >
          check again
        </Button>
        <Button
          onClick={() => {
            this.props.fetchName();
          }}
        >
          fetch name
        </Button>
        {/* {console.log(this.props)} */}
        <h3> components state</h3>
        {this.state.componentState}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    myname: state.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeName: name => {
      dispatch({ type: "CHANGE_NAME", payload: name });
    },
    changeName2: name => {
      dispatch(anotherName(name));
    },
    fetchName: () => {
      dispatch(fetchAnotherName());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxApp);

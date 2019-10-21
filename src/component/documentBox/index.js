import React, { Component } from "react";
import "./index.scss";
import { Icon } from "antd";

class DocumentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="documentBox"
        style={{ borderColor: this.props.documentBorder }}
      >
        <img src={this.props.documentImage}></img>
        <h4> Template {this.props.documentNumber}</h4>
        {this.props.documentBorder == "blue" ? (
          <Icon className="checked-box" type="check" />
        ) : null}
      </div>
    );
  }
}

export default DocumentBox;

import React, { Component } from "react";
import "./index.scss";
import { Row, Col, Icon } from "antd";

class PluginBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="pluginBox"
        style={{ borderColor: this.props.pluginBoarder }}
      >
        <Row gutter={24}>
          <Col span={6}>
            <img src={this.props.pluginLogo}></img>
          </Col>
          <Col span={12}>{this.props.pluginName}</Col>
          <Col span={4}>
            {this.props.pluginBoarder == "blue" ? <Icon type="check" /> : null}
          </Col>
        </Row>
      </div>
    );
  }
}

export default PluginBox;

import React, { Component } from "react";
import "./index.scss";
import "antd/dist/antd.css";
import { Card, List, Row, Col } from "antd";
import PluginBox from "../../pluginBox";
import DocumentBox from "../../documentBox";
import { Button } from "antd/lib/radio";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selPlugin: 2,
      selDocumnet: 2
    };
  }

  setPlugin = index => {
    this.setState({ selPlugin: index });
    console.log(index);
  };
  setDocument = index => {
    this.setState({ selDocumnet: index });
    console.log(index);
  };
  render() {
    return (
      <div className="settings">
        <div className="setting__content">
          <h1> Settings</h1>
          <div className="firstList">
            <List>
              <h3>Plugins</h3>
              <Row gutter={24} className="plugins">
                <Col span={6} onClick={() => this.setPlugin(1)}>
                  <PluginBox
                    pluginLogo={
                      "https://www.pinclipart.com/picdir/middle/102-1024630_1blives-sap-idea-factory-conjunct-speaking-sap-logo.png"
                    }
                    pluginName={"SAP"}
                    pluginBoarder={this.state.selPlugin === 1 ? "blue" : "gray"}
                  />
                </Col>
                <Col span={6} onClick={() => this.setPlugin(2)}>
                  <PluginBox
                    pluginLogo={
                      "https://intuitconsultancy.com/wp-content/uploads/2019/02/zohobooks-logo.png"
                    }
                    pluginName={"Zoho Books"}
                    pluginBoarder={this.state.selPlugin === 2 ? "blue" : "gray"}
                  />
                </Col>
                <Col span={6} onClick={() => this.setPlugin(3)}>
                  <PluginBox
                    pluginLogo={
                      "https://mpng.pngfly.com/20180414/tde/kisspng-tally-solutions-tally-erp-9-enterprise-resource-pl-gst-5ad1fd7fb4d098.3269726715237113597406.jpg"
                    }
                    pluginName={"Tally"}
                    pluginBoarder={this.state.selPlugin === 3 ? "blue" : "gray"}
                  />
                </Col>
              </Row>
            </List>
          </div>

          <div className="secondList">
            <List>
              <h3>Document Template</h3>
              <Row gutter={24} className="documents">
                <Col span={6} onClick={() => this.setDocument(1)}>
                  <DocumentBox
                    documentImage={
                      "https://image.freepik.com/free-vector/vector-abstract-template-design-flyer-cover-with-turquoise-green-multilayer-stripes_2065-86.jpg"
                    }
                    documentBorder={
                      this.state.selDocumnet == 1 ? "blue" : "gray"
                    }
                    documentNumber={1}
                  />
                </Col>
                <Col span={6} onClick={() => this.setDocument(2)}>
                  <DocumentBox
                    documentImage={
                      "https://s.tmimgcdn.com/scr/49400/medical-ecommerce-business-prestashop-theme_49469-original.jpg"
                    }
                    documentBorder={
                      this.state.selDocumnet == 2 ? "blue" : "gray"
                    }
                    documentNumber={2}
                  />
                </Col>
                <Col span={6} onClick={() => this.setDocument(3)}>
                  <DocumentBox
                    documentImage={
                      "https://www.smartjobboard.com/wp-content/themes/sjb/images/Classic-desktop.png"
                    }
                    documentBorder={
                      this.state.selDocumnet == 3 ? "blue" : "gray"
                    }
                    documentNumber={3}
                  />
                </Col>
                <Col span={6} onClick={() => this.setDocument(4)}>
                  <DocumentBox
                    documentImage={
                      "https://previews.123rf.com/images/droidworks/droidworks1810/droidworks181000150/110945320-website-design-template-ecological-theme-vector-illustration-of-mobile-website-design-and-developmen.jpg"
                    }
                    documentBorder={
                      this.state.selDocumnet == 4 ? "blue" : "gray"
                    }
                    documentNumber={4}
                  />
                </Col>
              </Row>
            </List>
          </div>
          <div className="networkSetting">
            <h3>NETWORK SETTING</h3>
            <table>
              <tr>
                <td>Network</td>
                <td>ws://12.122.42.21:2131</td>
              </tr>
              <tr>
                <td>Version</td>
                <td>0.61</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>sandane limited</td>
              </tr>
              <tr>
                <td>Peers</td>
                <td>view peers info</td>
              </tr>
              <tr>
                <td>Node</td>
                <td>view Node info</td>
              </tr>
              <tr>
                <td>Contract Address</td>
                <td>view info</td>
              </tr>
            </table>
            <Button className="button" onClick={() => console.log("syncing")}>
              SYNC
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;

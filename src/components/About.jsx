import React, { Component } from "react";
import { Card } from "antd";
import Us from "./Us";
import Mision from "./Mision";
import Vision from "./Vision";

const tabList = [
  {
    key: "tab1",
    tab: "Nosotros",
  },
  {
    key: "tab2",
    tab: "Misión",
  },
  {
    key: "tab3",
    tab: "Visión",
  },
];

const contentList = {
  tab1: <Us />,
  tab2: <Mision />,
  tab3: <Vision />,
};

export default class About extends Component {
  state = {
    key: "tab1",
    noTitleKey: "app",
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };
  render() {
    return (
      <>
        <div className="about-box" id="acerca">
          <Card
            style={{ width: "100%" }}
            title="Acerca de"
            tabList={tabList}
            activeTabKey={this.state.key}
            onTabChange={(key) => {
              this.onTabChange(key, "key");
            }}
          >
            {contentList[this.state.key]}
          </Card>
        </div>
        <img className="han-img" src="/han.png" alt="vehiculo" />
      </>
    );
  }
}

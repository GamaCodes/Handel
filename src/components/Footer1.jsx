import React from "react";
import TweenOne from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Col } from "antd";
import { getChildrenToRender } from "./utils";
import { isImg } from "./utils";

class Footer extends React.Component {
  static defaultProps = {
    className: "footer1",
  };

  getLiChildren = (data) =>
    data.map((item, i) => {
      const { title, childWrapper, ...itemProps } = item;
      return (
        <Col key={i.toString()} {...itemProps} title={null} content={null}>
          <h2 {...title}>
            {typeof title.children === "string" &&
            title.children.match(isImg) ? (
              <img src={title.children} width="100%" alt="img" />
            ) : (
              title.children
            )}
          </h2>
          <div {...childWrapper}>
            {childWrapper.children.map(getChildrenToRender)}
          </div>
        </Col>
      );
    });

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;

    return (
      <div {...props} {...dataSource.wrapper}>
        <OverPack {...dataSource.OverPack}>
          <div className="footer-svg">
            <svg
              width="155"
              height="103"
              viewBox="0 0 155 103"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M136.672 -4.66402e-06L88.2024 92.4173H105.15L154.334 -4.66402e-06H136.672Z"
                fill="#FFF"
              />
              <path
                d="M42.1243 85.0033C39.5163 85.0033 37.3963 87.126 37.3963 89.73C37.3963 92.338 39.5163 94.4567 42.1243 94.4567C44.7323 94.4567 46.851 92.338 46.851 89.73C46.851 87.126 44.7323 85.0033 42.1243 85.0033ZM42.1243 102.563C35.0457 102.563 29.2883 96.81 29.2883 89.73C29.2883 82.6527 35.0457 76.894 42.1243 76.894C49.2017 76.894 54.959 82.6527 54.959 89.73C54.959 96.81 49.2017 102.563 42.1243 102.563Z"
                fill="#FFF"
              />
              <path
                d="M54.1333 51.7949H29.8333L40.816 33.1056H54.1333V51.7949ZM112.856 0.000239477H110.883H65.3973L56.748 9.72825V26.4829H34.5907L23.2413 49.1816L0 62.1522V92.4176H25.0893C24.9533 91.5362 24.8613 90.6362 24.8613 89.7136C24.8613 79.8656 32.8467 71.8776 42.696 71.8776C52.5467 71.8776 60.532 79.8656 60.532 89.7136C60.532 90.6362 60.4413 91.5362 60.3053 92.4176H62.4147H64.388H83.7653L132.235 0.000239477H112.856Z"
                fill="#FFF"
              />
              <path
                d="M110.402 92.4173H136.415V42.44L110.402 92.4173Z"
                fill="#FFF"
              />
            </svg>
          </div>

          <TweenOne
            animation={{ y: "+=30", opacity: 0, type: "from" }}
            key="copyright"
            {...dataSource.copyrightWrapper}
          >
            <div {...dataSource.copyrightPage}>
              <div {...dataSource.copyright}>
                {dataSource.copyright.children}
              </div>
            </div>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Footer;

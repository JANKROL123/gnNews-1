import React from "react";
import { Content } from "antd/es/layout/layout";
import { useEffect } from "react";
import Title from "antd/es/typography/Title";
import { Image } from "antd";
import topImage from "../images/top.jpg";
import siderImage from "../images/sider.jpg";
import countryImage from "../images/country.jpg";
import footerImage from "../images/footer.jpg";
import { Col, Row } from "antd";
function Home({ setArticlesNumber }) {
  useEffect(() => {
    setArticlesNumber(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Content id="homeContent">
      <Title level={1}>Welcome to gnNews</Title>
      <div>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={24} lg={24} xl={12}>
            <Title level={2}>Header</Title>
            <Image
              src={topImage}
              width={500}
              height={300}
              style={{ border: "2px solid black" }}
            />
            <div className="homeList">
              <p>
                <strong>Logo: </strong> It is logo of gnNews app and link which
                redirects you to this homepage.
              </p>
              <p>
                <strong>Article display switch: </strong>You can choose a
                display of your articles as tiles or list.
              </p>
              <p>
                <strong>Popup button: </strong>You will see message where I have
                described what did I like the most while building this app and
                what was the biggest problem for me.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={12}>
            <Title level={2}>Side menu</Title>
            <Image
              src={siderImage}
              width={500}
              height={300}
              style={{ border: "2px solid black" }}
            />
            <div className="homeList">
              <p>
                <strong>Country list: </strong> You can choose news downloaded
                from{" "}
                <a
                  href="https://newscatcherapi.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Newscatcher API
                </a>{" "}
                from 54 countries. Newscatcher offers you real-time updated news
                from all world.
              </p>
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={24} lg={24} xl={12}>
            <Title level={2}>Country news</Title>
            <Image
              src={countryImage}
              width={500}
              height={300}
              style={{ border: "2px solid black" }}
            />
            <div className="homeList">
              <p>
                <strong>Country news: </strong> You receive 50 articles from
                chosen country. They will be paginated and displayed as grid or
                list.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={12}>
            <Title level={2}>Footer</Title>
            <Image
              src={footerImage}
              width={500}
              height={300}
              style={{ border: "2px solid black" }}
            />
            <div className="homeList">
              <p>
                <strong>Available articles: </strong> Number of available
                articles in current country.
              </p>
              <p>
                <strong>Authors' rights</strong>
              </p>
              <p>
                <strong>Time</strong> Clock updated in real time.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Content>
  );
}
export default Home;

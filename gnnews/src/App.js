import React from "react";
import isoCodes from "./countries/iso-codes";
import { Link, Routes, Route } from "react-router-dom";
import Country from "./components/Country";
import Home from "./components/Home";
import { Layout, Menu, Switch } from "antd";
import { Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { changeDisplay } from "./redux/listDisplaySlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Title from "antd/es/typography/Title";
function App() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, []);

  const dispatch = useDispatch();
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const menuItems = Array.from(isoCodes).map((n) =>
    getItem(
      n[1],
      n[0],
      <Link to={`/${n[0]}`}>
        <img
          width={20}
          height={15}
          alt={n[1]}
          src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${n[0].toUpperCase()}.svg`}
        />
      </Link>
    )
  );
  return (
    <Layout className="App">
      <Header>
        <Link to="/">
          <div id="logo">gnNews</div>
        </Link>
        <div id="switchDisplay">
          <span>Choose articles display</span>
          <Switch
            checkedChildren="tiles"
            unCheckedChildren="tiles"
            onChange={() => dispatch(changeDisplay())}
          />
        </div>
      </Header>
      <Layout style={{ backgroundColor: "#8dcff9" }}>
        <Sider>
          <Menu
            mode="inline"
            theme="dark"
            items={menuItems}
            style={{ height: 700, overflowY: "scroll" }}
            scrollbar={{
              trackStyle: { backgroundColor: "#f1f1f1" },
              thumbStyle: { backgroundColor: "#1890ff", borderRadius: "2px" },
            }}
          />
        </Sider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:country" element={<Country />} />
        </Routes>
      </Layout>
      <Footer>
        <Title level={1} style={{ color: "white" }}>
          {date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()}
        </Title>
        <div>Articles published</div>
        <div>&copy; gnNews 2023</div>
      </Footer>
    </Layout>
  );
}

export default App;

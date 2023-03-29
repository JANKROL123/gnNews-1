import React from "react";
import isoCodes from "./countries/iso-codes";
import { Link, Routes, Route } from "react-router-dom";
import Country from "./components/Country";
import Home from "./components/Home";
import { Layout } from "antd";
import { Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
function App() {
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
      </Header>
      <Layout>
        <Sider style={{ overflow: "auto" }}>
          <Menu mode="inline" theme="dark" items={menuItems} />
        </Sider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:country" element={<Country />} />
        </Routes>
      </Layout>
      <Footer>
        <div>Time</div>
        <div>Articles published</div>
        <div>&copy; gnNews 2023</div>
      </Footer>
    </Layout>
  );
}

export default App;

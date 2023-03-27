import React from "react";
import isoCodes from "./countries/iso-codes";
import { hasFlag } from "country-flag-icons";
import { Routes, Route } from "react-router-dom";
import Country from "./components/Country";
import Home from "./components/Home";
import { Layout } from "antd";
import { Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
function App() {
  return (
    <Layout>
      <Header>gnNews</Header>
      <Layout>
        <Sider>
          {Array.from(isoCodes).map((n) => (
            <div key={n[0]}>
              <p>{n[1]}</p>
              {hasFlag(n[0].toUpperCase()) ? (
                <img
                  width={25}
                  height={15}
                  alt={n[1]}
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${n[0].toUpperCase()}.svg`}
                />
              ) : null}
            </div>
          ))}
        </Sider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:country" element={<Country />} />
        </Routes>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;

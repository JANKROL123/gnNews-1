import React from "react";
import { Content } from "antd/es/layout/layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import isoCodes from "../countries/iso-codes";
import Error from "./Error";
import Loading from "./Loading";
import Title from "antd/es/typography/Title";
import { List } from "antd";
import Article from "./Article";
function Country() {
  const params = useParams();
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setError(null);
    setNews([]);
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://api.newscatcherapi.com/v2/latest_headlines",
      params: { countries: params.country.toUpperCase() },
      headers: {
        "x-api-key": "bm85hyqV4lSOHdssYQJ-9o4Tp_8-fODHO7xPlqhGMXI",
      },
    };
    axios
      .request(options)
      .then((res) => setNews(res.data.articles))
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, [params]);
  return (
    <div className="country">
      {news.length > 0 ? (
        <Content>
          <Title level={1}>Top news from {isoCodes.get(params.country)}</Title>
          <List itemLayout="vertical">
            {news.map((article) => (
              <List.Item key={article._id}>
                <Article data={article} />
              </List.Item>
            ))}
          </List>
        </Content>
      ) : null}
      {error ? <Error msg={error} /> : null}
      {loading ? <Loading /> : null}
    </div>
  );
}
export default Country;

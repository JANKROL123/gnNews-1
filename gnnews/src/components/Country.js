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
    axios
      .get(
        `https://newsdata.io/api/1/news?country=${params.country}&apikey=pub_193677db68a25058827e049d8ff3731f8d3c4`
      )
      .then((res) => setNews(res.data.results))
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
            {news.map((article, idx) => (
              <List.Item key={idx}>
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

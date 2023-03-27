import React from "react";
import { Content } from "antd/es/layout/layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import isoCodes from "../countries/iso-codes";
import Error from "./Error";
import Loading from "./Loading";
import Title from "antd/es/typography/Title";
function Country() {
  const params = useParams();
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${params.country}&apiKey=b77bf23d4ff14487a10d34a0ce1f4218`
      )
      .then((res) => setNews(res.data.articles))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      {news.length > 0 ? (
        <Content>
          <Title level={1}>Top news from {isoCodes.get(params.country)}</Title>
          {news.map((article, idx) => (
            <h3 key={idx}>{article.title}</h3>
          ))}
        </Content>
      ) : null}
      {error ? <Error msg={error} /> : null}
      {loading ? <Loading /> : null}
    </div>
  );
}
export default Country;

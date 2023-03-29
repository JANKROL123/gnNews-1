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
import { useDispatch, useSelector } from "react-redux";
import { addArticles } from "../redux/articlesSlice";
function Country() {
  const params = useParams();
  const { isList } = useSelector((state) => state.listDisplay);
  const myArticles = useSelector((state) => state.articles).myArticles.filter(
    (elem) => elem.code === params.country
  );
  const dispatch = useDispatch();
  const [country, setCountry] = useState(params.country);
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setCountry(params.country);
  }, [params]);
  useEffect(() => {
    setError(null);
    setNews([]);
    setLoading(true);
    if (myArticles.length === 0) {
      axios
        .get(
          `https://newsdata.io/api/1/news?country=${params.country}&apikey=pub_193677db68a25058827e049d8ff3731f8d3c4`
        )
        .then((res) => {
          const data = res.data.results.map((elem) => ({
            ...elem,
            code: params.country,
          }));
          setNews(data);
          dispatch(addArticles(data));
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => setLoading(false));
    } else {
      setNews(myArticles);
      setLoading(false);
    }
  }, [country]);
  return (
    <div className="country">
      {news.length > 0 ? (
        <Content>
          <Title level={1}>Top news from {isoCodes.get(params.country)}</Title>
          <List
            grid={!isList ? { gutter: 16, column: 4 } : null}
            itemLayout={isList ? "vertical" : "horizontal"}
            dataSource={news}
            renderItem={(article) => (
              <List.Item>
                <Article data={article} />
              </List.Item>
            )}
          />
        </Content>
      ) : null}
      {error ? <Error msg={error} /> : null}
      {loading ? <Loading /> : null}
    </div>
  );
}
export default Country;

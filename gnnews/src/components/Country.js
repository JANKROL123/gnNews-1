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
import api_key from "../api_key/api_key";
function Country({ setArticlesNumber }) {
  const params = useParams();
  const { isList } = useSelector((state) => state.listDisplay);
  const myArticles = useSelector((state) => state.articles).myArticles.filter(
    (elem) => elem.country.toLowerCase() === params.country
  );
  const dispatch = useDispatch();
  const [country, setCountry] = useState(params.country);
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setCountry(params.country);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  useEffect(() => {
    setCurrentPage(1);
    setError(null);
    setNews([]);
    setLoading(true);
    if (myArticles.length === 0) {
      const options = {
        method: "GET",
        url: "https://api.newscatcherapi.com/v2/latest_headlines",
        params: { countries: params.country.toUpperCase() },
        headers: {
          "x-api-key": api_key,
        },
      };
      axios
        .request(options)
        .then((res) => {
          setNews(res.data.articles);
          dispatch(addArticles(res.data.articles));
          setArticlesNumber(res.data.articles.length);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => setLoading(false));
    } else {
      setNews(myArticles);
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);
  return (
    <div
      className="country"
      style={
        error || loading
          ? {
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }
          : null
      }
    >
      {news.length > 0 ? (
        <Content>
          <Title style={{ textAlign: "center" }} level={1}>
            Top news from {isoCodes.get(params.country)}
          </Title>
          <List
            dataSource={news}
            pagination={{
              pageSize: isList ? 4 : 6,
              current: currentPage,
              total: news.length,
              onChange: (page) => {
                setCurrentPage(page);
              },
            }}
            grid={
              !isList ? { gutter: 16, xl: 3, lg: 2, md: 1, sm: 1, xs: 1 } : null
            }
            itemLayout={isList ? "vertical" : "horizontal"}
            renderItem={(article) => (
              <List.Item>
                <Article data={article} style={{ border: "5px solid red" }} />
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

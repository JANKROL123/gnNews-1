import React from "react";
import { Content } from "antd/es/layout/layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import isoCodes from "../countries/iso-codes";
import Error from "./Error";
import Loading from "./Loading";
import Title from "antd/es/typography/Title";
import { List, Pagination } from "antd";
import Article from "./Article";
import { useDispatch, useSelector } from "react-redux";
import { addArticles } from "../redux/articlesSlice";
import api_key from "../api_key/api_key";
function Country() {
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

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCountry(params.country);
  }, [params]);
  useEffect(() => {
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
          console.log(res.data.articles[0]);
        })
        .catch((err) => {
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
          <Title style={{ textAlign: "center" }} level={1}>
            Top news from {isoCodes.get(params.country)}
          </Title>
          <>
            <List
              pagination={isList ? { pageSize: 4 } : null}
              grid={!isList ? { gutter: 16, md: 1, lg: 2, xl: 3 } : null}
              itemLayout={isList ? "vertical" : "horizontal"}
              dataSource={news}
              renderItem={(article) => (
                <List.Item>
                  <Article data={article} style={{ border: "5px solid red" }} />
                </List.Item>
              )}
            />
            {!isList ? (
              <Pagination
                current={currentPage}
                pageSize={6}
                total={news.length}
                onChange={() => onPageChange()}
              />
            ) : null}
          </>
        </Content>
      ) : null}
      {error ? <Error msg={error} /> : null}
      {loading ? <Loading /> : null}
    </div>
  );
}
export default Country;

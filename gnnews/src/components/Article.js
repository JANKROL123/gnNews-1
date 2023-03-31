import React from "react";
import { Card, Image, Popover } from "antd";
import { useSelector } from "react-redux";
function Article({ data }) {
  const { isList } = useSelector((state) => state.listDisplay);
  return (
    <Popover
      overlayStyle={{
        width: "40vw",
        backgroundColor: "3ba1ff",
      }}
      title={`By: ${data.author}`}
      content={
        <div>
          <div>{data.summary}</div>
          <strong>Visit article: </strong>
          <a target="_blank" rel="noreferrer" href={data.link}>
            {data.clean_url}
          </a>
        </div>
      }
    >
      <Card
        className="article"
        style={{
          height: isList ? "20vh" : "50vh",
          width: isList ? "70vw" : "auto",
          backgroundColor: "#b6e3fb",
          overflow: "hidden",
        }}
      >
        <h1 style={{ whiteSpace: "normal" }}>{data.title}</h1>
        <div>
          <i>Source: {data.rights}</i>
        </div>
        <div>
          <i>Published: {data.published_date.slice(0, 10)}</i>
        </div>
        {!isList && data.media ? <Image src={data.media} /> : null}
      </Card>
    </Popover>
  );
}

export default Article;

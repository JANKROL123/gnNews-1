import React from "react";
import { Card } from "antd";
import { Popover } from "antd";
function Article(data) {
  return (
    <Popover
      title={`By: ${
        data.data.creator.length > 0 ? data.data.creator[0] : "Unknown"
      }`}
      content={
        <div>
          <div>{data.data.description}</div>
          <strong>Visit article: </strong>
          <a target="_blank" href={data.data.link}>
            Read article
          </a>
        </div>
      }
    >
      <Card className="article" title={data.data.title}>
        <div>
          <i>Source: {data.data.source_id}</i>
        </div>
        <div>
          <i>Published: {data.data.pubDate.slice(0, 10)}</i>
        </div>
      </Card>
    </Popover>
  );
}
export default Article;

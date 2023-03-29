import React from "react";
import { Card } from "antd";
import { Popover } from "antd";
import { Image } from "antd";
import { useSelector } from "react-redux";
function Article({ data }) {
  const { isList } = useSelector((state) => state.listDisplay);
  return (
    <Popover
      title={`By: ${
        data.creator && data.creator.length > 0 ? data.creator[0] : "Unknown"
      }`}
      content={
        <div>
          <div>{data.description}</div>
          <strong>Visit article: </strong>
          <a target="_blank" rel="noreferrer" href={data.link}>
            link
          </a>
        </div>
      }
    >
      <Card className="article" title={data.title}>
        <div>
          <i>Source: {data.source_id}</i>
        </div>
        <div>
          <i>Published: {data.pubDate.slice(0, 10)}</i>
        </div>
        {!isList && data.image_url ? <Image src={data.image_url} /> : null}
      </Card>
    </Popover>
  );
}

export default Article;

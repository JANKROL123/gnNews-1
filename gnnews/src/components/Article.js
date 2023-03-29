import React from "react";
import { Card } from "antd";
import { Popover } from "antd";
function Article(data) {
  return (
    <Popover title={`By:`} content={<a>Visit artcile</a>}>
      <Card className="article" title={data.data.title}>
        <div>
          <i>Source: {data.data.rights}</i>
        </div>
        <div>
          <i>Published: {data.data.published_date.slice(0, 10)}</i>
        </div>
      </Card>
    </Popover>
  );
}
export default Article;

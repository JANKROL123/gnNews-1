import React from "react";
import { Result } from "antd";
function Error({ msg }) {
  return <Result status="error" title="Error" subTitle={msg} />;
}
export default Error;

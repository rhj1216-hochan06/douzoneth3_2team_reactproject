import { Detail } from "../components/detail/Detail.js";
import React, { useState } from "react";

const DetailPage = ({convertPrice}) => {
  return <Detail convertPrice={convertPrice} />;
};

export default DetailPage;

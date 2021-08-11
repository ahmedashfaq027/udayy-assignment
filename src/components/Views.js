import React from "react";
import { useSelector } from "react-redux";
import { selectUrl1, selectUrl2 } from "../features/urlSlice";
import View from "./View";
import "./Views.css";

function Views() {
  const url1 = useSelector(selectUrl1);
  const url2 = useSelector(selectUrl2);

  return (
    <div className="views">
      <View src={url1} idx={1} />
      <View src={url2} idx={2} />
    </div>
  );
}

export default Views;

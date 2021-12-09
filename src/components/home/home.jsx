import React from "react";
import Chart from "../charts/Chart";
import FeatureInfo from "../FeaturedInfo/FeatureInfo";
import "./home.css";
import { DummyData } from "../../dummyData";
import WidgetSm from "../widget-sm/WidgetSm";
import WidgetLg from "./widget-lg/widget-lg";

const Home = () => {
  return (
    <div className="home">
      
      <FeatureInfo />
      <Chart data={DummyData} title="User Analytic" grid dataKey="user" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;

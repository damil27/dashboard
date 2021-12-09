import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import React from "react";
import "./featureInfo.css";

const FeatureInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featuredTitle"> Revenue </div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,782</span>
          <span className="featuredMoneyRate">
            $-12.2 <ArrowDownward className="featuredIcon negative" />{" "}
          </span>  
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <div className="featuredTitle"> Cost </div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,782</span>
          <span className="featuredMoneyRate">
            $ -12.2 <ArrowUpward className="featuredIcon positive" />{" "}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <div className="featuredTitle"> Sales </div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,782</span>
          <span className="featuredMoneyRate">
            $ +2.2 <ArrowDownward className="featuredIcon negative" />{" "}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeatureInfo;

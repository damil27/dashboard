import "./product.css";
import { Link } from "react-router-dom";
import Chart from "../../charts/Chart";
import { ProductData } from "../../../dummyData";
import { Publish } from "@mui/icons-material";

const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle"> Poduct </h1>
        <Link to="/newProduct">
          <button className="productAddBtn">create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={ProductData}
            dataKey="Sales"
            title=" Sales Performance"
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://images.pexels.com/photos/220357/pexels-photo-220357.jpeg?cs=srgb&dl=pexels-hitarth-jadhav-220357.jpg&fm=jpg"
              alt=""
              className="productInfoImage"
            />
            <span className="productInfoName">KeyBoard</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id</span>
              <span className="productInfoKey">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Sale</span>
              <span className="productInfoKey">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">In-Stock</span>
              <span className="productInfoKey">NO</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Active</span>
              <span className="productInfoKey">Yes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label htmlFor="">Product Name</label>
            <input type="text" placeholder="product Name" />
            <label htmlFor="">In-Stock</label>
            <select name="inStoke" id="inStoke">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label htmlFor="Active">Active</label>
            <select name="Active" id="Active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://images.pexels.com/photos/1266982/pexels-photo-1266982.jpeg?cs=srgb&dl=pexels-lisa-1266982.jpg&fm=jpg"
                alt=""
                className="productUploadImage"
              />
              <label htmlFor="file">
                <Publish className="productUploadIcon" />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;

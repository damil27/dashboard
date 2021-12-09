import "./newProduct.css";

const NewProduct = () => {
  return (
    <div className="newProduct">
      <h1 className="newproductTitle"> New User</h1>
      <form action="" className="newproductForm">
        <div className="productFormItem">
          <label> Product Name </label>
          <input type="text" placeholder="Product" />
        </div>

        <div className="productFormItem">
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

        <div className="productBtn">
          <button className="newProductButton"> Create</button>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;

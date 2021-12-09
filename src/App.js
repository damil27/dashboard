import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/topbar";
import "./App.css";
import Home from "./components/home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./components/pages/UserList/UserList";
import User from "./components/pages/user/user";
import NewUser from "./components/pages/New User/NewUser";
import ProductList from "./components/pages/ProductList/ProductList";
import Product from "./components/pages/Product/Product";
import NewProduct from "./components/pages/NewProduct/NewProduct";
function App() {
  return (
    <Router className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:Id">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/product/:Id">
            <Product />
          </Route>
          <Route path="/newProduct">
            <NewProduct />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

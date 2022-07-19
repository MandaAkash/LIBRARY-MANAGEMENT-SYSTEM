import React from "react";
import Main from "./component.js/Main";
import { BrowserRouter,Routes,Route } from "react-router-dom";
//import ProductList from "./component.js/ProductList"
import './App.css'
import Footer from "./component.js/Footer";
import Contact from './component.js/Contactus';
import Contactus from "./component.js/Contactus";
import Ml from "./component.js/MachineLearning"
import Service from "./component.js/Service"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Registration from "./component.js/Registration";
import Login from "./component.js/Login";
import Register from "./component.js/Register";
import Userprofile from "./component.js/Userprofile";
import Cart from "./component.js/Cart";
import Products from "./component.js/ViewProducts";
import { useSelector } from "react-redux";
import { clearLoginStatus } from "./slices/userSlice.js";
import { useDispatch } from "react-redux";
import Userdashboard from "./component.js/Userdashboard";
import { useNavigate ,Navigate} from "react-router-dom";
function App(){
  /*const productlist=[
    {
      price:2000,
      name:"Backend",
    },
    {
      price:3000,
      name:"Frontend",
    }
  ]*/
  let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
    (state) => state.user
  );
  //get dispathc function
  let dispath = useDispatch();

  //get navigate function
  let navigate = useNavigate();

  //logout user
  const userLogout = () => {
    localStorage.clear();
    dispath(clearLoginStatus());
    navigate("/login");
  };
  return(
    
   <div>
     {isSuccess !== true ? (
                <>
     <nav className="navbar navbar-expand-lg navbar-darkk bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/main">LIBRARY MANAGER</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/main">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Aboutus</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 login/signup
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/login">Login</a></li>
                  <li><a className="dropdown-item" href="/registration">Signup</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search here to learn" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Explore</button>
            </form>
          </div>
        </div>
      </nav>
      </>) : (
                <>
                  {/* This dropdown is visible only when a user is logged in */}
                  <NavDropdown
                    title={userObj.username}
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item>Change password</NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={userLogout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
     <Routes>
     <Route path="/main" element={<Main />}/> 
      <Route path="/contact" element={<Contactus/>}/> 
      <Route path="/Ml" element={<Ml/>}/>
      <Route path="/services" element={<Service/>}/>
      <Route path="/register" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/registration" element={<Register/>}/>
      <Route path="/userdashboard" element={<Userdashboard />}>
          <Route path="profile" element={<Userprofile />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />
          {/* Navigating to profile when child path is empty */}
          <Route path="" element={<Navigate to="profile" replace={true} />} /></Route>
    </Routes>
    <Footer />
     </div>
  );
}
export default App;
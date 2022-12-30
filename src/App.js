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
import UserNavbar from "./component.js/UserNavbar"
import FS from "./component.js/FS";
import Checkout from "./component.js/Checkout";
import Aboutus from "./component.js/Aboutus"
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
     <Routes>

     <Route path="/" element={<Main />}/> 
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
      <Route path="/usernav" element={<UserNavbar/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
       <Route path="/aboutus" element={<Aboutus/>}/>
    </Routes>
     </div>
  );
}
export default App;
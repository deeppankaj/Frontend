import { Route,Routes, useLocation } from "react-router-dom";
import { Home,Doctor,Shop,Cart,Profile } from "./Pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";
import PatientPage from "./Pages/Pateint";
import MiniFooter from "./components/MiniFooter";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "./Redux-toolkit/Slices/UserSlice";
import ProductDetail from "./Pages/ProductDetail";
import { fetchProduct } from "./Redux-toolkit/Slices/ShopSlice";


function App() {
  const pathname = useLocation().pathname.split("/")[1];
  const dispatch = useDispatch();
  const patient  = pathname.includes("patient")
  const doctor  = pathname.includes("doctor")
  useEffect(()=>{
    dispatch(fetchUser())
    dispatch(fetchProduct())
  },[])
  const data = useSelector((state) => state.User.data);
  return (
    <>
    <ToastContainer/>
    <Header user={data}/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/doctor/*" element={<Doctor/>} /> 
      <Route path="/shop" element={<Shop/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/patient/*" element={<PatientPage/>} />   
      <Route path="/shop/:id" element={<ProductDetail/>} />   
    </Routes>
    {(patient || doctor) ?(<><MiniFooter/></>):(<><Footer/></>)}
    </>
  );
}

export default App;

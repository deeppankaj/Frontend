import { Route,Routes, useLocation } from "react-router-dom";
import { Home,Doctor,Shop,Cart,Profile, Admin ,SignUp,Login,PatientPage,ProductDetail,Contact} from "./Pages";
import { Header ,Footer,MiniFooter } from "./components";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchUser } from "./Redux-toolkit/Slices/UserSlice";
import { fetchProduct } from "./Redux-toolkit/Slices/ShopSlice";
import Loader from "./components/loading/Loading";
import { setLoading } from "./components/loading/loadingSlice";


function App() {
  const pathname = useLocation().pathname.split("/")[1];
  const dispatch = useDispatch();
  const patient  = pathname.includes("patient")
  const doctor  = pathname.includes("doctor")
  const admin  = pathname.includes("admin")
  const loading = useSelector((state) => state.Loader);
  useEffect(()=>{
    dispatch(fetchUser())
    dispatch(fetchProduct())
    dispatch(setLoading(false))
  },[dispatch])
  const data = useSelector((state) => state.User.data);
  return (
    <>
    <ToastContainer/>
    {loading && <Loader/>}
    <Header user={data}/>
    {!loading&&(<>
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
      <Route path="/admin/*" element={<Admin/>} />   
      <Route path="/shop/:id" element={<ProductDetail/>} />   
    </Routes>
    {(patient || doctor || admin) ?(<><MiniFooter/></>):(<><Footer/></>)}
    </>)}
    </>
  );
}

export default App;

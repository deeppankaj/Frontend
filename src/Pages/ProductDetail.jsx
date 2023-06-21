import React from "react";
import { Link, useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Carousel from "react-bootstrap/Carousel";
import Carousel2 from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux";
import { TbCurrencyRupee } from "react-icons/tb";
import { useState } from "react";
// import { useEffect } from "react";
import axios from "axios";
import ReactStars from "react-stars";
import { addTocart } from "../Redux-toolkit/Slices/CartSlice";
import { toast } from "react-toastify";



const ProductDetail = () => {
  const productName = useLocation().pathname.split("/")[2];
  const products = useSelector(state=>state.Shop.data);
  const user = useSelector(state=>state.User.data);
  const dispatch = useDispatch();


  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 4 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 4 },
  ];
  const [product, setProduct] = useState({});
  const getProduct = async()=>{
    const data = await axios(`http://localhost:8000/shop/get?name=${productName}`)
    setProduct(data.data)
  }
  getProduct()
  // useEffect(()=>{
  // },[productName])

  let productval = {
    _id:product?._id,
    name:product?.name,
    price:product?.price,
    rating:product?.rating,
    image:product?.image,
    qty: 1,
  }
  const [cartObj, setCartObj] = useState(productval)

  const handleAddtocart = () => {
    if (user?.email) {
      toast.success("Product is added to cart !");

      dispatch(addTocart(cartObj));
    } else {
      toast.error("You need to login first to add product in cart");
    }
  };

  return (
    <div>
      <section
        className=" d-table w-100 bg-light py-5 mb-5"
        style={{ borderRadius: "0% 0% 52% 48% / 10% 10% 12% 11% " }}
      >
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h3 className="sub-title mb-4">Plastic Medicine Box</h3>
                <p className="para-desc mx-auto text-muted">
                  Great doctor if you need your family member to get effective
                  immediate assistance, emergency treatment or a simple
                  consultation.
                </p>

                <nav aria-label="breadcrumb" className="d-inline-block mt-3">
                  <ul className="breadcrumb bg-light rounded mb-0 bg-transparent">
                    <li className="breadcrumb-item">
                      <a href="index.html">Doctris</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="pharmacy.html">Pharmacy</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Product Detail
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {product?<div className="container my-5 py-5">
        <div className="row align-items-center">
          <div className="col-md-5">
            <Carousel controls={false} indicators={false} interval={400}>
              {product?.image?.map((url, i) => {
                return (
                  <Carousel.Item key={i}>
                    <img
                      className="container-fluid"
                      src={url}
                      alt="product-img"
                      style={{ maxHeight: "600px" }}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>

          <div className="col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="section-title ms-md-4">
              <h4 className="title">{product?.name}</h4>
              <h5 className="text-muted">{product?.price} <TbCurrencyRupee /></h5>
              <ul className="list-unstyled text-warning h5 mb-0">
              <ReactStars
                count={5}
                value={product?.rating}
                color2="#f1b561"
                color1="grey"
              />
                <li className="list-inline-item me-2 h6 text-muted">
                  (20 Rating)
                </li>
              </ul>

              <h5 className="mt-4 py-2">Overview:</h5>
              <p className="text-muted">
                {product?.description}
              </p>

              <div className="d-flex shop-list align-items-center">
                <h6 className="mb-0">Quantity:</h6>
                <div className="d-flex gap-2 ms-3 ">
                  <button
                    onClick={(e) => {if(cartObj.qty>1){
                      setCartObj({...cartObj , qty:cartObj.qty-1})
                    }}}
                    className="btn btn-icon btn-primary minus"
                  >
                    -
                  </button>
                  <p className="btn btn-icon btn-primary qty-btn mb-0">{cartObj.qty}</p>
                  <button
                    onClick={(e) => {setCartObj({...cartObj , qty:cartObj.qty+1})}}
                    className="btn btn-icon btn-primary plus"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mt-4 pt-2 d-flex gap-2">
                <Link to={"/shop"} className="btn btn-primary">
                  Shop Now
                </Link>
                <button className=" btn bg-soft-primary" onClick={handleAddtocart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>:<div className="d-flex flex-column align-items-center mb-5">
      <h4 className="text-center my-5">Product not found ! <br /> Go back to shop</h4>
      <button className="btn bg-soft-success">Shop</button>
        </div>}
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <h5 className="mb-0">Related Products:</h5>
          </div>
        </div>
        <Carousel2
          enableAutoPlay={true}
          showArrows={false}
          breakPoints={breakPoints}
          isInfinity
        >
          {products.map((product, i) => {
            return (
              
                <div className="m-2" key={i}>
                  <ProductCard
                    product={product}
                    slider={true}
                    className="border"
                  />
                </div>
              
            );
          })}
        </Carousel2>
      </div>
    </div>
  );
};

export default ProductDetail;

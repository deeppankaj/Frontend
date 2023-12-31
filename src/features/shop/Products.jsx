import React from "react";
import ProductCard from "../../components/ProductCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Products = () => {
  const products = useSelector(state=>state.Shop.data);
  const latestProduct = [...products].reverse().slice(0, 8);

  return (
    <>
      <div className="container pt-4">
        <div className="row">
          <div className="col-12">
            <h5 className="mb-0">Most Viewed Products</h5>
          </div>
          <p
            className="badge bg-soft-primary ms-3 mt-2"
            style={{ width: "80px" }}
          >
            Featured
          </p>
        </div>

        <div className="row">
          {products &&
            products.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
        </div>
      </div>
      

      <div className="container mt-100 ">
        <div
          className="py-5 px-5 rounded shadow"
          style={{
            background:
              "url('https://shreethemes.in/doctris/layouts/assets/images/pharmacy/cta.jpg') center center",
          }}
        >
          <div className="row my-lg-5">
            <div className="col-lg-12">
              <div className="section-title">
                <h1 className="title mb-4">
                  Clinical Equipments <br /> Stellar Price
                </h1>
                <p className="para-desc mb-0">
                  Great doctor if you need your family member to get effective
                  immediate assistance, emergency treatment, or a simple
                  consultation.
                </p>

                <div className="mt-4 pt-2">
                  <Link to={"/shop"} className="btn btn-primary">
                    Shop now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-100 pt-4">
        <div className="row">
          <div className="col-12">
            <h5 className="mb-0">Popular Products</h5>
          </div>
          <p
            className="badge bg-soft-primary ms-3 mt-2"
            style={{ width: "80px" }}
          >
            Popular
          </p>
        </div>

        <div className="row">
          {latestProduct &&
            latestProduct.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
        </div>
      </div>
      <div className="container mt-100 pt-4">
        <div className="row">
          <div className="col-12">
            <h5 className="mb-0">Recent Products</h5>
          </div>
        </div>

        <div className="row">
          {latestProduct &&
            latestProduct.map((product) => {
              return <ProductCard product={product} key={product._id} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Products;

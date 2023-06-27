import React from "react";
import { BiSearch } from "react-icons/bi";
import { motion } from "framer-motion";
const FindDoctorSection = () => {
  return (
    <section     
     className="hero pb-0 d-table w-100">
      <div className="container">
        <div 
        
        className="row mt-5 mt-sm-0 align-items-center">
          <motion.div
          initial={{ x: -700 }} 
          animate={{x:0 ,scale:1.02}}
          transition={{delay:0.1,duration:1}}
          className="col-md-6">
            <div className="heading-title">
              <h2 className="heading mb-3 h1 " style={{ fontWeight: "900" }}>
                Find Best Doctor
              </h2>
              <p className="para-desc text-muted mb-0">
                Great doctor if you need your family member to get immediate
                assistance, emergency treatment or a simple consultation.
              </p>
            </div>
            <div className="search-form mt-4 mx-2">
              <form className="ms-0" style={{ mixWidth: "550px" }}>
                <div className="mb-2 border rounded-pill d-flex">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="rounded-pill ml-2 border-0 col-12"
                    required
                    placeholder="    Doctor name..."
                  />
                  <button
                    type="submit"
                    className="btn border flex gap-2 rounded-pill btn-primary py-2"
                  >
                    <BiSearch /> Search
                  </button>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p className="text-muted mb-0">
                      <b>Note:</b> Please search best doctors here,
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
          <motion.div 
          initial={{ x: 700}} 
          animate={{x:0 }}
          whileHover={{scale:1.06}}
          transition={{delay:0.1,duration:1}}
          className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 d-flex align-items-center" >
            <img src="https://shreethemes.in/doctris/layouts/assets/images/hero.png" className="img-fluid" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FindDoctorSection;

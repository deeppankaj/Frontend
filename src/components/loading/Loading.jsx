import React from 'react';
import { Grid } from 'react-loader-spinner'


const Loader = () => {
  return (
    <div
            className="position-fixed w-100 d-flex justify-content-center align-items-center"
            style={{
              zIndex: "999",
              left: "0",
              background: "#00000030",
              height: "100vh",
              top: "0",
            }}
          >
            <Grid
              height="80"
              width="80"
              color="blue"
              ariaLabel="grid-loading"
              radius="12.5"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
  )
}

export default Loader 
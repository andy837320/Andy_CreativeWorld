import React, { useState } from "react";
import data from "./data";

const Home = () => {
  const [noOfElement, setNoOfElement] = useState(4);

  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement);
  };

  const slice = data.cardData.slice(0, noOfElement);
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        {slice.map((item, index) => {
          return (
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 mt-4 ">
              <div className="card p-0 overflow-hidden h-100 shadow ">
                <img src={item.img} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title"> {item.title}</h5>
                  <p className="card-text"> {item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="btn btn-primary btn-lg mt-2  d-block w-100"
        onClick={() => loadMore()}
        cursor-pointer
      >
        Load More
      </button>
    </section>
  );
};

export default Home;

import React from 'react'

const Icecreams = () => {
  return (
    <div>
      <div className="container-fluid text-center text_padding">
    <div className="container">
        <div className="col-sm-12 text-center fw-bold">
          <h3>Icecreams Products</h3>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-3 col-6">
            <div className="card rounded-3">
              <div className="view overlay">
                <img src= {require("../assets/images/vanilla-icecream.jpg")} className="card-img-top img-fluid rounded-3" alt="img"/>
                <a href="#">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

          
              <div className="card-body">
                <h4 className="card-title">Vanilla Icecream</h4>
                <p className="card-text fw-bold product_pricing">₹30</p>
                <a href="#!" className="btn add-to-cart-button">Add to Cart</a>
              </div>

            </div>
          </div>

         
          <div className="col-lg-3 col-md-3 col-6">
            <div className="card rounded-3">
              <div className="view overlay">
                <img src= {require("../assets/images/strawberry-icecream.jpg")} className="card-img-top rounded-3" alt="img"/>
                <a href="#">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              <div className="card-body">
                <h4 className="card-title">Strawberry Icecream</h4>
                <p className="card-text fw-bold product_pricing">₹30</p>
                <a href="#" className="btn add-to-cart-button">Add to Cart</a>
              </div>

            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-6">
            <div className="card rounded-3">
              <div className="view overlay">
                <img src= {require("../assets/images/chocolate-icecream.jpg")} className="card-img-top rounded-3" alt=""/>
                <a href="#">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              <div className="card-body">
                <h4 className="card-title">Chocolate Icecream</h4>
                <p className="card-text fw-bold product_pricing">₹50</p>
                <a href="#" className="btn add-to-cart-button">Add to Cart</a>
              </div>
            </div>
          </div>


          <div className="col-lg-3 col-md-3 col-6">
            <div className="card rounded-3">
              <div className="view overlay">
                <img src= {require("../assets/images/mango-icecream.jpg")} className="card-img-top rounded-3" alt="img"/>
                <a href="#">
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>

              
              <div className="card-body">
                <h4 className="card-title">Mango Icecream</h4>
                <p className="card-text fw-bold product_pricing">₹50</p>
                <a href="#" className="btn add-to-cart-button">Add to Cart</a>
              </div>

            </div>
          </div>
        </div>
    </div>
  </div>
    </div>
  )
}

export default Icecreams

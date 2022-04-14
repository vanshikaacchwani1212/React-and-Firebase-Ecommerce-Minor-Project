
import React from 'react'

const Cart = () => {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color
      }}
    />
  );
  return (
    <section className="h-100 " style={{ backgroundColor: "#B8B8B8" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                        <h6 className="mb-0 text-muted">3 items</h6>
                      </div>
                      <ColoredLine color="black" />

                      <div className="row mb-4 d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src= {require("../assets/images/orange-juice.jpg")}
                            className="img-fluid rounded-3" alt="orange juice" />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <h6 className="text-muted">Orange Juice</h6>
                          {/* <h6 className="text-black mb-0"> T-shirt</h6> */}
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button className="btn btn-link px-2">
                            <i className="fa fa-fw fa-minus"></i>
                          </button>

                          <input id="form1" min="0" name="quantity" value="2" type="number"
                            className="form-control form-control-sm" />

                          <button className="btn btn-link px-2">
                            <i className="fa fa-fw fa-plus"></i>
                          </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 className="mb-0">₹50</h6>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" className="text-muted"><i className="fa fa-fw fa-times"></i></a>
                        </div>
                      </div>

                      <ColoredLine color="black" />

                      <div className="row mb-4 d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src= {require("../assets/images/kitkat-shake.jpg")}
                            className="img-fluid rounded-3" alt="Cotton T-shirt" />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <h6 className="text-muted">Kitkat Shake</h6>
                          {/* <h6 className="text-black mb-0">Cotton T-shirt</h6> */}
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button className="btn btn-link px-2">
                            <i className="fa fa-fw fa-minus"></i>
                          </button>

                          <input id="form1" min="0" name="quantity" value="1" type="number"
                            className="form-control form-control-sm" />

                          <button className="btn btn-link px-2">
                            <i className="fa fa-fw fa-plus"></i>
                          </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 className="mb-0">₹70</h6>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" className="text-muted"><i className="fa fa-fw fa-times"></i></a>
                        </div>
                      </div>

                      <ColoredLine color="black" />

                      <div className="row mb-4 d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src= {require("../assets/images/strawberry-icecream.jpg")}
                            className="img-fluid rounded-3" alt="Cotton T-shirt" />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <h6 className="text-muted">Strawberry Icecream</h6>
                          {/* <h6 className="text-black mb-0">Cotton T-shirt</h6> */}
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button className="btn btn-link px-2">
                            <i className="fa fa-fw fa-minus"></i>
                          </button>

                          <input id="form1" min="0" name="quantity" value="1" type="number"
                            className="form-control form-control-sm" />

                          <button className="btn btn-link px-2">
                            <i className="fa fa-fw fa-plus"></i>
                          </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 className="mb-0">₹30</h6>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" className="text-muted"><i className="fa fa-fw fa-times"></i></a>
                        </div>
                      </div>

                      <ColoredLine color="black" />

                      <div className="pt-5">
                        <h6 className="mb-0"><a href="#!" className='text-body'><i
                          className="fa fa-fw fa-arrow-left me-2"></i>Back to shop</a></h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                      <h2 className="fw-bold mb-5 mt-2 pt-1">Summary</h2>
                      <ColoredLine color="black" />

                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">items 3</h5>
                        <h5>₹150</h5>
                      </div>

                      <h5 className="text-uppercase mb-3">Delivery Method</h5>

                      <div className="mb-4 pb-2">
                        <select className="form-control form-control-lg select">
                          <option value="1">Takeaway</option>
                          <option value="2">Dining</option>
                        </select>
                      </div>

                      {/* <h5 className="text-uppercase mb-3">Give code</h5>

                      <div className="mb-5">
                        <div className="form-outline">
                          <input type="text" id="form3Examplea2" className="form-control form-control-lg" placeholder='Enter your code' />
                           <label className="form-label" for="form3Examplea2">Enter your code</label>
                        </div>
                      </div> */}

                      <ColoredLine color="black" />

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>₹150</h5>
                      </div>

                      <button type="button" className="btn btn-dark btn-lg button-margin"
                        data-mdb-ripple-color="dark">Clear Cart</button>

                      <button type="button" className="btn btn-dark btn-lg"
                        data-mdb-ripple-color="dark">Continue</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart

import React from 'react'

const Season = () => {
    return (
        <div>
            <div className="container-fluid text-center text_padding">
                <div className="container">
                    <div className="col-sm-12 text-center fw-bold">
                        <h3>Season Special Products</h3>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="card rounded-3">
                                <div className="view overlay">
                                    <img src={require("../assets/images/mango-shake.png")} className="card-img-top img-fluid rounded-3" alt="img" />
                                    <a href="#">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body">
                                    <h4 className="card-title">Mango Shake</h4>
                                    <p className="card-text fw-bold product_pricing">₹70</p>
                                    <a href="#!" className="btn add-to-cart-button">Add to Cart</a>
                                </div>

                            </div>
                        </div>


                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="card rounded-3">
                                <div className="view overlay">
                                    <img src={require("../assets/images/beet-juice.png")} className="card-img-top rounded-3" alt="img" />
                                    <a href="#">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>


                                <div className="card-body">
                                    <h4 className="card-title">Carrot Beetroot Juice</h4>
                                    <p className="card-text fw-bold product_pricing">₹50</p>
                                    <a href="#" className="btn add-to-cart-button">Add to Cart</a>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="card rounded-3">
                                <div className="view overlay">
                                    <img src={require("../assets/images/lychee-shake.png")} className="card-img-top rounded-3" alt="img" />
                                    <a href="#">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body">
                                    <h4 className="card-title">Lychee Shake</h4>
                                    <p className="card-text fw-bold product_pricing">₹80</p>
                                    <a href="#" className="btn add-to-cart-button">Add to Cart</a>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="card rounded-3">
                                <div className="view overlay">
                                    <img src={require("../assets/images/kaju-anjeer-shake.png")} className="card-img-top rounded-3" alt="img" />
                                    <a href="#">
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body">
                                    <h4 className="card-title">Kaju Anjeer Shake</h4>
                                    <p className="card-text fw-bold product_pricing">₹120</p>
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

export default Season

import React from 'react'
import Slidder from './Slidder';

const Home = () => {
    return (
    <div>
        <div><Slidder/></div>
            <div className="container-fluid text-center text_padding">
                <div className="container">
                    <div className="row"> 
                        <div className="col-sm-12 text-center fw-bold text_padding">
                            <h3>BestSeller Products</h3>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-6">
                                <div className="card rounded-3">
                                    <div className="view overlay">
                                        <img src = {require("../assets/images/apple-juice.png" )} className="card-img-top img-fluid rounded-3" alt="img"/>
                                            <a href="#">
                                                <div className="mask rgba-white-slight"></div>
                                            </a>
                                    </div>

                                    
                                    <div className="card-body">
                                        <h4 className="card-title">Apple Juice</h4>
                                        <p className="card-text fw-bold product_pricing">₹60</p>
                                        <a href="#!" className="btn add-to-cart-button">Add to Cart</a>
                                    </div>

                                </div>

                            </div>

                            
                            <div className="col-lg-3 col-md-3 col-6">
                                <div className="card rounded-3">
                                    <div className="view overlay">
                                        <img src= {require("../assets/images/orange-juice.png")} className="card-img-top rounded-3" alt="img"/>
                                            <a href="#">
                                                <div className="mask rgba-white-slight"></div>
                                            </a>
                                    </div>

                                    
                                    <div className="card-body">
                                        <h4 className="card-title">Orange Juice</h4>
                                        <p className="card-text fw-bold product_pricing">₹50</p>
                                        <a href="#" className="btn add-to-cart-button">Add to Cart</a>
                                    </div>

                                </div>

                            </div>

                            
                            <div className="col-lg-3 col-md-3 col-6">
                                <div className="card rounded-3">
                                    <div className="view overlay">
                                        <img src= {require("../assets/images/pineapple-juice.png")} className="card-img-top rounded-3" alt="img"/>
                                            <a href="#">
                                                <div className="mask rgba-white-slight"></div>
                                            </a>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">PineApple Juice</h4>
                                        <p className="card-text fw-bold product_pricing">₹50</p>
                                        <a href="#" className="btn add-to-cart-button">Add to Cart</a>
                                    </div>

                                </div>

                            </div>


                            
                            <div className="col-lg-3 col-md-3 col-6">
                                <div className="card rounded-3">
                                    <div className="view overlay">
                                        <img src= {require("../assets/images/mixed-juice.png")} className="card-img-top rounded-3" alt="img"/>
                                            <a href="#">
                                                <div className="mask rgba-white-slight"></div>
                                            </a>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Mixed Fruit Juice</h4>
                                        <p className="card-text fw-bold product_pricing">₹60</p>
                                        <a href="#" className="btn add-to-cart-button">Add to Cart</a>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>


                
                <div className="container-fluid text-center text_padding1 banner-bg">
                    <div className="container">
                            <div className="col-sm-12 text-center fw-bold text_padding1">
                                <h3>All Products</h3>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="card rounded-3">
                                        <div className="view overlay">
                                            <img src= {require("../assets/images/pomegranate-juice.png")} className="card-img-top img-fluid rounded-3" alt="img"/>
                                                <a href="#">
                                                    <div className="mask rgba-white-slight"></div>
                                                </a>
                                        </div>
                                        <div className="card-body">
                                            <h4 className="card-title">Pomegranate Juice</h4>
                                            <p className="card-text fw-bold product_pricing">₹80</p>
                                            <a href="#!" className="btn add-to-cart-button">Add to Cart</a>
                                        </div>

                                    </div>

                                </div>

                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="card rounded-3">
                                        <div className="view overlay">
                                            <img src= {require("../assets/images/kitkat-shake.png")} className="card-img-top rounded-3" alt="img"/>
                                                <a href="#">
                                                    <div className="mask rgba-white-slight"></div>
                                                </a>
                                        </div>

                                        <div className="card-body">
                                            <h4 className="card-title">Kitkat Shake</h4>
                                            <p className="card-text fw-bold product_pricing">₹70</p>
                                            <a href="#" className="btn add-to-cart-button">Add to Cart</a>
                                        </div>

                                    </div>

                                </div>

                                
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="card rounded-3">
                                        <div className="view overlay">
                                            <img src= {require("../assets/images/mango-shake.png")} className="card-img-top rounded-3" alt="img"/>
                                                <a href="#">
                                                    <div className="mask rgba-white-slight"></div>
                                                </a>
                                        </div>

                                        
                                        <div className="card-body">
                                            <h4 className="card-title">Mango Shake</h4>
                                            <p className="card-text fw-bold product_pricing">₹70</p>
                                            <a href="#" className="btn add-to-cart-button">Add to Cart</a>
                                        </div>

                                    </div>

                                </div>


                                
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="card rounded-3">
                                        <div className="view overlay">
                                            <img src= {require("../assets/images/vanilla-icecream.png")} className="card-img-top rounded-3" alt="img"/>
                                                <a href="#">
                                                    <div className="mask rgba-white-slight"></div>
                                                </a>
                                        </div>

                                       
                                        <div className="card-body">
                                            <h4 className="card-title">Vanilla Icecream</h4>
                                            <p className="card-text fw-bold product_pricing">₹30</p>
                                            <a href="#" className="btn add-to-cart-button">Add to Cart</a>
                                        </div>


                                    </div>

                                </div>

                            </div><br/>
                            {/* <div><a href="#" className="btn see-more-button">See More</a></div> */}
                        </div>
                    </div>
            </div>
    </div>
    )
}

export default Home

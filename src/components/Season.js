import React, { useState, useEffect } from 'react'
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const Season = () => {

    const [products, setProducts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "products" && references('fe6cc933-4aa7-4488-ad42-ebf41d1f81df')]{
					_id,
                    productName,
                    productPrice,
                    productImage{
                        asset->{
                        _id,
                        url
                        },
                    }
                }`
      )
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

    return (
        <div>
            <div className="container-fluid text-center text_padding">
                <div className="container">
                    <div className="col-sm-12 text-center fw-bold">
                        <h3>Season Special Products</h3>
                    </div>

                    <div className="row">
                    {products &&
                    products.map((product,id,productid,priceid) => (
                        <div className="col-lg-3 col-md-3 col-6" key={id}>
                            <div className="card rounded-3">
                                <div className="view overlay">
                                    <img src={urlFor(product.productImage).width(200).url()} className="card-img-top img-fluid rounded-3" alt="img" />
                                    {/* <a href="#">
                                        <div className="mask rgba-white-slight"></div>
                                    </a> */}
                                </div>

                                <div className="card-body">
                                    <h4 className="card-title" key={productid}>{product.productName}</h4>
                                    <p className="card-text fw-bold product_pricing" key={priceid}>???{product.productPrice}</p>
                                    <a href="#!" className="btn add-to-cart-button">Add to Cart</a>
                                </div>

                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Season

import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const products = useSelector((state) => state.listOfProducts.products);
    //console.log("products in component : " ,products)
    //const { title } = products[0];
    return (
        <div className="four column wide">
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <div className="content">
                            {/* <div className="header">
                                {title}
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductComponent;
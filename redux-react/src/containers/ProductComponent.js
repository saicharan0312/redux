import React from "react";
import { Link } from "react-router-dom";
import { useSelector, connect } from "react-redux";

const ProductComponent = (props) => {
    // const products = useSelector((state) => state.listOfProducts.products);
    const renderList = props.products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div className="four wide column" key={id}>
                <Link to={`/product/${id}`}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="content">
                            <div className="header"> {title} </div>
                            <div className="meta price"> $ {price} </div>
                            <div className="meta"> {category} </div>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        );
    });
    return (
        <>{renderList}</>
    );
}
const mapStateToProps = (state) => {
    return {
        products : state.listOfProducts.products,
    }
}

export default connect(mapStateToProps)(ProductComponent);
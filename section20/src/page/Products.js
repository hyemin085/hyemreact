import React from "react";
import {Link} from "react-router-dom";

const Products = () => {
    return (
        <React.Fragment>
            <section>
                <h1>The Products Page</h1>
                <ul>
                    <li>
                        <Link to ='/products/p1'>책</Link></li>
                    <li> <Link to ='/products/p2'>카페트</Link></li>
                    <li> <Link to ='/products/p3'>온라인강의</Link></li>
                </ul>
            </section>
        </React.Fragment>
    )
};

export default Products;
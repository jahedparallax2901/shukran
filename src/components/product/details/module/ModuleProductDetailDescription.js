import React from 'react';
import { Link } from 'react-router-dom';
import parse from "html-react-parser";

const ModuleProductDetailDescription = ({ product }) => (
    <div className="ps-product__desc">
        <p>
            Sold By:
            <Link to={`/store/${product?.store_id}`}>
                <a>
                    <strong> {product?.store?.name}</strong>
                </a>
            </Link>
        </p>
        <ul className="ps-list--dot">
            <li>
                {parse(product?.content || "")}
            </li>
            {/* <li>Unrestrained and portable active stereo speaker</li>
            <li> Free from the confines of wires and chords</li>
            <li> 20 hours of portable capabilities</li>
            <li>Double-ended Coil Cord with 3.5mm Stereo Plugs Included</li>
            <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li> */}
        </ul>
    </div>
);

export default ModuleProductDetailDescription;

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { doubleProduct } from '../../temp-data/product';
import { carouselFullwidth, carouselStandard } from '../../utilities/carousel-helpers';
import Product from './module/Product';

const CustomerBought = ({ collectionSlug, boxed, layout }) => {
    const [productItems, setProductItems] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getProducts() {
       
            setProductItems([...doubleProduct, ...doubleProduct, ...doubleProduct, ...doubleProduct]);
            // setTimeout(
            //     function () {
            //         setLoading(false);
            //     }.bind(this),
            //     250
            // );
    }

    useEffect(() => {
        getProducts();
    }, [collectionSlug]);

    // Views
    let carouselView;
    if (!loading) {
        if (productItems) {
            if ((layout = 'fullwidth')) {
                carouselView = (
                    <Slider {...carouselFullwidth} className="ps-carousel outside">
                        {productItems.map((item, index) => {
                            if (index < 8) {
                                return <Product product={item} key={item.id} />;
                            }
                        })}
                    </Slider>
                );
            } else {
                carouselView = (
                    <Slider {...carouselStandard} className="ps-carousel outside">
                        {productItems.map((item, index) => {
                            if (index < 8) {
                                return <Product product={item} key={item.id} />;
                            }
                        })}
                    </Slider>
                );
            }
        }
        else {
            carouselView = <p>No product found.</p>
        }
    }
    else {
        carouselView = <p>Loading...</p>
    }

    return (
        <div
            className={`ps-section--default ps-customer-bought ${
                boxed === true ? 'boxed' : ''
            }`}>
            <div className="ps-section__header">
                <h3>Customers who bought this item also bought</h3>
            </div>
            <div className="ps-section__content">{carouselView}</div>
        </div>
    );
};

export default CustomerBought;

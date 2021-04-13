import React, { useEffect, useState } from 'react';
import SkeletonProduct from '../../../elements/skeletons/SkeletonProduct';
import Product from '../../module/Product';
import {doubleProduct} from '../../../../temp-data/product';
import { generateTempArray } from '../../../../utilities/common-helpers';
// import { getProductsByCollectionHelper } from '~/utilities/strapi-fetch-data-helpers';
// import Product from '~/components/elements/products/Product';
// import { generateTempArray } from '~/utilities/common-helpers';
// import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';

const WidgetProductSameBrands = ({ collectionSlug }) => {
    const [productItems, setProductItems] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getProducts() {
        
            setProductItems(doubleProduct);
            // setTimeout(
            //     function () {
            //         setLoading(false);
            //     }.bind(this),
            //     250
            // );
    }

    useEffect(() => {
        getProducts();
    }, []);

    // Views
    let productItemsView;
    if (!loading) {
        if (productItems && productItems.length > 0) {
            productItemsView = productItems.map((item) => (
                <Product product={item} key={item.id} />
            ));
        } else {
            productItemsView = <p>No product found.</p>;
        }
    } else {
        productItemsView = generateTempArray(3).map((item) => (
            <SkeletonProduct key={item} />
        ));
    }

    return (
        <aside className="widget widget_same-brand">
            <h3>Same Brand</h3>
            <div className="widget__content">{productItemsView}</div>
        </aside>
    );
};

export default WidgetProductSameBrands;

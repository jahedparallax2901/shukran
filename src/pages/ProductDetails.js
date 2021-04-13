import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
// import { useRouter } from 'next/router';

// import ContainerProductDetail from '~/components/layouts/ContainerProductDetail';
// import ProductRepository from '~/repositories/ProductRepository';
// import SkeletonProductDetail from '~/components/elements/skeletons/SkeletonProductDetail';
// import BreadCrumb from '~/components/elements/BreadCrumb';
// import ProductWidgets from '~/components/partials/product/ProductWidgets';
// import ProductDetailFullwidth from '~/components/elements/detail/ProductDetailFullwidth';
// import CustomerBought from '~/components/partials/product/CustomerBought';
// import RelatedProduct from '~/components/partials/product/RelatedProduct';
// import ContainerPage from '~/components/layouts/ContainerPage';
// import HeaderProduct from '~/components/shared/headers/HeaderProduct';
// import HeaderDefault from '~/components/shared/headers/HeaderDefault';

import { useParams } from 'react-router';
import BreadCrumb from '../components/elements/BreadCrumb';
import SkeletonProductDetail from '../components/elements/skeletons/SkeletonProductDetail';
import ContainerMarketPlace3 from '../components/layouts/ContainerMarketPlace3.jsx';
import CustomerBought from '../components/product/CustomerBought';
// import HeaderDefault from '../components/product/details/header/HeaderDefault';
// import HeaderProduct from '../components/product/details/header/HeaderProduct';
import ProductDetailFullwidth from '../components/product/ProductDetailFullwidth';
import ProductWidgets from '../components/product/ProductWidgets';
import RelatedProduct from '../components/product/RelatedProduct';
import { singleProduct } from '../temp-data/product';

const ProductDetails = () => {
    // const router = useRouter();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getProduct(pid) {
        // setLoading(true);
        
            setProduct(singleProduct);
            // setTimeout(
            //     function () {
            //         setLoading(false);
            //     }.bind(this),
            //     250
            // );
      
    }

    useEffect(() => {
        getProduct(id);
    }, [id]);

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shop',
            url: '/shop',
        },
        {
            text: product ? product.title : 'Loading...',
        },
    ];
    // Views
    let productView, headerView;
    // if (!loading) {
        debugger;
        if (product) {
            productView = <ProductDetailFullwidth product={product} />;
            // headerView = <HeaderProduct product={product} />;
        } else {
            // headerView = <HeaderDefault />;
        }
    // } else {
    //     productView = <SkeletonProductDetail />;
    // }
    return (
        <ContainerMarketPlace3 title={product ? product.title : 'Loading...'} isExpanded={true}>
            {/* {headerView} */}
            <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
            <div className="ps-page--product">
                <div className="ps-container">
                    <div className="ps-page__container">
                        <div className="ps-page__left">{productView}</div>
                        <div className="ps-page__right">
                            <ProductWidgets />
                        </div>
                    </div>

                    <CustomerBought
                        layout="fullwidth"
                        collectionSlug="deal-of-the-day"
                    />
                    <RelatedProduct collectionSlug="shop-recommend-items" />
                </div>
            </div>
        </ContainerMarketPlace3>
    );
};

export default ProductDetails;

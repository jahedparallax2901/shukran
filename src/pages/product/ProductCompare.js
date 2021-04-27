import React from 'react'
import BreadCrumb from '../../components/elements/BreadCrumb';
import ContainerMarketPlace3 from '../../components/layouts/ContainerMarketPlace3';
import Compare from '../../components/partials/product/Compare';

const ProductCompare = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Compare',
        },
    ];
    return (
        <ContainerMarketPlace3>
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <Compare />
            </div>
        </ContainerMarketPlace3>
    );
}

export default ProductCompare

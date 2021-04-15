import React from 'react';
import DefaultDescription from './details/description/DefaultDescription';
import ModuleDetailActionsMobile from './details/module/ModuleDetailActionsMobile';
import ModuleDetailShoppingActions from './details/module/ModuleDetailShoppingActions';
import ModuleDetailTopInformation from './details/module/ModuleDetailTopInformation';
import ModuleProductDetailDescription from './details/module/ModuleProductDetailDescription';
import ModuleProductDetailSharing from './details/module/ModuleProductDetailSharing';
import ModuleProductDetailSpecification from './details/module/ModuleProductDetailSpecification';
import ThumbnailDefault from './details/thumbnail/ThumbnailDefault';
// import ThumbnailDefault from '~/components/elements/detail/thumbnail/ThumbnailDefault';
// import DefaultDescription from '~/components/elements/detail/description/DefaultDescription';
// import ModuleProductDetailDescription from '~/components/elements/detail/modules/ModuleProductDetailDescription';
// import ModuleDetailShoppingActions from '~/components/elements/detail/modules/ModuleDetailShoppingActions';
// import ModuleProductDetailSpecification from '~/components/elements/detail/modules/ModuleProductDetailSpecification';
// import ModuleProductDetailSharing from '~/components/elements/detail/modules/ModuleProductDetailSharing';
// import ModuleDetailActionsMobile from '~/components/elements/detail/modules/ModuleDetailActionsMobile';
// import ModuleDetailTopInformation from '~/components/elements/detail/modules/ModuleDetailTopInformation';

const ProductDetailFullwidth = ({ product }) => {
    console.log("Product", product);
    return (
        <div className="ps-product--detail ps-product--fullwidth">
            <div className="ps-product__header">
                <ThumbnailDefault product={product} />
                <div className="ps-product__info">
                    <ModuleDetailTopInformation product={product} />
                    <ModuleProductDetailDescription product={product} />
                    <ModuleDetailShoppingActions product={product} />
                    <ModuleProductDetailSpecification product={product}/>
                    <ModuleProductDetailSharing />
                    <ModuleDetailActionsMobile />
                </div>
            </div>
            <DefaultDescription product={product}/>
        </div>
    );
};

export default ProductDetailFullwidth;

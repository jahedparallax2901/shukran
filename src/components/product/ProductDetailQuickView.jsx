import React from "react";
import ModuleDetailActionsMobile from "./details/module/ModuleDetailActionsMobile";
import ModuleDetailShoppingActions from "./details/module/ModuleDetailShoppingActions";
import ModuleDetailTopInformation from "./details/module/ModuleDetailTopInformation";
import ModuleProductDetailDescription from "./details/module/ModuleProductDetailDescription";
import ModuleProductDetailSharing from "./details/module/ModuleProductDetailSharing";
import ModuleProductDetailSpecification from "./details/module/ModuleProductDetailSpecification";
import ThumbnailDefault from "./details/thumbnail/ThumbnailDefault";

const ProductDetailQuickView = ({ product }) => {
    console.log("quick",product)
  return (
    <div className="ps-product--detail ps-product--quickview">
      <div className="ps-product__header">
        <ThumbnailDefault product={product} vertical={false} />
        <div className="ps-product__info">
          <ModuleDetailTopInformation product={product} />
          <ModuleProductDetailDescription product={product} />
          <ModuleDetailShoppingActions product={product} extended={true} />
          <ModuleProductDetailSpecification />
          <ModuleProductDetailSharing />
          {/* <ModuleDetailActionsMobile /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailQuickView;

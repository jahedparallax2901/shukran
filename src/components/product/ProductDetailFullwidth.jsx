import React from "react";
import { Form } from "react-bootstrap";
import DefaultDescription from "./details/description/DefaultDescription";
import ModuleDetailActionsMobile from "./details/module/ModuleDetailActionsMobile";
import ModuleDetailShoppingActions from "./details/module/ModuleDetailShoppingActions";
import ModuleDetailTopInformation from "./details/module/ModuleDetailTopInformation";
import ModuleProductDetailDescription from "./details/module/ModuleProductDetailDescription";
import ModuleProductDetailSharing from "./details/module/ModuleProductDetailSharing";
import ModuleProductDetailSpecification from "./details/module/ModuleProductDetailSpecification";
import ThumbnailDefault from "./details/thumbnail/ThumbnailDefault";
// import ThumbnailDefault from '~/components/elements/detail/thumbnail/ThumbnailDefault';
// import DefaultDescription from '~/components/elements/detail/description/DefaultDescription';
// import ModuleProductDetailDescription from '~/components/elements/detail/modules/ModuleProductDetailDescription';
// import ModuleDetailShoppingActions from '~/components/elements/detail/modules/ModuleDetailShoppingActions';
// import ModuleProductDetailSpecification from '~/components/elements/detail/modules/ModuleProductDetailSpecification';
// import ModuleProductDetailSharing from '~/components/elements/detail/modules/ModuleProductDetailSharing';
// import ModuleDetailActionsMobile from '~/components/elements/detail/modules/ModuleDetailActionsMobile';
// import ModuleDetailTopInformation from '~/components/elements/detail/modules/ModuleDetailTopInformation';

const ProductDetailFullwidth = ({ product }) => {
  return (
    <div className="ps-product--detail ps-product--fullwidth">
      <div className="ps-product__header">
        <ThumbnailDefault product={product} />
        <div className="ps-product__info">
          <ModuleDetailTopInformation product={product} />
          <ModuleProductDetailDescription product={product} />
          {/* <ModuleDetailActionsMobile /> */}
        </div>
      </div>
      <div class="ps-product-info-other">
        <ModuleDetailShoppingActions product={product} />
        <div>
            <h5>Select Attributes</h5>
            <div>
                {
                    product?.attribute && Object.keys(product?.attribute).map(item=>(
                        <div>
                            <h5>{item}</h5>
                            <Form inline>
                                <Form.Group>
                                    <Form.Control type="checkbox" />
                                    <Form.Label>{product?.attribute[item].attribute_item}</Form.Label>
                                </Form.Group>
                            </Form>
                        </div>
                    ))
                }
            </div>
        </div>
        <ModuleProductDetailSpecification product={product} />
        <ModuleProductDetailSharing />
      </div>

      <DefaultDescription product={product} />
    </div>
  );
};

export default ProductDetailFullwidth;

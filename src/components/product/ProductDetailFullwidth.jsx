import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import DefaultDescription from "./details/description/DefaultDescription";
import ModuleDetailActionsMobile from "./details/module/ModuleDetailActionsMobile";
import ModuleDetailShoppingActions from "./details/module/ModuleDetailShoppingActions";
import ModuleDetailTopInformation from "./details/module/ModuleDetailTopInformation";
import ModuleProductDetailDescription from "./details/module/ModuleProductDetailDescription";
import ModuleProductDetailSharing from "./details/module/ModuleProductDetailSharing";
import ModuleProductDetailSpecification from "./details/module/ModuleProductDetailSpecification";
import ThumbnailDefault from "./details/thumbnail/ThumbnailDefault";

const ProductDetailFullwidth = ({ product }) => {
  const [selectedAttributeProduct, setSelectedAttributeProduct] = useState(
    product?.attributes[0] || {}
  );

  return (
    <div className="ps-product--detail ps-product--fullwidth">
      <div className="ps-product__header">
        <ThumbnailDefault product={product} />
        <div className="ps-product__info">
          <ModuleDetailTopInformation
            product={product}
            selectedAttributeProduct={selectedAttributeProduct}
          />
          <ModuleProductDetailDescription
            product={product}
          />
          {/* <ModuleDetailActionsMobile /> */}
        </div>
      </div>
      <div class="ps-product-info-other">
        <ModuleDetailShoppingActions
          product={product}
          selectedAttributeProduct={selectedAttributeProduct}
        />
        <div>
          <h4>Select Attributes</h4>
          <div>
            {product?.attribute &&
              Object.keys(product?.attribute).map((item) => (
                <div>
                  <h5>{item}</h5>
                  <Form inline>
                    {product?.attribute[item] &&
                      product?.attribute[item].map((attr) => (
                        <Form.Group>
                          <Form.Control
                            type="radio"
                            name="attribute"
                            defaultChecked={
                              selectedAttributeProduct?.attribute_item?.id ===
                              attr?.attribute_item?.id
                            }
                            onChange={()=>setSelectedAttributeProduct(attr || {})}
                          />
                          <Form.Label className="mr-2">
                            {attr?.attribute_item?.value}
                          </Form.Label>
                        </Form.Group>
                      ))}
                  </Form>
                </div>
              ))}
          </div>
        </div>
        <hr />
        <ModuleProductDetailSpecification product={product} selectedAttributeProduct={selectedAttributeProduct}/>
        <ModuleProductDetailSharing />
      </div>

      <DefaultDescription product={product} />
    </div>
  );
};

export default ProductDetailFullwidth;

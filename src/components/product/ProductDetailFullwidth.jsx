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
    product?.attributes_types?.length > 0
      ? product?.attributes_types[0].items[0]
      : product?.default_attribute
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
          <ModuleProductDetailDescription product={product} />
        </div>
      </div>
      <div class="ps-product-info-other">
      {/* <ModuleDetailActionsMobile /> */}

        <ModuleDetailShoppingActions
          product={product}
          selectedAttributeProduct={selectedAttributeProduct}
        />
        {/* {product?.attributes_types?.length > 0 && (
          <div>
            <h4>Select Attributes</h4>
            <div>
              {product?.attributes_types.map((item) => (
                <div>
                  <h5>{item.name}</h5>
                  <Form inline>
                    {item.items.map((attr) => (
                      <Form.Group>
                        <Form.Control
                          type="radio"
                          name="attribute"
                          defaultChecked={
                            selectedAttributeProduct?.attribute_item?.id ===
                            attr?.attribute_item?.id
                          }
                          onChange={() =>
                            setSelectedAttributeProduct(attr || {})
                          }
                        />
                        <Form.Label className="mr-2">
                          {attr?.attribute_item?.value}
                        </Form.Label>
                      </Form.Group>
                    ))}
                  </Form>
                </div>
              ))}
              <hr />
            </div>
          </div>
        )} */}

        <ModuleProductDetailSpecification
          product={product}
          selectedAttributeProduct={selectedAttributeProduct}
        />
        <ModuleProductDetailSharing />
      </div>

      <DefaultDescription product={product} />
    </div>
  );
};

export default ProductDetailFullwidth;

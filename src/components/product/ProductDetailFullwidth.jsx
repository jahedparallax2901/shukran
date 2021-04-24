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
import "../../assets/scss/custom-new.scss";

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

        <div className="attribute_div">
          <table>
            <tbody>
              <tr>
                <td><p>colors</p></td>
                <td><a href="#" className="attribute_selector active">black</a>
                <a href="#" className="attribute_selector">blue</a></td>
 
              </tr>
              <tr>
                <td><p>size</p></td>
                <td><a href="#" className="attribute_selector">M</a>
                <a href="#" className="attribute_selector active">L</a>
                <a href="#" className="attribute_selector ">XL</a>
                <a href="#" className="attribute_selector ">XXL</a></td>
              </tr>
              <tr>
                <td><p>sleeve</p></td>
                <td><a href="#" className="attribute_selector attribute_selector-img">
                <div className="attribute-image-container">
                <img src="https://ekshop-dev.s3-us-west-1.amazonaws.com/W-150-px-1607100658272_SPLjpg.webp" alt=""/>
                </div>
                  </a>
                  <a href="#" className="attribute_selector attribute_selector-img active">
                  <div className="attribute-image-container">
                  <img src="https://ekshop-dev.s3-us-west-1.amazonaws.com/W-150-px-1607589613860_GMLTDILBjpg.webp" alt=""/>
                  </div>
                  </a></td>
              </tr>
            </tbody>
          </table>
        </div>

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

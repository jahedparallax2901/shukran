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
import { Link } from "react-router-dom";

const ProductDetailFullwidth = ({ product , selectedAttributeProduct, setSelectedAttributeProduct}) => {
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
          <ModuleDetailShoppingActions
          product={product}
          selectedAttributeProduct={selectedAttributeProduct}
        />
        {product?.attributes_types?.length > 0 && (
          <div>
            <h4 className="gray-md-title">Select Attributes</h4>
            <div className="attribute_div">
              <table>
                <tbody>
                  {product?.attributes_types.map((item) => (
                    <tr>
                      <td>
                        <p>{item.name}</p>
                      </td>
                      <td>
                        {item.items.map((attr) => (
                          <Link
                          onClick={(e) =>{
                            e.preventDefault();
                            setSelectedAttributeProduct(attr || {})
                          }}
                            className={`attribute_selector ${
                              selectedAttributeProduct?.id ===
                                attr?.id && "active"
                            }`}
                          >
                            {attr?.attribute_item?.value}
                          </Link>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <hr />
            </div>
          </div>
        )}

        <ModuleProductDetailSpecification
          product={product}
          selectedAttributeProduct={selectedAttributeProduct}
        />
        <ModuleProductDetailSharing />
        </div>
      </div>
      <div class="ps-product-info-other">
        <ModuleDetailActionsMobile product={product}
          selectedAttributeProduct={selectedAttributeProduct}/>
      </div>

      <DefaultDescription product={product} />
    </div>
  );
};

export default ProductDetailFullwidth;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { processGetRequest } from "../../services/baseServices";
import ModuleDetailActionsMobile from "./details/module/ModuleDetailActionsMobile";
import ModuleDetailShoppingActions from "./details/module/ModuleDetailShoppingActions";
import ModuleDetailTopInformation from "./details/module/ModuleDetailTopInformation";
import ModuleProductDetailDescription from "./details/module/ModuleProductDetailDescription";
import ModuleProductDetailSharing from "./details/module/ModuleProductDetailSharing";
import ModuleProductDetailSpecification from "./details/module/ModuleProductDetailSpecification";
import ThumbnailDefault from "./details/thumbnail/ThumbnailDefault";
import SkeletonProductDetail from "../elements/skeletons/SkeletonProductDetail";

const ProductDetailQuickView = ({ id }) => {
  const [quickProduct, setQuickProduct] = useState({});
  const [loading, setLoading] = useState({});
  const [selectedAttributeProduct, setSelectedAttributeProduct] = useState({});

  const getProduct = (id) => {
    debugger;
    setLoading(true);
    processGetRequest(`/product/detail/${id}`, {}, false)
      .then((res) => {
        setQuickProduct(res.product);
        setSelectedAttributeProduct(
          res.product?.attributes_types?.length > 0
            ? res.product?.attributes_types[0].items[0]
            : res.product?.default_attribute
        );
        setTimeout(
          function () {
            setLoading(false);
          }.bind(this),
          250
        );
      })
      .catch((err) => {
        console.log(err);
        setTimeout(
          function () {
            setLoading(false);
          }.bind(this),
          250
        );
      });
  }

  useEffect(() => {
    getProduct(id);
  }, [id]);

  console.log("selectedAttributeProduct", selectedAttributeProduct);
  return (
    <>
      {loading ? (
        <SkeletonProductDetail />
      ) : (
        <div className="ps-product--detail ps-product--quickview">
          <div className="ps-product__header">
            <ThumbnailDefault product={quickProduct} vertical={false} />
            <div className="ps-product__info">
              <ModuleDetailTopInformation
                product={quickProduct}
                selectedAttributeProduct={selectedAttributeProduct}
              />
              <ModuleProductDetailDescription
                product={quickProduct}
                selectedAttributeProduct={selectedAttributeProduct}
              />
              {quickProduct?.attributes_types?.length > 0 && (
                <div>
                  <h4 className="gray-md-title">Select Attributes</h4>
                  <div className="attribute_div">
                    <table>
                      <tbody>
                        {quickProduct?.attributes_types.map((item) => (
                          <tr>
                            <td>
                              <p>{item.name}</p>
                            </td>
                            <td>
                              {item.items.map((attr) => (
                                <Link
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedAttributeProduct(attr || {});
                                  }}
                                  className={`attribute_selector ${
                                    selectedAttributeProduct?.id === attr?.id &&
                                    "active"
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
              <ModuleDetailShoppingActions
                product={quickProduct}
                extended={true}
                selectedAttributeProduct={selectedAttributeProduct}
              />
              <ModuleProductDetailSpecification
                selectedAttributeProduct={selectedAttributeProduct}
              />
              {/* <ModuleProductDetailSharing /> */}
              {/* <ModuleDetailActionsMobile /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailQuickView;

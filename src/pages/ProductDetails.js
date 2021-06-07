import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BreadCrumb from "../components/elements/BreadCrumb";
import SkeletonProductDetail from "../components/elements/skeletons/SkeletonProductDetail";
import ContainerProductDetail from "../components/layouts/ContainerProductDetail";
import Header from "../components/partials/Header/Header";
// import HeaderDefault from '../components/product/details/header/HeaderDefault';
// import HeaderProduct from '../components/product/details/header/HeaderProduct';
import ProductDetailFullwidth from "../components/product/ProductDetailFullwidth";
import ProductWidgets from "../components/product/ProductWidgets";
import RelatedProduct from "../components/product/RelatedProduct";
import {
  processGetRequest
} from "../services/baseServices";

const ProductDetails = () => {
  // const router = useRouter();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedAttributeProduct, setSelectedAttributeProduct] = useState();

  async function getProduct(id) {
    setLoading(true);
    processGetRequest(`/product/detail/${id}`, {}, false)
      .then((res) => {
        console.log("response", res);
        setProduct(res.product);
        setSelectedAttributeProduct(
          res.product?.attributes_types?.length > 0
            ? res.product?.attributes_types[0].items[0]
            : res.product?.default_attribute
        );
        setTimeout(
          function () {
            setLoading(false);
          },
          250
        );
      })
      .catch((err) => {
        console.log(err);
        setTimeout(
          function () {
            setLoading(false);
          },
          250
        );
      });
  }

  useEffect(() => {
    getProduct(id);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [id]);

  const breadCrumb = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Shop",
      url: "/shop",
    },
    {
      text: product ? product.name : "Loading...",
    },
  ];
  // Views
  let productView, headerView;
  if (!loading) {
    if (product) {
      productView = (
        <ProductDetailFullwidth
          product={product}
          selectedAttributeProduct={selectedAttributeProduct}
          setSelectedAttributeProduct={setSelectedAttributeProduct}
        />
      );
      headerView = <Header product={product} isProduct={true} selectedAttributeProduct={selectedAttributeProduct}/>;
    } else {
      headerView = <Header isProduct={false} />;
    }
  } else {
    productView = <SkeletonProductDetail />;
  }

  console.log("Product full width", product);
  console.log("selectedAttributeProduct", selectedAttributeProduct);

  return (
    <ContainerProductDetail
      title={product ? product?.name : "Loading..."}
      isExpanded={true}
    >
      {headerView}
      <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
      <div className="ps-page--product ps-product-details-related">
        <div className="ps-container">
          <div className="ps-page__container">
            <div className="ps-page__left">{productView}</div>
            <div className="ps-page__right">
              <ProductWidgets />
            </div>
          </div>

          {/* <CustomerBought layout="fullwidth" collectionSlug="deal-of-the-day" /> */}
          <RelatedProduct product={product} />
        </div>
      </div>
    </ContainerProductDetail>
  );
};

export default ProductDetails;

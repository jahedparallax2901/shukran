import moment from 'moment';
import React, { useState } from 'react'
import { Col, Modal, Row } from 'react-bootstrap';
import { GrClose } from 'react-icons/gr';
import { Link, useHistory } from 'react-router-dom';
import CountDownSimple from '../elements/CountDownSimple';
import Rating from '../elements/Rating';
import CampaignProductActions from './module/CampaignProductActions';
import ProductDetailQuickView from './ProductDetailQuickView';

const NewCampaignProduct = ({product}) => {
    
    const history = useHistory();

    

    return (
        <div
          className="product-cotainer"
          title={product?.product?.name}
         
        >
          <Row>
            <Col md={6} sm={12}>
              <div className="image-container">
                <img src={product?.product?.single_image} alt=""  onClick={() => {
            history.push(`/product/${product.product_id}`);
          }}/>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="product-info">
                <h3 className="product-title">
                  <Link
                    className="normal-link"
                    to={`/product/${product.product_id}`}
                  >
                    {product?.product?.name}
                  </Link>
                </h3>
                <Rating count={4} />
                {/* <p>{(product?.product?.description)}</p> */}
                <h3 className="price">
                  {" "}
                  &#2547;{product?.product?.price}{" "}
                  <del className="sale-price">
                    &#2547;{product?.product?.sale_price}
                  </del>{" "}
                </h3>
                <CampaignProductActions product={product?.product}/>
                {moment(product?.end_date) > moment() ? (
                  <CountDownSimple
                    timeTillDate={product?.end_date}
                    timeFormat="MM DD YYYY, h:mm a"
                  />
                ) : (
                  <div>
                    <hr />
                    <h4 className="text-warning">Campaign Expired</h4>
                  </div>
                )}
              </div>
            </Col>

            
          </Row>
        </div>
    )
}

export default NewCampaignProduct

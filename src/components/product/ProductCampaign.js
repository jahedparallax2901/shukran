import React from 'react'
import { useHistory } from 'react-router-dom';
import Rating from '../elements/Rating'
import CampaignProductActions from './module/CampaignProductActions'

const ProductCampaign = ({product}) => {
    const history = useHistory();
    return (
        <div className="product-campaign" onClick={()=>{
            history.push(`/product/${product?.product_id}`)
        }}>
            <div className="image-container">
            <img src={product?.product?.single_image} alt="shukran" />
            </div>
            <div className="product-info">
                <h4 className="product-title">{product?.product?.name}</h4>
                <Rating count={4}/>
                <span className="price">
                &#2547;{product?.product?.sale_price}
                </span>
            </div>
            <div className="d-flex justify-content-center">
                <CampaignProductActions />
                </div>
        </div>
    )
}

export default ProductCampaign

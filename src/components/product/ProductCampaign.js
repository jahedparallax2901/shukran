import React from 'react'
import { useHistory } from 'react-router-dom';
import Rating from '../elements/Rating'
import CampaignProductActions from './module/CampaignProductActions'

const ProductCampaign = ({product}) => {
    const history = useHistory();
    return (
        <div className="product-campaign" >
            <div className="image-container">
            <img className="cursor-pointer" src={product?.product?.single_image} alt="shukran" onClick={()=>{
            history.push(`/product/${product?.product_id}`)
        }}/>
            </div>
            <div className="product-info">
                <h4 className="product-title cursor-pointer" onClick={()=>{
            history.push(`/product/${product?.product_id}`)
        }}>{product?.product?.name}</h4>
                <Rating count={4}/>
                <span className="price">
                &#2547;{product?.product?.sale_price}
                </span>
            </div>
            <div className="d-flex justify-content-center">
                <CampaignProductActions product={product?.product}/>
                </div>
        </div>
    )
}

export default ProductCampaign

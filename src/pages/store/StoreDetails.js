import React from 'react'
import BreadCrumb from '../../components/elements/BreadCrumb';
import WidgetShopCategories from '../../components/elements/widgets/WidgetShopCategories';
import WidgetShopOthers from '../../components/elements/widgets/WidgetShopOthers';
import ContainerMarketPlace3 from '../../components/layouts/ContainerMarketPlace3'
import ShopBanner from '../../components/partials/store/ShopBanner';
import ShopItems from '../../components/partials/store/ShopItems';
import ProductGroupByCarousel from '../../components/product/ProductGroupByCarousel';

const StoreDetails = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shop Details',
        },
    ];
    return (
        <ContainerMarketPlace3>
            <div className="ps-page--shop">
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <div className="ps-container">
                    <ShopBanner />
                    <div className="ps-layout--shop">
                        <div className="ps-layout__left">
                            <WidgetShopCategories />
                            <WidgetShopOthers />
                        </div>
                        <div className="ps-layout__right">
                            <ProductGroupByCarousel
                                collectionSlug="shop-best-seller-items"
                                title="Best Sale Items"
                            />
                            <ProductGroupByCarousel
                                collectionSlug="shop-recommend-items"
                                title="Recommended Items"
                            />
                            <ShopItems columns={6} pageSize={18} />
                        </div>
                    </div>
                </div>
            </div>
            
        </ContainerMarketPlace3>
    )
}

export default StoreDetails

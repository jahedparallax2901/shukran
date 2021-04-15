import React, { Component } from 'react'
import ContainerMarketPlace3 from '../components/layouts/ContainerMarketPlace3';
import BreadCrumb from '../components/elements/BreadCrumb';
import WidgetSearchCategories from '../components/search/widgets/WidgetSearchCategories';
import WidgetOtherFilters from '../components/search/widgets/WidgetOtherFilters';
import SearchItems from '../components/search/SearchItems';

class SearchProduct extends Component {
    render() {
        const breadCrumb = [
            {
                text: 'Home',
                url: '/',
            },
            {
                text: 'Search',
            },
        ];
        return (
            <ContainerMarketPlace3>
                <div className="ps-page--shop">
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <div className="ps-container">
                    <div className="ps-layout--shop">
                        <div className="ps-layout__left">
                            <WidgetSearchCategories />
                            <WidgetOtherFilters />
                        </div>
                        <div className="ps-layout__right">
                            <SearchItems columns={6} pageSize={18} />
                        </div>
                    </div>
                </div>
            </div>
            </ContainerMarketPlace3>
        )
    }
}

export default SearchProduct;

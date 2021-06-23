import React from 'react'
import ContainerMarketPlace3 from '../../components/layouts/ContainerMarketPlace3'
import ShopBanner from '../../components/partials/store/ShopBanner'
import SingleCampaing from './module/SingleCampaing'
import '../../assets/scss/campaign.scss'

const Campaigns = () => {
    return (
        <ContainerMarketPlace3>
            <div className="container">
            <ShopBanner />
            <div className="campaign-list">
                <SingleCampaing/>
                <SingleCampaing/>
                <SingleCampaing/>
                <SingleCampaing/>
                <SingleCampaing/>
                <SingleCampaing/>
                <SingleCampaing/>
                <SingleCampaing/>
                <SingleCampaing/>
                <SingleCampaing/>
                <SingleCampaing/>
                <SingleCampaing/>
                <SingleCampaing/>
                <SingleCampaing/>
                <SingleCampaing/>
                <SingleCampaing/>
                <SingleCampaing/>
            </div>
            </div>
        </ContainerMarketPlace3>
    )
}

export default Campaigns

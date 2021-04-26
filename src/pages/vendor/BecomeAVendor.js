import React from 'react'
import BreadCrumb from '../../components/elements/BreadCrumb';
import ContainerMarketPlace3 from '../../components/layouts/ContainerMarketPlace3'
import VendorBanner from '../../components/partials/vendor/VendorBanner';
import VendorAbout from '../../components/partials/vendor/VendorAbout';
import VendorMileStone from '../../components/partials/vendor/VendorMileStone';
import VendorBestFees from '../../components/partials/vendor/VendorBestFees';
import VendorTestimonials from '../../components/partials/vendor/VendorTestimonials';
import VendorFaqs from '../../components/partials/vendor/VendorFaqs';

const BecomeAVendor = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Become a Vendor',
        },
    ];
    return (
        <ContainerMarketPlace3>
            <div className="ps-page--single">
                <BreadCrumb breacrumb={breadCrumb} />
                <VendorBanner />
                <VendorAbout />
                <VendorMileStone />
                <VendorBestFees />
                <VendorTestimonials />
                <VendorFaqs />
                <VendorBanner />
            </div>
            
        </ContainerMarketPlace3>
    )
}

export default BecomeAVendor

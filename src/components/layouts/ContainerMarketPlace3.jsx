import React, { useEffect } from 'react';
// import HeaderMobile from '../partials/HeaderMobile';
// import NavigationList from '../partials/NavigationList';
import FooterMarketPlace2 from '../partials/footer/FooterMarketPlace2';
// import MarketPlacePromotionHeader from '../partials/MarketPlacePromotionHeader';
// import HeaderMarketPlace from '../partials/HeaderMarketPlace';

const ContainerMarketPlace3 = ({ children, title }) => {
    let titleView;
    if (title !== null) {
        titleView = process.env.title + ' | ' + title;
    } else {
        titleView = process.env.title + ' | ' + process.env.titleDescription;
    }

    useEffect(()=>{
        document.title = 'Shukran';
    },[])

    return (
        <div>
            {/* <MarketPlacePromotionHeader />
            <HeaderMarketPlace /> */}
            {/* <HeaderMobile />
            <NavigationList /> */}
            <main id="homepage-5">
                <div className="container">{children}</div>
            </main>
            <FooterMarketPlace2 />
        </div>
    );
};

export default ContainerMarketPlace3;

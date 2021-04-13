import React from 'react';
import FooterCopyright from './FooterCopyright';
import FooterWidgets from './FooterWidgets';

const FooterMarketPlace2 = (isExpanded=false) => (
    <footer className="ps-footer ps-footer--3">
        <div className={isExpanded ? "container-fluid px-5": "container"}>
            <FooterWidgets />
            <FooterCopyright />
        </div>
    </footer>
);

export default FooterMarketPlace2;

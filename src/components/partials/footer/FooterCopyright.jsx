import React from 'react';
import paymentMethod3 from '../../../assets/img/payment-method/3.jpg';
import paymentMethod5 from '../../../assets/img/payment-method/5.jpg';
import paymentMethod1 from '../../../assets/img/payment-method/01.jpg';
import paymentMethod2 from '../../../assets/img/payment-method/02.png';
import paymentMethod4 from '../../../assets/img/payment-method/03.jpg';

const FooterCopyright = () => (
    <div className="ps-footer__copyright">
          <p>© 2021 Shukran. All Rights Reserved</p>
          <p>
            <span>We Using Safe Payment For:</span>
            <a href="#"><img src={paymentMethod1} alt="" /></a>
            <a href="#"><img src={paymentMethod2} alt="" /></a>
            <a href="#"><img src={paymentMethod3} alt="" /></a>
            <a href="#"><img src={paymentMethod4} alt="" /></a>
            <a href="#"><img src={paymentMethod5} alt="" /></a>
          </p>
        </div>
);

export default FooterCopyright;

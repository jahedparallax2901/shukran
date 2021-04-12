import React from 'react';

const FooterWidgets = () => (
    <div className="ps-footer__widgets">
          <aside className="widget widget_footer widget_contact-us">
            <h4 className="widget-title">Contact us</h4>
            <div className="widget_content">
              <p>Call us 24/7</p>
              <h3>+88-02-8431092-3</h3>
              <p>
                Plot-314/A, Road-18, Block-E, Bashundhara Residential Area,<br />
                Dhaka-1229, Bangladesh
                <a href="info@shukran24seven.com"> info@shukran24seven.com</a>
              </p>
              <ul className="ps-list--social">
                <li>
                  <a className="facebook" href="#"
                    ><i className="fa fa-facebook"></i
                  ></a>
                </li>
                <li>
                  <a className="twitter" href="#"><i className="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a className="google-plus" href="#"
                    ><i className="fa fa-google-plus"></i
                  ></a>
                </li>
                <li>
                  <a className="instagram" href="#"
                    ><i className="fa fa-instagram"></i
                  ></a>
                </li>
              </ul>
            </div>
          </aside>
          <aside className="widget widget_footer">
            <h4 className="widget-title">Quick links</h4>
            <ul className="ps-list--link">
              <li><a href="#">Policy</a></li>
              <li><a href="#">Term & Condition</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Return</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </aside>
          <aside className="widget widget_footer">
            <h4 className="widget-title">Company</h4>
            <ul className="ps-list--link">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Affilate</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </aside>
          <aside className="widget widget_footer">
            <h4 className="widget-title">Bussiness</h4>
            <ul className="ps-list--link">
              <li><a href="#">Our Press</a></li>
              <li><a href="checkout.html">Checkout</a></li>
              <li><a href="user-information.html">My account</a></li>
              <li><a href="shop-default.html">Shop</a></li>
            </ul>
          </aside>
        </div>
);

export default FooterWidgets;

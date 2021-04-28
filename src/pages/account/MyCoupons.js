import React from "react";
import ContainerMarketPlace3 from "../../components/layouts/ContainerMarketPlace3";
import AccountMenuSidebar from "../../components/partials/account/AccountMenuSidebar";

export default function MyCoupons() {
  const breadCrumb = [
    {
        text: 'Home',
        url: '/',
    },
    {
        text: 'Account / Coupons',
    },
];
  return (
    <ContainerMarketPlace3>
      <section className="ps-my-account ps-page--account pt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="ps-page__left">
                <AccountMenuSidebar selectedTab={"My Coupons"} />
              </div>
            </div>
            <div className="col-lg-9">
              <div className="ps-page__content card">
                <div className="ps-section--account-setting">
                  <div class="card-header border-0 py-5">
                    <h3 class="card-title align-items-start flex-column">
                      <span class="card-label font-weight-bolder text-dark">
                        My Coupons
                      </span>
                    </h3>
                  </div>
                 
                  <div class="card-body pt-3 pb-3" id="pills-tabContent">
                    <div class="card" style={{width: '30rem', borderRadius: '10px'}}>
                      <div
                        class="card-body bg-secondary"
                        style={{borderRadius: "10px 10px 0 0", padding:" 40px 0"}}
                      >
                        <p class="text-light text-center">
                          Your order of BDT 300 or more
                        </p>
                        <h3 class="text-center text-light">BDT 100 Off</h3>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <div class="detail-item">
                            <p class="text-dark">Validity period</p>
                            <p class="text-muted">
                              January 13, 2021 - January 14, 2021
                            </p>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="detail-item">
                            <p class="text-dark">Can be used on</p>
                            <p class="text-muted">All items in store</p>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="detail-item">
                            <p class="text-dark">Store</p>
                            <p class="text-muted">
                              <a href="/store/details/undefined"></a>
                            </p>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="detail-item">
                            <p class="text-muted">Coupon status</p>
                            <p class="text-dark">
                              <span class="text-default">Expired</span>
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div class="card-body">
                        <a href="#" class="card-link text-primary">
                          Visit Store
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ContainerMarketPlace3>
  );
}

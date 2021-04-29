import React from 'react'
import ContainerMarketPlace3 from '../../components/layouts/ContainerMarketPlace3'
import AccountMenuSidebar from '../../components/partials/account/AccountMenuSidebar'

export default function Disputes() {
  const breadCrumb = [
    {
        text: 'Home',
        url: '/',
    },
    {
        text: 'Account / Disputes',
    },
];
    return (
        <ContainerMarketPlace3>
        <section className="ps-my-account ps-page--account pt-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="ps-page__left">
                  <AccountMenuSidebar selectedTab={"Disputes"} />
                </div>
              </div>
              <div className="col-lg-9">
                <div className="ps-page__content card">
                  <div className="ps-section--account-setting">
                    <div className="card-header border-0 py-5">
                      <h3 className="card-title align-items-start flex-column">
                        <span className="card-label font-weight-bolder text-dark">
                          Disputes
                        </span>
                      </h3>
                    </div>
                    <div className="card-body pt-3 pb-3" id="pills-tabContent">
                    <div className="table-responsive">
                      <table
                        className="table table-head-custom table-head-bg table-borderless table-vertical-center"
                      >
                        <thead>
                          <tr className="text-uppercase">
                            <th className="pl-0">
                              <span className="text-muted">#</span>
                            </th>
                            <th style={{minWidth: "150px"}}>
                              <span className="text-dark-75">DISPUTE INFO</span>
                            </th>
                            <th style={{minWidth: "100px"}}>
                              <span className="text-dark">STORE INFO</span>
                            </th>
                            <th style={{minWidth: "130px"}}>
                              <span className="text-dark">ORDER INFO</span>
                            </th>
                            <th style={{minWidth: "100px"}}>
                              <span className="text-dark">PRODUCT INFO</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="pl-0">
                              <a
                                href="#"
                                className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg"
                                >1</a
                              >
                            </td>
                            <td>
                              <span
                                className="text-dark-75 font-weight-bolder d-block font-size-lg"
                                >Mar 21, 2021</span
                              >
                              <span
                                className="d-block text-muted font-weight-bolder font-size-sm"
                                >5:21 PM</span
                              >
                            </td>
                            <td>
                              <a
                                href="#"
                                className="text-primary font-weight-bolder text-hover-primary font-size-lg"
                                >BD-42323179380</a
                              >
                              <span
                                className="text-dark-75 font-weight-bolder d-block font-size-lg"
                                >Total Item: 1</span
                              >
                            </td>
                            <td>
                              <span
                                className="d-block text-muted font-weight-bolder font-size-sm"
                                >520.00</span
                              >
                            </td>
                            <td>
                              <span
                                className="d-block text-muted font-weight-bolder font-size-sm"
                                >COD</span
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ContainerMarketPlace3>
    )
}

import React, {useEffect, useState} from "react";
import ContainerMarketPlace3 from "../../components/layouts/ContainerMarketPlace3";
import AccountMenuSidebar from "../../components/partials/account/AccountMenuSidebar";
import {Link} from 'react-router-dom'
import {processGetRequest} from "../../services/baseServices";

const MyOrders = () => {
  const breadCrumb = [
    {
        text: 'Home',
        url: '/',
    },
    {
        text: 'Account / Orders',
    },
];


  const [orderList , setOrderList] = useState(["1"])


  useEffect(()=>{
/*
    processGetRequest('',{} ,true).then((res)=>{
      setOrderList(res)
    })*/

  },[])


  const OrderComponent = () => {

    return(
        <>{orderList && orderList.map((data , index) =>(
              <>
                <tr>
                  <td className="pl-0">
                    <a
                        href="#"
                        className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg">
                      1
                    </a>
                  </td>
                  <td>
                              <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                Mar 21, 2021
                              </span>
                    <span className="d-block text-muted font-weight-bolder font-size-sm">
                                5:21 PM
                              </span>
                  </td>
                  <td>
                    <a
                        href="#"
                        className="text-primary font-weight-bolder text-hover-primary font-size-lg"
                    >
                      BD-42323179380
                    </a>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                Total Item: 1
                              </span>
                  </td>
                  <td>
                              <span className="d-block text-muted font-weight-bolder font-size-sm">
                                520.00
                              </span>
                  </td>
                  <td>
                              <span className="d-block text-muted font-weight-bolder font-size-sm">
                                COD
                              </span>
                  </td>
                  <td>
                              <span className="d-block text-muted font-weight-bolder font-size-sm">
                                Unpaid
                              </span>
                  </td>
                  <td>
                              <span className="d-block text-muted font-weight-bolder font-size-sm">
                                Pending
                              </span>
                  </td>
                  <td className="pr-0 text-right">
                    <a
                        className="btn btn-block btn-sm btn-outline-primary"
                        target="_blank"
                        href="http://localhost/shukran-backend/admin/order-detail"
                    >
                      View
                    </a>

                    <Link
                        className="btn btn-block btn-sm btn-outline-success"
                        target="_blank"
                        to={`/invoice/`}>
                      Invoice

                    </Link>

                  </td>
                </tr>
              </>
          ))}
        </>)}



  return (
    <ContainerMarketPlace3>
      <section className="ps-my-account ps-page--account pt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="ps-page__left">
                <AccountMenuSidebar selectedTab={"My Orders"} />
              </div>
            </div>
            <div className="col-lg-9">
              <div className="ps-page__content card">
                <div className="ps-section--account-setting">
                  <div class="card-header border-0 py-5">
                    <h3 class="card-title align-items-start flex-column">
                      <span class="card-label font-weight-bolder text-dark">
                        My Orders
                      </span>
                    </h3>
                  </div>

                  <div class="card-body pt-3 pb-3" id="pills-tabContent">
                    <div class="table-responsive">
                      <table class="table table-head-custom table-head-bg table-borderless table-vertical-center">
                        <thead>
                          <tr class="text-uppercase">
                            <th class="pl-0">
                              <span class="text-muted">#</span>
                            </th>
                            <th style={{ minWidth: "100px" }} class="pl-7">
                              <span class="text-dark-75">Date</span>
                            </th>
                            <th style={{ minWidth: "100px" }}>
                              <span class="text-dark">Order Item</span>
                            </th>
                            <th style={{ minWidth: "80px" }}>
                              <span class="text-dark">Amount</span>
                            </th>
                            <th style={{ minWidth: "150px" }}>
                              <span class="text-dark">PAYMENT METHOD</span>
                            </th>
                            <th style={{ minWidth: "150px" }}>
                              <span class="text-dark">PAYMENT Status</span>
                            </th>
                            <th style={{ minWidth: "100px" }}>
                              <span class="text-dark">Status</span>
                            </th>
                            <th
                              class="text-right"
                              style={{ minWidth: "120px" }}
                            >
                              <span class="text-dark">action</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                            <OrderComponent/>
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
  );
};

export default MyOrders;

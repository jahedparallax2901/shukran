import React, {useEffect, useState} from "react";
import ContainerMarketPlace3 from "../../components/layouts/ContainerMarketPlace3";
import AccountMenuSidebar from "../../components/partials/account/AccountMenuSidebar";
import {Link} from 'react-router-dom'
import {processGetRequest} from "../../services/baseServices";
import {getLocalAuthData} from "../../helpers/utils";
import moment from "moment"

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


  const [orderList , setOrderList] = useState([])


  useEffect(()=>{
    if (getLocalAuthData() !== null){
        processGetRequest('/order-lists',{} ,true).then((res)=>{
          setOrderList(res.ordered_items)
        })
    }


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
                      {index+1}
                    </a>
                  </td>
                  <td>
                              <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                {moment(data?.created_at).format('ll')}
                              </span>
                    <span className="d-block text-muted font-weight-bolder font-size-sm">
                                {moment(data?.created_at).fromNow()}
                              </span>
                  </td>
                  <td>
                    <Link
                      to={`/product/`+data?.store_product[0]?.product_id}
                      className="text-primary font-weight-bolder text-hover-primary font-size-lg"
                    >{data?.id}</Link>

                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                {/*Total Item:*/}
                              </span>
                  </td>
                  <td>
                              <span className="d-block text-muted font-weight-bolder font-size-sm">
                                {data?.total_amount}
                              </span>
                  </td>
                  <td>
                              <span className="d-block text-muted font-weight-bolder font-size-sm">
                                {data?.order?.payment?.name}
                              </span>
                  </td>
                  <td>
                              <span className="d-block text-muted font-weight-bolder font-size-sm">
                                {data?.order?.payment_status === 1 && 'Paid' }
                                {data?.order?.payment_status === 2 && 'Unpaid' }
                              </span>
                  </td>
                  <td>
                              <span className="d-block text-muted font-weight-bolder font-size-sm">
                                {data?.status_detail?.name}
                              </span>
                  </td>
                  <td className="pr-0 text-right">
                   {/* <a className="btn btn-block btn-sm btn-outline-primary"
                        target="_blank"
                        href={`/product/`+data?.store_product[0]?.product_id}>
                      View
                    </a>*/}

                    <Link
                        className="btn btn-block btn-sm btn-outline-success"
                        target="_blank"
                        to={`/invoice/${data.id}`}>
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

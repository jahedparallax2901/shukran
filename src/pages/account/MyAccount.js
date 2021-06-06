import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ContainerMarketPlace3 from "../../components/layouts/ContainerMarketPlace3";
import AccountMenuSidebar from "../../components/partials/account/AccountMenuSidebar";
import { processGetRequest } from "../../services/baseServices";
import emptyUser from '../../assets/img/users/1.png';

export default function MyAccount() {
  const [userDetails, setUserDetails] = useState();
  const breadCrumb = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Account / My Account",
    },
  ];

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = () => {
    processGetRequest("/user-details", {}, true)
      .then((res) => {
        console.log(res);
        setUserDetails(res.user_info);
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <ContainerMarketPlace3>
      <section className="ps-my-account ps-page--account pt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="ps-page__left">
                <AccountMenuSidebar selectedTab={"My Account"} />
              </div>
            </div>
            <div className="col-lg-9">
              <div className="ps-page__content card">
                <div className="ps-section--account-setting">
                  <div className="card-header border-0 py-5">
                    <h3 className="card-title align-items-start flex-column">
                      <span className="card-label font-weight-bolder text-dark">
                        My Account
                      </span>
                    </h3>
                  </div>

                  <div
                    className="card-body pt-3 pb-3 user-profile"
                    id="pills-tabContent"
                  >
                    <div className="d-flex flex-wrap">
                      <img
                        className="user-image"
                        src={userDetails?.details?.image || emptyUser}
                        alt="User"
                      />
                      <div className="ml-0 ml-md-5 mt-4 mt-md-0">
                        <h4 className="font-weight-bold">
                          {userDetails?.name || "N/A"}
                        </h4>
                        <p className="font-weight-bold">
                          +880-{userDetails?.phone || "N/A"}
                        </p>
                        <p className="font-weight-bold">
                          {userDetails?.email || "N/A"}
                        </p>
                        {userDetails?.details?.gender && (
                          <p className="font-weight-bold">
                            {userDetails?.details?.gender === "m"
                              ? "Male"
                              : "Gender"}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="my-5">
                      <h4>Addresses</h4>
                      {userDetails?.addresses?.length > 0 &&
                        userDetails?.addresses?.map((data, index) => (
                            <div className="address-list d-inline-block p-4 border mr-4 my-2" key={data?.id}>
                              <div className="address-item">
                                <div
                                  key={index}
                                  className="address-box -default"
                                >
                                  <h4 className="name">{data?.name}</h4>
                                  <p className="address-line d-flex">
                                    <span className="icon mr-2">
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 1024 1024"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
                                      </svg>
                                    </span>
                                    <span className="text">
                                      <span className="d-block">
                                        <strong>Email: </strong>
                                        {data?.email}
                                      </span>
                                    </span>
                                  </p>
                                  <p className="address-line d-flex">
                                    <span className="icon mr-2">
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 1024 1024"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"></path>
                                      </svg>
                                    </span>
                                    <span className="text">
                                      <span className="d-block">
                                        <strong>Phone: </strong> +880-
                                        {data?.phone_number}
                                      </span>
                                    </span>
                                  </p>
                                  <p className="address-line d-flex">
                                    <span className="icon mr-2">
                                      <svg
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                      </svg>
                                    </span>
                                    <span className="text">
                                      <span className="d-block">
                                        <strong>Address: </strong>{" "}
                                        {data.address}
                                      </span>
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                        ))}
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

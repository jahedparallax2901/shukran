import React, {Component, useState , useEffect} from "react";
import ContainerMarketPlace3 from "../../components/layouts/ContainerMarketPlace3";
import AccountMenuSidebar from "../../components/partials/account/AccountMenuSidebar";
import Checkout from "../Checkout";
import {processDeleteRequest, processGetRequest, processPostRequest} from "../../services/baseServices";
import {Button, Form, Modal} from "react-bootstrap";
import {toast} from "react-toastify";

const ShippingAddress = () => {

    const breadCrumb = [
      {
          text: 'Home',
          url: '/',
      },
      {
          text: 'Account / Shipping Address',
      },
  ];


    const [deliverAddress, setDeliveryAddress] = useState([]);
    const [isShowModal, setIsShowModal] = useState(false);
    const [isEdited, setIsEdited] = useState(false);
    const [editedId, setEditedId] = useState("");
    const [selectedAddress, setSelectedAddress] = useState(0);
    const [formData, setFormData] = useState({
      country_code: "+880",
      country: "bangladesh",
    });


  const [country, setCountry] = useState([
    { id: 0, name: "--select address--" },
    { id: 1, name: "Bangladesh" },
  ]);
  const [division, setDivision] = useState([]);
  const [district, setDistrict] = useState([]);
  const [upazila, setupazila] = useState([]);
  const [upazilaArea, setupazilaArea] = useState([]);

  const [divisionShow, setDivisionShow] = useState(true);
  const [districtShow, setDistrictShow] = useState(false);
  const [upazilaShow, setUpdazillaShow] = useState(false);
  const [upazilaAreaShow, setupazilaAreaShow] = useState(false);

  const [orderProductList, setOrderProductList] = useState([]);
  const [checkoutData, setCheckoutData] = useState([]);


    useEffect(async () => {
      await getAllData();
      await getLocationV2("/division-list", null);
    }, []);

    const getAllData = () => {
      processGetRequest("/user-details", {}, true).then((res) => {
        console.log(res);
        setDeliveryAddress(res.user_info.addresses);
      });
    };

    const handleOnChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      console.log(formData);
    };


  const handleShowModal = (request, id) => {
    console.log('checkX', deliverAddress)
    if (request === "put") {
      setFormData(deliverAddress[selectedAddress])
      setIsEdited(true);
      setEditedId(id);
    } else {
      setFormData(null);
      setIsEdited(false);
    }
    setIsShowModal(true);
  };

    const handleHideModal = () => {
      setIsShowModal(false);
    };



     const getLocationV2 = (url, id) => {
      if (id !== null) {
        processGetRequest(url + "/" + id, {}, true).then((res) => {
          if (url === "/division-list") {
            setDivision(res);
          }
          if (url === "/division-district-list") {
            setDistrict(res);
            setDistrictShow(true);

            setUpdazillaShow(false);
            setupazilaAreaShow(false);
          }
          if (url === "/district-upazila-list") {
            setupazila(res);
            setUpdazillaShow(true);
            setupazilaAreaShow(false);
          }
          if (url === "/upazila-area-list") {
            setupazilaArea(res);
            setupazilaAreaShow(true);
          }
        });
      } else {
        processGetRequest(url, {}, true).then((res) => {
          if (url === "/division-list") {
            setDivision(res);
            setDivisionShow(true);
          }
        });
      }
  };


      const handleFormSubmit = (e, url) => {
        e.preventDefault();
        processPostRequest(url, formData, true)
            .then((res) => {
              if (res.status) {
                setIsEdited(false)
                setEditedId(null)
                setFormData(null);
                console.log(res);
                toast.success(res.message);
                getAllData();
                handleHideModal();
              }

            })
            .catch((err) => {
              toast.error(err.message);
              console.log(err);
            });
      };


      const handleDeleteData = (url) => {
        processDeleteRequest(url)
            .then((res) => {
              getAllData();
            })
            .catch((err) => {
              console.log(err);
            });
      };


    const DeliveryAddress = () => {
       return(
           <>
             {deliverAddress && deliverAddress.map((data, index) => (
                 <>
                   <div className="address-list d-inline-block p-4 border">
                     <div className="address-item">
                      <div key={index} className="address-box -default">
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
                                  <path
                                      d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
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
                                  <path
                                      d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"></path>
                                </svg>
                              </span>
                       <span className="text">
                                <span className="d-block">
                                  <strong>Phone: </strong> +880-{data?.phone_number}
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
                                  <strong>Address: </strong> {data.address}
                                </span>
                              </span>
                     </p>
                     <label className="action d-block mb-2">
                       <input
                           type="radio"
                           name="billing_address"
                           className="d-inline-block mr-2"
                           checked=""
                       />
                       <span
                           className="d-inline-block"
                           style={{transform: "translateY(-2px)"}}
                       >
                                Default Billing Address
                              </span>
                     </label>
                     <div className="actions mb-0">
                              <span onClick={() =>{
                                setSelectedAddress(index)
                                handleShowModal("put", data.id)
                              } } className="btn btn-lg action text-info mr-4">
                                Edit
                              </span>
                       <span onClick={() => {
                         handleDeleteData(`/remove-address/${data.id}`);
                       }} className="btn btn-lg action text-danger">
                                Delete
                              </span>
                     </div>
                   </div>
                     </div>
                   </div>
                 </>
             ))}
           </>
       )
     }

    return (
      <ContainerMarketPlace3>


        <Modal
            className="info-modal"
            show={isShowModal}
            onHide={() => {
              handleHideModal();
            }}
        >
          <Modal.Body>
            <Modal.Header closeButton>
              <Modal.Title>
                <h2
                    style={{
                      marginTop: "5px",
                      marginBottom: "5px",
                      color: "red",
                      fontWeight: "bold",
                    }}
                >
                  {isEdited === true && 'Edit ADDRESS'}
                  {isEdited === false && 'ADD ADDRESS'}

                </h2>
              </Modal.Title>
            </Modal.Header>


            <Form onSubmit={(e) => {
              if (isEdited === true) {
                handleFormSubmit(e, "/edit-address/" + editedId);
              } else {
                handleFormSubmit(e, "/add-address");
              }
            }}
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ marginTop: "1vw", fontSize: "14px" }}>
                  Name <span className="text-danger">*</span>{" "}
                </Form.Label>
                <Form.Control
                    required
                    name={`name`}
                    defaultValue={
                      isEdited ? deliverAddress[selectedAddress]?.name : ""
                    }
                    onChange={(e) => handleOnChange(e)}
                    style={{ height: "40px", fontSize: "12px" }}
                    type="text"
                    placeholder="Enter your name"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ marginTop: "0.5vw", fontSize: "14px" }}>
                  Phone <span className="text-danger">*</span>{" "}
                </Form.Label>
                {/*  <Form.Control style={{height: '40px' , fontSize: '12px'}} type="email" placeholder="Enter your name" />
                            <Form.Text className="text-muted">
                            </Form.Text>*/}

                <div className="input-with-icon">
                  <div className="input-group">
                    <select
                        onChange={(e) => handleOnChange(e)}
                        name="country_code"
                        className="form-control"
                        style={{
                          height: "40px",
                          fontSize: "12px",
                          flex: "0 0 80px",
                          padding: "0 10px 0 5px",
                        }}
                    >
                      <option value="+880">+880</option>
                    </select>
                    <Form.Control
                        name={`phone_number`}
                        defaultValue={
                          isEdited
                              ? deliverAddress[selectedAddress].phone_number
                              : ""
                        }
                        onChange={(e) => handleOnChange(e)}
                        style={{ height: "40px", fontSize: "12px" }}
                        pattern="[0-9]*"
                        inputmode="numeric"
                        type="text"
                        required
                        maxLength="11"
                        autoComplete={`off`}
                        placeholder={"your phone number"}
                    />
                  </div>
                </div>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ marginTop: "0.5vw", fontSize: "14px" }}>
                  Email <span className="text-danger">*</span>{" "}
                </Form.Label>
                <Form.Control
                    name={`email`}
                    defaultValue={
                      isEdited ? deliverAddress[selectedAddress].email : ""
                    }
                    onChange={(e) => handleOnChange(e)}
                    style={{ height: "40px", fontSize: "12px" }}
                    type="email"
                    placeholder="Enter email address"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ marginTop: "0.5vw", fontSize: "14px" }}>
                  Address <span className="text-danger">*</span>{" "}
                </Form.Label>
                <Form.Control
                    name={`address`}
                    defaultValue={
                      isEdited ? deliverAddress[selectedAddress].address : ""
                    }
                    onChange={(e) => handleOnChange(e)}
                    style={{ height: "40px", fontSize: "12px" }}
                    type="text"
                    placeholder="Enter address"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              {/*  <DynamicAddress/>*/}

              {/*Country*/}
              {/*  <Form.Label style={{marginTop: '0.5vw', fontSize: '14px'}}>Country <span className="text-danger">*</span> </Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                console.log(e.target.value)
                                getLocationV2('/division-list', null)
                            }}
                            index={`0`}
                            style={{height: '40px' , fontSize: '12px'}}
                            as="select"
                            size={'lg'}>

                            {country && country.map((data , index) =>(
                                <>
                                    <option id={data.id} value={data.id}> {data.name} </option>
                                </>
                            ))}

                        </Form.Control>*/}

              {divisionShow && (
                  <>
                    <Form.Label style={{ marginTop: "0.5vw", fontSize: "14px" }}>
                      Division <span className="text-danger">*</span>{" "}
                    </Form.Label>
                    <Form.Control
                        onChange={(e) => {
                          console.log(e.target.value);
                          getLocationV2("/division-district-list", e.target.value);
                          handleOnChange(e);
                        }}
                        name={"division_id"}
                        index={`0`}
                        style={{ height: "40px", fontSize: "12px" }}
                        as="select"
                        size={"lg"}
                    >
                      <option value=""> --select division-- </option>
                      {division &&
                      division.map((data, index) => (
                          <>
                            <option id={data.id} value={data.id}>
                              {" "}
                              {data.name}{" "}
                            </option>
                          </>
                      ))}
                    </Form.Control>
                  </>
              )}

              {districtShow && (
                  <>
                    <Form.Label style={{ marginTop: "0.5vw", fontSize: "14px" }}>
                      District <span className="text-danger">*</span>{" "}
                    </Form.Label>
                    <Form.Control
                        name={"district_id"}
                        onChange={(e) => {
                          console.log(e.target.value);
                          getLocationV2("/district-upazila-list", e.target.value);
                          handleOnChange(e);
                        }}
                        index={`0`}
                        style={{ height: "40px", fontSize: "12px" }}
                        as="select"
                        size={"lg"}
                    >
                      <option value=""> --select District-- </option>
                      {district &&
                      district.map((data, index) => (
                          <>
                            <option id={data.id} value={data.id}>
                              {" "}
                              {data.name}{" "}
                            </option>
                          </>
                      ))}
                    </Form.Control>
                  </>
              )}

              {upazilaShow && (
                  <>
                    <Form.Label style={{ marginTop: "0.5vw", fontSize: "14px" }}>
                      upazila <span className="text-danger">*</span>{" "}
                    </Form.Label>
                    <Form.Control
                        name={"upazila_id"}
                        onChange={(e) => {
                          console.log(e.target.value);
                          getLocationV2("/upazila-area-list", e.target.value);
                          handleOnChange(e);
                        }}
                        index={`0`}
                        style={{ height: "40px", fontSize: "12px" }}
                        as="select"
                        size={"lg"}
                    >
                      <option value=""> --select upazila-- </option>
                      {upazila &&
                      upazila.map((data, index) => (
                          <>
                            <option id={data.id} value={data.id}>
                              {" "}
                              {data.name}{" "}
                            </option>
                          </>
                      ))}
                    </Form.Control>
                  </>
              )}

              {upazilaAreaShow && (
                  <>
                    <Form.Label style={{ marginTop: "0.5vw", fontSize: "14px" }}>
                      Upazila Thana <span className="text-danger">*</span>{" "}
                    </Form.Label>
                    <Form.Control
                        name={"area_id"}
                        onChange={(e) => {
                          console.log(e.target.value);
                        }}
                        index={`0`}
                        style={{ height: "40px", fontSize: "12px" }}
                        as="select"
                        size={"lg"}
                    >
                      <option value=""> --select upazila thana-- </option>
                      {upazilaArea &&
                      upazilaArea.map((data, index) => (
                          <>
                            <option id={data.id} value={data.id}>
                              {" "}
                              {data.name}{" "}
                            </option>
                          </>
                      ))}
                    </Form.Control>
                  </>
              )}

              <Form.Group onChange={(e) => handleOnChange(e)}>
                <Form.Label style={{ marginTop: "1.5vw", fontSize: "14px" }}>
                  Address Type <span className="text-danger">*</span>{" "}
                </Form.Label>
                <div className={"d-flex"}>
                  {/*
                defaultValue={
                isEdited ? deliverAddress[selectedAddress].address : ""
              }
                */}
                  <Form.Check
                      defaultChecked={deliverAddress[selectedAddress]?.address_type === 0 && true}
                      name={`address_type`}
                      value={0}
                      type="radio"
                      className={"mx-3"}
                      id="formHorizontalRadios1"
                  />
                  <Form.Check.Label>{`Home address`}</Form.Check.Label>
                  <Form.Check
                      defaultChecked={deliverAddress[selectedAddress]?.address_type === 1 && true}
                      name={`address_type`}
                      value={1}
                      className={"mx-3"}
                      type="radio"
                      id="formHorizontalRadios2"
                  />
                  <Form.Check.Label>{`Office address`}</Form.Check.Label>
                  <Form.Check
                      defaultChecked={deliverAddress[selectedAddress]?.address_type === 2 && true}
                      name={`address_type`}
                      value={2}
                      className={"mx-3"}
                      type="radio"
                      id="formHorizontalRadios3"
                  />
                  <Form.Check.Label>{`Other`}</Form.Check.Label>
                </div>
              </Form.Group>

              <Modal.Footer>
                <Button
                    onClick={handleHideModal}
                    style={{ height: "2vw", width: "5vw", fontSize: "12px" }}
                    variant={`danger`}
                >
                  Close
                </Button>
                <Button
                    type={`submit`}
                    style={{ height: "2vw", width: "7vw", fontSize: "12px" }}
                    variant={`primary`}
                >
                  {isEdited === true && 'Update Address'}
                  {isEdited === false && 'Save Address'}
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>


        <section className="ps-my-account ps-page--account pt-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="ps-page__left">
                  <AccountMenuSidebar selectedTab={"Shipping Address"} />
                </div>
              </div>
              <div className="col-lg-9">
                <div className="ps-page__content card">
                  <div className="ps-section--account-setting">
                    <div class="card-header border-0 py-5">
                      <h3 class="card-title align-items-start flex-column">
                        <span class="card-label font-weight-bolder text-dark">
                          Shipping Address
                        </span>
                      </h3>
                    </div>

                    <div class="card-body pt-3 pb-3" id="pills-tabContent">
                      <div class="mb-3">
                        <button
                          onClick={()=> {
                            handleShowModal('post',null)
                          }}
                          type="button"
                          class="btn btn-light btn-inline-block btn-lg"
                        >
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
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                          Add New Shipping Address
                        </button>
                      </div>

                          <DeliveryAddress/>

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

export default ShippingAddress;

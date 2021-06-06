import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import ContainerMarketPlace3 from "../components/layouts/ContainerMarketPlace3";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselStandard } from "../utilities/carousel-helpers";
import {
  processDeleteRequest,
  processGetRequest,
  processPostRequest,
} from "../services/baseServices";
import "../assets/css/checkout.css"
import "../assets/css/payment_option.css"


import {
  FiX,
  MdEdit,
  HiPlus,
  BiLeftArrowCircle,
  BiRightArrowCircle, IoIosArrowForward, IoIosArrowBack,
} from "react-icons/all";
import {
  Modal,
  ModalBody,
  ModalTitle,
  ModalDialog,
  ModalFooter,
  ModalDialogProps,
  ModalProps,
  Button,
  Form,
  FormGroup,
  FormLabel,
  FormText,
} from "react-bootstrap";


import ScrollMenu from "react-horizontal-scrolling-menu";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";
import ModalHeader from "react-bootstrap/ModalHeader";
import ProductDealOfDay from "../components/product/ProductDealOfDay";
import {generateTempArray} from "../utilities/common-helpers";
import SkeletonProduct from "../components/partials/shared/SkeletonProduct";
import Success from "../components/success/Success";
import {Empty} from 'antd'
import {Link} from "react-router-dom";

import { getCartItems, handleClearCart } from "../redux";
import { connect } from "react-redux";

const Checkout = (props) => {
  const [defaultSelected, setDefaultSelected] = useState([0]);

  const [selectedAddress, setSelectedAddress] = useState(0);
  const [selectedContact, setSelectedContact] = useState(0);

  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowContactModal, setIsShowContactModal] = useState(false);

  const [isEdited, setIsEdited] = useState(false);
  const [editedId, setEditedId] = useState("");

  const [deliverAddress, setDeliveryAddress] = useState([]);
  const [contacts, setContacts] = useState([]);

  const history = useHistory();


  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const [formData, setFormData] = useState({
    country_code: "+880",
    country: "bangladesh",
  });

  const [numberOfPicture, setNumberOfPicture] = useState([
    {
      url: "https://parallaxlogic.dev/shukran-view/img/cash.jpg",
      name: "Cash on Delivery",
    },
    {
      url: "https://parallaxlogic.dev/shukran-view/img/ssl.jpg",
      name: "SSL Commerce",
    },
    {
      url: "https://parallaxlogic.dev/shukran-view/img/payment-method/02.png",
      name: "Bkash",
    },
    {
      url: "https://parallaxlogic.dev/shukran-view/img/payment-method/01.jpg",
      name: "Rocket",
    }
  ]);

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
  const [select , setSelect] = useState(0)
  const [selectCntct , setSelectCntct] = useState(0)
  const [selectPaymentGateWay , setSelectPaymentGateWay] = useState(1)

  const [isSuccessPlace , setIsSuccessPlace] = useState(false)


  useEffect(async () => {
    await orderSummary();
    await getAllData();
    await getLocationV2("/division-list", null);
  }, []);

  useEffect( ()=>{
    console.log(isEdited)
  },[isEdited])

  const getAllData = () => {
    processGetRequest("/user-details", {}, true).then((res) => {
      console.log(res);
      setDeliveryAddress(res?.user_info?.addresses);
      setContacts(res?.user_info?.contacts);
    });
  };

  const orderSummary = () => {
    processGetRequest("/get-checkout", {}, true)
        .then((res) => {
          res.checkout_items.map((data, index) => {
            data.store_product.map((data1, index1) => {

              setOrderProductList(orderProductList => [...orderProductList , data1]);
            });
          });
          setCheckoutData(res);
        })
        .catch((err) => {
          console.log(err);
        });
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

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleShowContactModal = (request,id) => {


    if (request === "put") {
      setIsEdited(true);
      setEditedId(id);
    } else {
      setIsEdited(false);
    }
    setIsShowContactModal(true);
  };
  const handleHideContactModal = () => {
    setIsShowContactModal(false);
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
            handleHideContactModal();
          }

        })
        .catch((err) => {
          toast.error(err.message);
          console.log(err);
        });
  };


  const placeOrder = (e) => {
    e.preventDefault();

    if (contacts[selectCntct]?.id === undefined){
      toast.warning('Please select contact number')
      setSelectCntct(0)
    }else if (deliverAddress[select]?.id === undefined){
      toast.warning('Please select delivery address')
      select(0)
    }
    else {
      placeOrderV1()
    }
  };

  const placeOrderV1 = () =>{
    processPostRequest("/place-order", {
      checkout_id: checkoutData?.checkout?.id,
      address_id: deliverAddress[select]?.id,
      contact_id: contacts[selectCntct]?.id,
      payment_gateway_id: selectPaymentGateWay,
    }, true)
        .then((res) => {
          if (res.status === 200) {
            if (selectPaymentGateWay === 2){
              if (res?.data?.GatewayPageURL){
                window.location.href = res?.data?.GatewayPageURL
              }else {
                history.push('/payment-failed')
              }
            }else {
              props.getCartItems((data, isSuccess)=>{
                console.log("Cart response", data);
                if(data?.cart_items?.length <= 0 ){
                  localStorage.removeItem("cart_id");
                  props.handleClearCart()
                }
              })
              toast.success("Order successfully placed");
              setIsSuccessPlace(true)
            }
          }
        })
        .catch((err) => {
          toast.error(err.message);
          setSelectCntct(0)
        });
  }

  const handleDeleteData = (url) => {
    processDeleteRequest(url)
        .then((res) => {
          getAllData();
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const setSelectContact = (e) => {
    console.log(e);
    //setSelectedContact(e)
  };

  const PaymentOption = () => {
    return (
        <>
          <ScrollMenu
              arrowLeft={
                <div className="payment-mathod-arrowLeft" style={{
                  height: '45px',
                  width: '45px',
                  backgroundColor: '#e2e2e2',
                  borderRadius: '50%',
                  lineHeight: '45px',
                  textAlign: 'center'

                }}>
                  <IoIosArrowBack />
                </div>
              }
              arrowRight={
                <div className="payment-mathod-arrowRight" style={{
                  height: '45px',
                  width: '45px',
                  backgroundColor: '#e2e2e2',
                  borderRadius: '50%',
                  lineHeight: '45px',
                  textAlign: 'center'

                }}>
                  <IoIosArrowForward />
                </div>
              }
              data={numberOfPicture.map((data, index) => (
                  <div key={index} className="owl-item" style={{ minWidth: '230px', marginRight: '25px' }}>
                    <div className="single-checkout-body payment-body">
                      <div className="checkout-body-location">
                        <h4>
                          <img src={data.url} alt />
                        </h4>
                        <div className="location-edit">
                          <button type="button">
                            <FiX />
                          </button>
                        </div>
                      </div>
                      <span>{data.name}</span>
                    </div>
                  </div>
              ))}
          />
        </>
    );
  };

  const DeliveryAddress = () => {
    return (
        <>
          {deliverAddress &&
          deliverAddress.map((data, index) => (
              <>
                <div
                    onClick={(e) => {
                      setSelectedAddress(index);
                      setSelect(index)
                    }}
                    id={index}
                    key={index}
                    //single-checkout-body single-checkout-body-first
                    className={"single-checkout-body single-checkout"+(index === select ? "-body-first" : "" )}
                >
                  <div className="checkout-body-location">
                    {deliverAddress[index].address_type === 0 && (
                        <h4>Home Address</h4>
                    )}
                    {deliverAddress[index].address_type === 1 && (
                        <h4>Office Address</h4>
                    )}
                    {deliverAddress[index].address_type === 2 && <h4>Other</h4>}

                    <div className="location-edit">
                      <button
                          onClick={() => handleShowModal("put", data.id)}
                          type="button"
                      >
                        <MdEdit />
                      </button>
                      <button
                          onClick={() => {
                            handleDeleteData(`/remove-address/${data.id}`);
                          }}
                          style={{ marginLeft: "5px" }}
                          type="button"
                      >
                        <FiX />
                      </button>
                    </div>
                  </div>
                  <p>{data.name}</p>
                  <p>{data?.address} </p>
                </div>
              </>
          ))}
        </>
    );
  };

  const ContactNumber = () => {
    return (
        <>
          {contacts &&
          contacts.map((data, index) => (
              <>
                <div
                    onClick={() => {
                      setSelectContact(index);
                      setSelectCntct(index)
                    }}
                    style={{ marginTop: "5px" }}
                    id={index}
                    key={index}
                    className={"single-checkout-body "+(index === selectCntct ? "single-checkout-body-first" : "" ) +" card-number"}

                >
                  <div className="checkout-body-location">
                    <h4>phone number</h4>
                    <div className="location-edit">
                      <button
                          onClick={() => handleShowContactModal("put" , data.id)}
                          type="button"
                      >
                        <MdEdit />
                      </button>
                      <button
                          onClick={() => {
                            handleDeleteData(`/remove-contact/${data.id}`);
                          }}
                          style={{ marginLeft: "5px" }}
                          type="button"
                      >
                        <FiX />
                      </button>
                    </div>
                  </div>
                  <p>{data?.phone_number}</p>
                </div>
              </>
          ))}
        </>
    );
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

  const OrderSummary = () => {
    return (
        <>
          {orderProductList &&
          orderProductList.map((data, index) => (
              <div key={index} className="block-card-body border-bottom pt-1">
                <h4>{data?.product?.name}</h4>
                <p className="d-flex justify-content-between">
                  <span className>{data.quantity}</span>
                  <span className="mx-auto">X</span>
                  <span className="mx-auto">
                  ৳ {data?.price}
                </span>
                  <span className="mx-auto">X</span>
                  <span className>৳ {data?.price}</span>
                </p>
              </div>
          ))}
        </>
    );
  };

  const DeliveryCharge = () => {
    return (
        <>
          <div key={`500`} className="block-card-body">
            <p className="d-flex mb-3">
              <span className="mr-2">Subtotal</span>
              <span className="ml-auto">
              ৳ {checkoutData?.checkout?.sub_total_amount}
            </span>
            </p>
            <p className="d-flex mb-3">
              <span className="mr-2">Delivery Charge</span>
              <span className="ml-auto">
              ৳ {checkoutData?.checkout?.delivery_charge}
            </span>
            </p>
            <p className="d-flex mb-3">
              <span className="mr-2">Discount amount</span>
              <span className="ml-auto">
              ৳ {checkoutData?.checkout?.discount_amount}
            </span>
            </p>
            <p className="d-flex">
              <span className="mr-2 font-weight-bold">Total</span>
              <span className="ml-auto text-secondary font-weight-bold">
              ৳ {checkoutData?.checkout?.total_amount}
            </span>
            </p>
          </div>
        </>
    );
  };

  return (
      <ContainerMarketPlace3 title="Checkout" isExpanded={true} isCartAvailable={false}>
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
                setIsEdited(false)
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
                            <option id={data.id} value={data.id} key={data.id}>
                              {" "}
                              {data.name}{" "}
                            </option>
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
                            <option id={data.id} value={data.id} key={data?.id}>
                              {" "}
                              {data.name}{" "}
                            </option>
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
                            <option id={data.id} value={data.id} key={data?.id}>
                              {" "}
                              {data.name}{" "}
                            </option>
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
                            <option id={data.id} value={data.id} key={data?.id}>
                              {" "}
                              {data.name}{" "}
                            </option>
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

        <Modal
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={isShowContactModal}
            onHide={() => {
              handleHideContactModal();
            }}
        >
          <ModalBody>
            <ModalHeader>ADD NEW CONTACT</ModalHeader>

              <input
                  required
                  defaultValue={
                    isEdited ? contacts[selectedContact]?.phone_number : ""
                  }
                  onChange={(e) => handleOnChange(e)}
                  style={{ height: "40px", fontSize: "12px" }}
                  name="phone_number"
                  placeholder="Enter your Phone Number"
                  type="text"
                  id="phone_number"
                  minLength={11}
                  maxLength={11}
                  className="form-control"
              />
            <ModalFooter>
              <Button
                  onClick={handleHideContactModal}
                  style={{ height: "2vw", width: "5vw", fontSize: "12px" }}
                  variant={`danger`}
              >
                Close
              </Button>
              <Button
                  onClick={(e) => {
                    if (isEdited === true){
                      if (formData?.phone_number?.length >10){
                        handleFormSubmit(e, "/edit-contact/"+editedId);
                      }else {
                        toast.error('min & max 11 characters')
                      }

                    }else {
                      if (formData?.phone_number?.length >10){
                        handleFormSubmit(e, "/add-contact");
                      }else {
                        toast.error('min & max 11 characters')
                      }

                    }

                  }}
                  style={{ height: "2vw", width: "7vw", fontSize: "12px" }}
                  variant={`primary`}
              >
                SAVE CHANGE
              </Button>
            </ModalFooter>
          </ModalBody>
        </Modal>


        {isSuccessPlace === true && <Success
            title={'Order Has Been Placed Successfully'}
            message={'We are packaging your things and ship them asap!'}
            link={`/`}
            button_text={'Continue Shopping'}
            link2={`/account/my-orders`}
            button_text_2={`Order List`}
        />}

        {isSuccessPlace === false &&
        <>
          {checkoutData?.checkout_items?.length > 0 ? (
              <div id="homepage-5">
                <div className="container">
                  <div className="checkout-area-inner custom-layout">
                    <div className="row">
                      <div className="col-lg-8 col-md-12 col-sm-12">
                        <div className="checkout-details">
                          <form action>
                            <div className="single-checkout-area ">
                              <div className="single-checkout-top">
                                <div className="checkout-top-title">
                                  <h4>
                                    <span>1</span>
                                  </h4>
                                  <p>Delivery Address</p>
                                </div>
                                <button
                                    onClick={() => handleShowModal("post")}
                                    type="submit"
                                >
                                  <HiPlus /> Add Address
                                </button>
                                <div
                                    role="dialog"
                                    id="addAddress"
                                    aria-modal="true"
                                    className="fade modal show"
                                    tabIndex={-1}
                                >
                                  <div role="document" className="modal-dialog">
                                    <div className="modal-content">
                                      <div className="modal-header border-bottom-0">
                                        <div className="modal-title h4">
                                          {" "}
                                          Add Address
                                        </div>
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                        >
                                          <span aria-hidden="true">×</span>
                                          <span className="sr-only">Close</span>
                                        </button>
                                      </div>
                                      <div className="modal-body">
                                        <div className="form-group">
                                          <label
                                              className="form-label"
                                              htmlFor="name"
                                          >
                                            Name{" "}
                                            <span className="text-danger">*</span>
                                          </label>
                                          <input
                                              name="recipient_name"
                                              required
                                              placeholder="Name"
                                              id="name"
                                              className="form-control"
                                              defaultValue="sahed Rahman"
                                          />
                                          <div className="invalid-feedback">
                                            Recipient name is required
                                          </div>
                                        </div>
                                        <div className="form-group login-form-group">
                                          <label className="form-label">
                                            Phone{" "}
                                            <span className="text-danger">*</span>
                                          </label>
                                          <div className="input-group">
                                            <select
                                                name="country_code"
                                                className="form-control"
                                                required
                                                style={{
                                                  flex: "0 0 85px",
                                                  padding: "0px 10px 0px 5px",
                                                }}
                                            >
                                              <option value={+880}>+880</option>
                                              <option value={+880}>+880</option>
                                              <option value={+1}>+1</option>
                                              <option value={1234}>1234</option>
                                            </select>
                                            <input
                                                required
                                                minLength={10}
                                                maxLength={10}
                                                name="recipient_phone"
                                                placeholder="Phone"
                                                info="hello"
                                                className="form-control"
                                                defaultValue={1610907012}
                                            />
                                            <div className="invalid-feedback">
                                              Please provide a valid phone number.
                                            </div>
                                          </div>
                                        </div>
                                        <div className="form-group">
                                          <label
                                              className="form-label"
                                              htmlFor="email"
                                          >
                                            Email{" "}
                                          </label>
                                          <input
                                              required
                                              name="email"
                                              placeholder="Email"
                                              type="email"
                                              id="email"
                                              className="form-control"
                                              defaultValue="sahed@parallaxlogic.com"
                                          />
                                          <div className="invalid-feedback">
                                            Please provide a valid email address.
                                          </div>
                                        </div>
                                        <div className="form-group">
                                          <label
                                              className="form-label"
                                              htmlFor="address"
                                          >
                                            Address{" "}
                                            <span className="text-danger">*</span>
                                          </label>
                                          <input
                                              required
                                              name="address"
                                              placeholder="Address"
                                              type="text"
                                              id="address"
                                              className="form-control"
                                          />
                                          <div className="invalid-feedback">
                                            Address is required
                                          </div>
                                        </div>
                                        <div className="form-group">
                                          <label
                                              htmlFor="locationCountry"
                                              className="form-label col-form-label"
                                          >
                                            Country{" "}
                                            <span className="text-danger">*</span>
                                          </label>
                                          <select
                                              name="country"
                                              required
                                              id="locationCountry"
                                              className="form-control"
                                          >
                                            <option value>--Select--</option>
                                            <option value="5f2a7c54e7abc4290b6c6212">
                                              Bangladesh
                                            </option>
                                            <option value="5f2fb3783ab94e6114c603f9">
                                              USA
                                            </option>
                                            <option value="5f8c318ea399dc0e03f625ce">
                                              Nepal
                                            </option>
                                            <option value="5ffd230cb604706e685dd30b">
                                              Ugandan{" "}
                                            </option>
                                          </select>
                                          <div className="invalid-feedback">
                                            Please select country.
                                          </div>
                                        </div>
                                        <div className="form-group">
                                          <label
                                              className="form-label"
                                              htmlFor="addressPostCode"
                                          >
                                            Post Code{" "}
                                            <span className="text-danger">*</span>
                                          </label>
                                          <input
                                              required
                                              name="postcode"
                                              placeholder="Post Code"
                                              type="text"
                                              id="addressPostCode"
                                              className="form-control"
                                          />
                                          <div className="invalid-feedback">
                                            Please enter postcode.
                                          </div>
                                        </div>
                                        <div className="form-group">
                                          <label
                                              className="form-label"
                                              htmlFor="address"
                                          >
                                            Address Type
                                          </label>
                                          <div className="address-radio-button">
                                            <div className="custom-control custom-radio custom-control-inline">
                                              <input
                                                  name="address_type"
                                                  type="radio"
                                                  id="homeAddress"
                                                  className="custom-control-input"
                                                  defaultValue={1}
                                              />
                                              <label
                                                  title
                                                  htmlFor="homeAddress"
                                                  className="custom-control-label"
                                              >
                                                Home Address
                                              </label>
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline">
                                              <input
                                                  name="address_type"
                                                  type="radio"
                                                  id="officeAddress"
                                                  className="custom-control-input"
                                                  defaultValue={2}
                                              />
                                              <label
                                                  title
                                                  htmlFor="officeAddress"
                                                  className="custom-control-label"
                                              >
                                                Office Address
                                              </label>
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline">
                                              <input
                                                  name="address_type"
                                                  type="radio"
                                                  id="otherAddress"
                                                  className="custom-control-input"
                                                  defaultValue={3}
                                              />
                                              <label
                                                  title
                                                  htmlFor="otherAddress"
                                                  className="custom-control-label"
                                              >
                                                Other
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-default close-button"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                        >
                                          Close
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-primary save-button"
                                        >
                                          Save Address
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={'d-flex'}>
                              <DeliveryAddress />
                              </div>
                              {/*<div className="single-checkout-body single-checkout-body-first">
                                                <div className="checkout-body-location">
                                                    <h4>Home</h4>
                                                    <div className="location-edit">
                                                        <button type="button"><MdEdit/></button>
                                                        <button style={{marginLeft: '5px'}} type="button"><FiX/></button>
                                                    </div>
                                                </div>
                                                <p>Nikunja 2</p>
                                                <p>Khilkhet, Dhaka,</p>
                                                <p>po: 1214</p>
                                            </div>
                                            <div className="single-checkout-body">
                                                <div className="checkout-body-location">
                                                    <h4>Office</h4>
                                                    <div className="location-edit">
                                                        <button type="button"><MdEdit/></button>
                                                        <button  style={{marginLeft: '5px'}}  type="button"><FiX/></button>
                                                    </div>
                                                </div>
                                                <p>Shahjadpur,</p>
                                                <p>Shahjadpur, Dhaka</p>
                                                <p>po: 1212</p>
                                            </div>*/}
                            </div>
                          </form>
                          <div className="single-checkout-area ">
                            <div className="single-checkout-top">
                              <div className="checkout-top-title">
                                <h4>
                                  <span>2</span>
                                </h4>
                                <p>Contact Number</p>
                              </div>
                              <button
                                  onClick={() => handleShowContactModal("POST")}
                                  type="button"
                                  data-toggle="modal"
                                  data-target="#exampleModalCenter"
                              >
                                <HiPlus /> Add Contact
                              </button>
                              {/* Button trigger modal */}
                              {/* Modal */}
                              <div
                                  className="modal fade"
                                  id="exampleModalCenter"
                                  tabIndex={-1}
                                  role="dialog"
                                  aria-labelledby="exampleModalCenterTitle"
                                  aria-hidden="true"
                              >
                                <div
                                    className="modal-dialog modal-dialog-centered d-flex justify-content-center"
                                    role="document"
                                >
                                  <div className="modal-content add-contact-content">
                                    <div className="modal-header border-bottom-0">
                                      <h5
                                          className="modal-title"
                                          id="exampleModalLongTitle"
                                      >
                                        Add New Contact
                                      </h5>
                                      <button
                                          type="button"
                                          className="close"
                                          data-dismiss="modal"
                                          aria-label="Close"
                                      >
                                        <span aria-hidden="true">×</span>
                                      </button>
                                    </div>
                                    <div className="modal-body">
                                      <div className="form-group">
                                        <input type="text" className="form-control" />
                                      </div>
                                    </div>
                                    <div className="modal-footer border-top-0">
                                      <button
                                          type="button"
                                          className="btn btn-primary"
                                      >
                                        Save changes
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*<div className="single-checkout-body single-checkout-body-first card-number">
                                            <div className="checkout-body-location">
                                                <h4>Primary</h4>
                                                <div className="location-edit">
                                                    <button type="button"><MdEdit/></button>
                                                    <button style={{marginLeft: '5px'}}  type="button"><FiX/></button>
                                                </div>
                                            </div>
                                            <p>202-555-0191</p>
                                        </div>
                                        <div className="single-checkout-body card-number">
                                            <div className="checkout-body-location">
                                                <h4>Secondary</h4>
                                                <div className="location-edit">
                                                    <button type="button"><MdEdit/></button>
                                                    <button style={{marginLeft: '5px'}}  type="button"><FiX/></button>
                                                </div>
                                            </div>
                                            <p>202-555-0701</p>
                                        </div>*/}
                            <ContactNumber />
                          </div>
                          <div className="single-checkout-area ">
                            <div className="single-checkout-top">
                              <div className="checkout-top-title">
                                <h4>
                                  <span>3</span>
                                </h4>
                                <p>Payment Option</p>
                              </div>
                            </div>

                            <div className="owl-stage-outer">
                              {/* <PaymentOption />*/}

                              <Slider {...settings}>
                                {numberOfPicture.map((data, index) => (
                                    <div key={index}>
                                      <div key={index}
                                           onClick={()=>{
                                             setSelectPaymentGateWay(index+1)
                                           }}
                                           className="owl-item"
                                           style={{ width: 230, marginLeft: 0 , }}>
                                       {/*className={"single-checkout-body "+(selectPaymentGateWay === (index+1) ? "single-checkout" : "" ) +" payment-body"}*/}
                                        <div
                                            style={selectPaymentGateWay === index+1 ? {background: '#ffffff'} : null}
                                            className={"single-checkout-body "+(selectPaymentGateWay === (index+1) ? "active_border" : "test" ) +" payment-body"}
                                        >
                                          <div className="checkout-body-location">
                                            <h4>
                                              <img src={data.url} alt />
                                            </h4>

                                          </div>
                                          <span>{data.name}</span>
                                        </div>
                                      </div>
                                    </div>
                                ))}
                              </Slider>


                            </div>

                            <div className="voucher-area">
                              <div
                              type="button"
                              block
                                  href={`#`}
                                  onClick={(e) => {
                                    if (deliverAddress.length < 1 || contacts.length < 1){
                                      if (deliverAddress.length < 1){
                                        handleShowModal('post', null)
                                      }else if (contacts.length < 1){
                                        handleShowContactModal('post', null)
                                      }else {

                                      }
                                    }else {
                                      placeOrder(e);
                                    }

                                  }}

                                  className="proceed-checkout"
                              >
                                {selectPaymentGateWay === 2 ? 'Continue Payment' : 'Place Order'}

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="checkout-order-summary">
                          <div className="block-card">
                            <div className="block-card-header">
                              <h3 className="block-card-title">Order Summary</h3>
                            </div>

                            <OrderSummary />
                            <DeliveryCharge />
                          </div>
                          <div className="block-card">
                            <div className="block-card-header">
                              <p className="d-flex">
                          <span className="mr-2 font-weight-bold">
                            Payable Amount
                          </span>
                                <span className="ml-auto text-secondary font-weight-bold">
                            ৳ {checkoutData?.checkout?.total_amount}
                          </span>
                              </p>
                            </div>
                          </div>
                          <div className="block-card">
                            <div className="block-card-body place-button-area">
                              <div
                              type="button"
                                  href={`#`}
                                  onClick={(e) => {
                                    if (deliverAddress.length < 1 || contacts.length < 1){
                                      if (deliverAddress.length < 1){
                                        handleShowModal('post', null)
                                      }else if (contacts.length < 1){
                                        handleShowContactModal('post', null)
                                      }else {

                                      }
                                    }else {
                                      placeOrder(e);
                                    }
                                  }}
                                  className="btn btn-primary btn-block"
                              >
                                {selectPaymentGateWay === 2 ? 'Continue Payment' : 'Place Order'}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          ) : (
              <div>
                <Empty
                    style={{
                      paddingBottom: '20vh',
                      paddingTop: '20vh'
                    }}
                    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                    imageStyle={{
                      height: 90,
                    }}
                    description={
                      <span>
                    No item selected
                  </span>
                    }>
                  <Link
                      to={`/`}>
                    <Button style={{
                      padding: '7px 30px 7px 30px',
                      backgroundColor: '#ed1c24'
                    }} type="primary">Shopping Now</Button>
                  </Link>

                </Empty>

              </div>
          )}
        </>
        }
      </ContainerMarketPlace3>
  );
};


const mapStateToProps = (state) =>{
  return{
    shoppingCart: state.shoppingCart
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    getCartItems: (cb)=> dispatch(getCartItems(cb)),
    handleClearCart: () => dispatch(handleClearCart()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

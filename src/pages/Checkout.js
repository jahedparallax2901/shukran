import React, { useEffect, useState } from "react";
// import { connect } from 'react-redux';
// import { useRouter } from 'next/router';

// import ContainerProductDetail from '~/components/layouts/ContainerProductDetail';
// import ProductRepository from '~/repositories/ProductRepository';
// import SkeletonProductDetail from '~/components/elements/skeletons/SkeletonProductDetail';
// import BreadCrumb from '~/components/elements/BreadCrumb';
// import ProductWidgets from '~/components/partials/product/ProductWidgets';
// import ProductDetailFullwidth from '~/components/elements/detail/ProductDetailFullwidth';
// import CustomerBought from '~/components/partials/product/CustomerBought';
// import RelatedProduct from '~/components/partials/product/RelatedProduct';
// import ContainerPage from '~/components/layouts/ContainerPage';
// import HeaderProduct from '~/components/shared/headers/HeaderProduct';
// import HeaderDefault from '~/components/shared/headers/HeaderDefault';

import { useParams } from "react-router";
import BreadCrumb from "../components/elements/BreadCrumb";
import SkeletonProductDetail from "../components/elements/skeletons/SkeletonProductDetail";
import ContainerMarketPlace3 from "../components/layouts/ContainerMarketPlace3.jsx";
import CustomerBought from "../components/product/CustomerBought";
// import HeaderDefault from '../components/product/details/header/HeaderDefault';
// import HeaderProduct from '../components/product/details/header/HeaderProduct';
import ProductDetailFullwidth from "../components/product/ProductDetailFullwidth";
import ProductWidgets from "../components/product/ProductWidgets";
import RelatedProduct from "../components/product/RelatedProduct";
import {
    processGetRequest,
    processPostRequest,
} from "../services/baseServices";
import { singleProduct } from "../temp-data/product";

/*
import "../assets/css/style.css";
import "../assets/css/change.css";
import "../assets/css/market-place-1.css";
import "../assets/css/market-place-3.css";
import "../assets/css/autopart.css";
import "../assets/css/broken.css";
import "../assets/css/bootstrap.css"
*/
import "../assets/css/checkout.css"
import {FiX, MdEdit , HiPlus ,BiLeftArrowCircle ,BiRightArrowCircle} from "react-icons/all";
import {
    Modal
    , ModalBody
    , ModalTitle
    , ModalDialog
    , ModalFooter
    , ModalDialogProps
    , ModalProps
    , Button, Form,FormGroup ,FormLabel ,FormText
} from "react-bootstrap";

import ScrollMenu from "react-horizontal-scrolling-menu";
import ReactDOM from "react-dom";


const Checkout = () => {

    const [numberOfPicture , setNumberOfPicture ] = useState([
        {test: ""}, {test: ""}, {test: ""}, {test: ""}, {test: ""}, {test: ""}, {test: ""}, {test: ""}
    ])



    const Product = () => {
        return (
            <ScrollMenu
                arrowLeft={<div style={{ fontSize: "30px" }}><BiLeftArrowCircle/></div>}
                arrowRight={<div style={{ fontSize: "30px" }}><BiRightArrowCircle/></div>}
                data={numberOfPicture.map((picture, index) => (

                    <div className="owl-item" style={{width: 230, marginRight: 25}}>
                        <div className="single-checkout-body single-checkout-body-first payment-body">
                            <div className="checkout-body-location">
                                <h4><img src="https://reactjs.org/logo-og.png" alt /></h4>
                                <div className="location-edit">
                                    <button type="button"><FiX/></button>
                                </div>
                            </div>
                            <span>Cash on Delivery</span>
                        </div>
                    </div>

                ))}
            />
        );
    };


    return (
        <ContainerMarketPlace3
            title="Checkout"
            isExpanded={true}>

            <Modal className="info-modal" show={false} onHide={false}>
                <Modal.Body>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h2 style={{marginTop:'5px' ,marginBottom: '5px' ,color: 'red' ,fontWeight:'bold'}}>ADD ADDRESS</h2>
                        </Modal.Title>
                    </Modal.Header>

                    <Form>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{marginTop: '1vw', fontSize: '14px'}}>Name <span className="text-danger">*</span> </Form.Label>
                            <Form.Control style={{height: '40px' , fontSize: '12px'}} type="email" placeholder="Enter your name" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{marginTop: '0.5vw', fontSize: '14px'}}>Phone <span className="text-danger">*</span> </Form.Label>
                          {/*  <Form.Control style={{height: '40px' , fontSize: '12px'}} type="email" placeholder="Enter your name" />
                            <Form.Text className="text-muted">
                            </Form.Text>*/}

                            <div  className="input-with-icon">
                                <div  className="input-group">
                                    <select name="country_code"
                                            className="form-control"
                                            style={{height: '40px' , fontSize: '12px', flex: '0 0 80px', padding: '0 10px 0 5px'}}>
                                        <option value="+880">+880</option>
                                    </select>
                                    <Form.Control
                                        style={{height: '40px' , fontSize: '12px'}}
                                        pattern="[0-9]*"
                                        inputmode="numeric"

                                        type="text" name={"phone"}
                                        required
                                        autoComplete={`off`}
                                        placeholder={"your phone number"}/>
                                </div>
                            </div>

                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{marginTop: '0.5vw', fontSize: '14px'}}>Email <span className="text-danger">*</span> </Form.Label>
                            <Form.Control style={{height: '40px' , fontSize: '12px'}} type="email" placeholder="Enter your name" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{marginTop: '0.5vw', fontSize: '14px'}}>Address <span className="text-danger">*</span> </Form.Label>
                            <Form.Control style={{height: '40px' , fontSize: '12px'}} type="email" placeholder="Enter your name" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Label style={{marginTop: '0.5vw', fontSize: '14px'}}>Country <span className="text-danger">*</span> </Form.Label>
                        <Form.Control style={{height: '40px' , fontSize: '12px'}} as="select" size={'lg'}>
                            <option>Bangladesh</option>
                            <option>USA</option>
                            <option>Nepal</option>
                            <option>Uganda</option>

                        </Form.Control>


                        <Form.Group style={{marginTop: '0.5vw', fontSize: '14px'}} controlId="formBasicEmail">
                            <Form.Label >Post Code <span className="text-danger">*</span> </Form.Label>
                            <Form.Control style={{height: '40px' , fontSize: '12px'}} type="email" placeholder="Enter your name" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>


                        <Form.Group >
                            <Form.Label style={{marginTop: '0.5vw', fontSize: '14px'}}>Address Type <span className="text-danger">*</span> </Form.Label>
                               <div className={'d-flex'}>
                                   <Form.Check
                                       type="radio"
                                       className={'mx-3'}
                                       name="formHorizontalRadios"
                                       id="formHorizontalRadios1"
                                   />
                                   <Form.Check.Label>{`Home address`}</Form.Check.Label>
                                   <Form.Check
                                       className={'mx-3'}
                                       type="radio"

                                       name="formHorizontalRadios"
                                       id="formHorizontalRadios2"
                                   />
                                   <Form.Check.Label>{`Office address`}</Form.Check.Label>
                                   <Form.Check
                                       className={'mx-3'}
                                       type="radio"
                                       name="formHorizontalRadios"
                                       id="formHorizontalRadios3"
                                   />
                                   <Form.Check.Label>{`Other`}</Form.Check.Label>
                               </div>
                        </Form.Group>

                        <Modal.Footer>

                            <Button style={{height: '2vw' , width: '5vw' ,fontSize: '12px'}} variant={`danger`}>Clode</Button>
                            <Button  style={{height: '2vw' , width: '7vw' ,fontSize: '12px'}} variant={`primary`}>Save Address</Button>


                        </Modal.Footer>

                    </Form>

                </Modal.Body>
            </Modal>

            <div id="homepage-5">
                <div className="container">
                    <div className="checkout-area-inner">
                        <div className="row">
                            <div className="col-md-8 col-sm-12">
                                <div className="checkout-details">
                                    <form action>
                                        <div className="single-checkout-area ">
                                            <div className="single-checkout-top">
                                                <div className="checkout-top-title">
                                                    <h4><span>1</span></h4>
                                                    <p>Delivery Address</p>
                                                </div>
                                                <button type="submit" data-toggle="modal" data-target="#addAddress"><HiPlus/> Add
                                                    Address</button>
                                                <div role="dialog" id="addAddress" aria-modal="true" className="fade modal show" tabIndex={-1}>
                                                    <div role="document" className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header border-bottom-0">
                                                               <div className="modal-title h4"> Add Address</div>
                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">×</span>
                                                                    <span className="sr-only">Close</span>
                                                                </button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="form-group">
                                                                    <label className="form-label" htmlFor="name">Name <span className="text-danger">*</span></label>
                                                                    <input name="recipient_name" required placeholder="Name" id="name" className="form-control" defaultValue="sahed Rahman" />
                                                                    <div className="invalid-feedback">Recipient name is required</div>
                                                                </div>
                                                                <div className="form-group login-form-group">
                                                                    <label className="form-label">Phone <span className="text-danger">*</span></label>
                                                                    <div className="input-group">
                                                                        <select name="country_code" className="form-control" required style={{flex: '0 0 85px', padding: '0px 10px 0px 5px'}}>
                                                                            <option value={+880}>+880</option>
                                                                            <option value={+880}>+880</option>
                                                                            <option value={+1}>+1</option>
                                                                            <option value={1234}>1234</option>
                                                                        </select>
                                                                        <input required minLength={10} maxLength={10} name="recipient_phone" placeholder="Phone" info="hello" className="form-control" defaultValue={1610907012} />
                                                                        <div className="invalid-feedback">Please provide a valid phone number.</div>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="form-label" htmlFor="email">Email </label>
                                                                    <input required name="email" placeholder="Email" type="email" id="email" className="form-control" defaultValue="sahed@parallaxlogic.com" />
                                                                    <div className="invalid-feedback">Please provide a valid email address.</div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="form-label" htmlFor="address">Address <span className="text-danger">*</span></label>
                                                                    <input required name="address" placeholder="Address" type="text" id="address" className="form-control" />
                                                                    <div className="invalid-feedback">Address is required</div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="locationCountry" className="form-label col-form-label">Country <span className="text-danger">*</span></label>
                                                                    <select name="country" required id="locationCountry" className="form-control">
                                                                        <option value>--Select--</option>
                                                                        <option value="5f2a7c54e7abc4290b6c6212">Bangladesh</option>
                                                                        <option value="5f2fb3783ab94e6114c603f9">USA</option>
                                                                        <option value="5f8c318ea399dc0e03f625ce">Nepal</option>
                                                                        <option value="5ffd230cb604706e685dd30b">Ugandan </option>
                                                                    </select>
                                                                    <div className="invalid-feedback">Please select country.</div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="form-label" htmlFor="addressPostCode">Post Code <span className="text-danger">*</span></label>
                                                                    <input required name="postcode" placeholder="Post Code" type="text" id="addressPostCode" className="form-control" />
                                                                    <div className="invalid-feedback">Please enter postcode.</div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="form-label" htmlFor="address">Address Type</label>
                                                                    <div className="address-radio-button">
                                                                        <div className="custom-control custom-radio custom-control-inline">
                                                                            <input name="address_type" type="radio" id="homeAddress" className="custom-control-input" defaultValue={1} />
                                                                            <label title htmlFor="homeAddress" className="custom-control-label">Home Address</label>
                                                                        </div>
                                                                        <div className="custom-control custom-radio custom-control-inline">
                                                                            <input name="address_type" type="radio" id="officeAddress" className="custom-control-input" defaultValue={2} />
                                                                            <label title htmlFor="officeAddress" className="custom-control-label">Office
                                                                                Address</label>
                                                                        </div>
                                                                        <div className="custom-control custom-radio custom-control-inline">
                                                                            <input name="address_type" type="radio" id="otherAddress" className="custom-control-input" defaultValue={3} />
                                                                            <label title htmlFor="otherAddress" className="custom-control-label">Other</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-default close-button" data-dismiss="modal" aria-label="Close">Close</button>
                                                                <button type="submit" className="btn btn-primary save-button">Save Address</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-checkout-body single-checkout-body-first">
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
                                            </div>
                                        </div></form>
                                    <div className="single-checkout-area ">
                                        <div className="single-checkout-top">
                                            <div className="checkout-top-title">
                                                <h4><span>2</span></h4>
                                                <p>Contact Number</p>
                                            </div>
                                            <button type="button" data-toggle="modal" data-target="#exampleModalCenter">
                                                <HiPlus/> Add Contact</button>
                                            {/* Button trigger modal */}
                                            {/* Modal */}
                                            <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered d-flex justify-content-center" role="document">
                                                    <div className="modal-content add-contact-content">
                                                        <div className="modal-header border-bottom-0">
                                                            <h5 className="modal-title" id="exampleModalLongTitle">Add New Contact</h5>
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">×</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer border-top-0">
                                                            <button type="button" className="btn btn-primary">Save changes</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-checkout-body single-checkout-body-first card-number">
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
                                        </div>
                                    </div>
                                    <div className="single-checkout-area ">
                                        <div className="single-checkout-top">
                                            <div className="checkout-top-title">
                                                <h4><span>3</span></h4>
                                                <p>Payment Option</p>
                                            </div>
                                        </div>

                                        <div className="owl-stage-outer">
                                            <Product/>
                                        </div>

                                        <div className="voucher-area">
                                            <a href="invoices.html" className="proceed-checkout">Confirm Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="checkout-order-summary">
                                    <div className="block-card">
                                        <div className="block-card-header">
                                            <h3 className="block-card-title">Order Summery</h3>
                                        </div>
                                        <div className="block-card-body border-bottom pt-1">
                                            <h4>Zara</h4>
                                            <p className="d-flex justify-content-between">
                                                <span className>2</span>
                                                <span className="mx-auto">X</span>
                                                <span className="mx-auto">conputer</span>
                                                <span className="mx-auto">X</span>
                                                <span className>৳34000.00</span>
                                            </p>
                                        </div>
                                        <div className="block-card-body">
                                            <p className="d-flex mb-3">
                                                <span className="mr-2">Subtotal</span>
                                                <span className="ml-auto">৳ 3400.00</span>
                                            </p>
                                            <p className="d-flex mb-3">
                                                <span className="mr-2">Delivery Charge</span>
                                                <span className="ml-auto">৳ 90.00</span>
                                            </p>
                                            <p className="d-flex">
                                                <span className="mr-2 font-weight-bold">Total</span>
                                                <span className="ml-auto text-secondary font-weight-bold">৳ 3490.00</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="block-card">
                                        <div className="block-card-header">
                                            <p className="d-flex">
                                                <span className="mr-2 font-weight-bold">Payable Amount</span>
                                                <span className="ml-auto text-secondary font-weight-bold">৳ 3490.00</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="block-card">
                                        <div className="block-card-body place-button-area">
                                            <a href="invoices.html" className="btn btn-primary btn-block">Place Order</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </ContainerMarketPlace3>
    );
};

export default Checkout;

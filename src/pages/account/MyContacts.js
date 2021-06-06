import React, {Component, useState , useEffect} from "react";
import ContainerMarketPlace3 from "../../components/layouts/ContainerMarketPlace3";
import AccountMenuSidebar from "../../components/partials/account/AccountMenuSidebar";
import Checkout from "../Checkout";
import {processDeleteRequest, processGetRequest, processPostRequest} from "../../services/baseServices";
import {Button, Form, Modal, ModalBody, ModalFooter} from "react-bootstrap";
import {toast} from "react-toastify";
import {FiX, MdEdit} from "react-icons/all";
import ModalHeader from "react-bootstrap/ModalHeader";

const MyContacts = () => {

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Account / My Contacts',
        },
    ];

    const [isShowModal, setIsShowModal] = useState(false);
    const [isEdited, setIsEdited] = useState(false);
    const [editedId, setEditedId] = useState("");
    const [selectedAddress, setSelectedAddress] = useState(0);
    const [formData, setFormData] = useState({
    });

    const [contacts, setContacts] = useState([]);
    const [isShowContactModal, setIsShowContactModal] = useState(false);
    const [selectedContact, setSelectedContact] = useState(0);

    const [orderProductList, setOrderProductList] = useState([]);
    const [checkoutData, setCheckoutData] = useState([]);


    useEffect(async () => {
        await getAllData();

    }, []);

    const getAllData = () => {
        processGetRequest("/user-details", {}, true).then((res) => {
            console.log(res);

            setContacts(res.user_info.contacts);
        });
    };


    const setSelectContact = (e) => {
        console.log(e);
        //setSelectedContact(e)
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


    const handleHideModal = () => {
        setIsShowModal(false);
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
                    handleHideContactModal()
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



    const ContactNumber = () => {
        return (
            <>
                {contacts &&
                contacts.map((data, index) => (
                        <div
                        key={data?.id}
                            onClick={() => {
                                setSelectContact(index);
                            }}
                            className="address-list d-inline-block p-4 border">
                            <div className="address-item">
                                <div key={index} className="address-box-default">
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
                                  <strong></strong> {data.phone_number}
                                </span>
                              </span>
                                    </p>
                                    {/* <p className="address-line d-flex">

                                        <span className="text">

                              </span>
                                    </p> */}
                                    {/* <label className="action d-block mb-2">
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
                                Default contact address
                              </span>
                                    </label> */}
                                    <div className="actions mb-0">
                              <span onClick={() =>{
                                  setSelectedContact(index)
                                  handleShowContactModal("put", data.id)
                              } } className="btn btn-lg action text-info mr-4">
                                Edit
                              </span>
                                        <span onClick={() => {
                                            handleDeleteData(`/remove-contact/${data.id}`);
                                        }} className="btn btn-lg action text-danger">
                                Delete
                              </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                ))}
            </>
        );
    };


    return (
        <ContainerMarketPlace3>


            <Modal
                show={isShowContactModal}
                onHide={() => {
                    handleHideContactModal();
                }}
            >
                <ModalBody>
                    <ModalHeader>
                        {isEdited === true && 'Edit CONTACT'}
                        {isEdited === false && 'ADD NEW CONTACT'}
                    </ModalHeader>
                    <Modal.Body>
                        <Form>
                        <Form.Control
                        required
                        defaultValue={
                            isEdited ? contacts[selectedContact]?.phone_number : ""
                        }
                        onChange={(e) => handleOnChange(e)}
                        name="phone_number"
                        placeholder="Enter your Phone Number"
                        type="number"
                        id="phone_number"
                        className="form-control"
                    />
                    
                        </Form>
                    </Modal.Body>
                    
                    <ModalFooter>
                    <Button
                            onClick={(e) => {
                                if (isEdited === true){
                                    handleFormSubmit(e, "/edit-contact/"+editedId);
                                }else {
                                    handleFormSubmit(e, "/add-contact");
                                }

                            }}
                                variant={`primary`}
                                className="ml-auto"
                                style={{width: '110px'}}
                        >
                            SAVE CHANGE
                        </Button>
                    </ModalFooter>
                </ModalBody>
            </Modal>


            <section className="ps-my-account ps-page--account pt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="ps-page__left">
                                <AccountMenuSidebar selectedTab={"My Contacts"} />
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="ps-page__content card">
                                <div className="ps-section--account-setting">
                                    <div class="card-header border-0 py-5">
                                        <h3 class="card-title align-items-start flex-column">
                        <span class="card-label font-weight-bolder text-dark">
                          My Contacts
                        </span>
                                        </h3>
                                    </div>

                                    <div class="card-body pt-3 pb-3" id="pills-tabContent">
                                        <div class="mb-3">
                                            <button
                                                onClick={() => handleShowContactModal("POST")}
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
                                                Add New Contact
                                            </button>
                                        </div>

                                        <ContactNumber/>

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

export default MyContacts;

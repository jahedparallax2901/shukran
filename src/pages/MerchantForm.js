import React, { useEffect, useState } from "react";
// import { connect } from 'react-redux';
// import { useRouter } from 'next/router';


import "../assets/css/checkout.css"
import "../assets/css/vendor.css"


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
import {toast} from "react-toastify";
import ModalHeader from "react-bootstrap/ModalHeader";
import moment from "moment";
import ContainerMarketPlace3 from "../components/layouts/ContainerMarketPlace3.jsx";
import { useLocation } from "react-router-dom";
import {processGetRequest, processPostRequest} from "../services/baseServices";


const MerchantForm = () => {

    const [isSuccess , setIsSuccess] = useState(false)
    const [formData , setFormData] = useState({})

    const [division, setDivision] = useState([]);
    const [district, setDistrict] = useState([]);
    const [upazila, setUpazila] = useState([]);
    const [upazilaArea, setUpazilaArea] = useState([]);

    const [divisionShow, setDivisionShow] = useState(true);
    const [districtShow, setDistrictShow] = useState(false);
    const [upazilaShow, setUpdazilaShow] = useState(false);
    const [upazilaAreaShow, setUpazilaAreaShow] = useState(false);

    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    };


    useEffect(async () => {
        await getLocationV2("/division-list", null);
    }, []);


    const handleOnChange = (e) => {
        if (e.target.name === 'nid_front' || e.target.name === 'nid_back'){
            setFormData({ ...formData, [e.target.name]: e.target.files[0] });
        }else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
        console.log(formData)
    }

    const handleFormSubmit = (e, url) => {
        e.preventDefault();
        processPostRequest(url, formData, true)
            .then((res) => {
                if (res.status) {
                    toast.success(res.data.message);
                    setIsSuccess(true)
                }

            })
            .catch((err) => {
                toast.error(err.message);
                console.log(err);
            });
    };



    const getLocationV2 = (url, id) => {
        if (id !== null) {
            processGetRequest(url + "/" + id, {}, true).then((res) => {
                if (url === "/division-list") {
                    setDivision(res);
                }
                if (url === "/division-district-list") {
                    setUpazila(null);
                    setUpazilaArea(null);

                    setDistrict(res);
                    setDistrictShow(true);
                }
                if (url === "/district-upazila-list") {
                    setUpazilaArea(null);

                    setUpazila(res);
                    setUpdazilaShow(true);

                }
                if (url === "/upazila-area-list") {
                    setUpazilaArea(res);
                    setUpazilaAreaShow(true);
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



    return (
        <ContainerMarketPlace3
            title="Checkout"
            isExpanded={true}>

            <div className="vendor-form" id="homepage-5">
                <div className="container">

                    {!isSuccess ?
                    <Form onSubmit={(e) => {handleFormSubmit(e,'/create-merchant' )}}>
                        <div className="pb-5" data-wizard-type="step-content" data-wizard-state="current">
                            {/*                <h3 class="mb-10 font-weight-bold text-dark">Add Business Info</h3>*/}
                            <div key={`1`} className="row">
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <Form.Label
                                            style={{
                                                marginBottom: '1.5rem',
                                                lineHeight: '1em',
                                                fontWeight: '400',
                                                fontSize: '15px',
                                                color: '#000000'

                                            }}
                                        >Owner name</Form.Label>
                                        <Form.Control
                                            name={`owner_name`}
                                            required onChange={(e)=> {handleOnChange(e)}}
                                            style={{
                                               padding: '1.3vw',
                                               fontSize: '17px'
                                            }}
                                            className="form-control bg-white form-control-lg"
                                            type="text"
                                            placeholder="Enter owner name" />
                                        <Form.Text style={{
                                            color: '#6c757d',
                                            fontSize: '14px'
                                        }} className={`textMutes`}>
                                            Please enter your name.
                                        </Form.Text>
                                    </div>
                                </div>
                            </div>
                            <div key={`2`} className="row">
                                <div className="col-xl-6">
                                    {/*begin::Input*/}
                                    <div className="form-group">
                                        <Form.Label style={{
                                            marginBottom: '1.5rem',
                                            lineHeight: '1em',
                                            fontWeight: '400',
                                            fontSize: '15px',
                                            color: '#000000'

                                        }}>Number</Form.Label>
                                        <Form.Control
                                            name={`phone_number`}
                                            required onChange={(e)=> {handleOnChange(e)}}
                                            style={{
                                                padding: '1.3vw',
                                                fontSize: '17px'
                                            }}
                                            maxLength="11"
                                            className="form-control bg-white form-control-lg"
                                            type="text" placeholder="Phone Number" />
                                        <Form.Text
                                            style={{
                                                color: '#6c757d',
                                                fontSize: '14px'
                                            }}
                                            className="text-muted">
                                            Please enter your phone number.
                                        </Form.Text>
                                    </div>
                                    {/*end::Input*/}
                                </div>
                                <div className="col-xl-6">
                                    {/*begin::Input*/}
                                    <div className="form-group">
                                        <Form.Label
                                            style={{
                                                marginBottom: '1.5rem',
                                                lineHeight: '1em',
                                                fontWeight: '400',
                                                fontSize: '15px',
                                                color: '#000000'

                                            }}
                                        >Email</Form.Label>
                                        <Form.Control
                                            name={`email_address`}
                                            required onChange={(e)=> {handleOnChange(e)}}
                                            style={{
                                                padding: '1.3vw',
                                                fontSize: '17px'
                                            }}
                                            className="form-control bg-white form-control-lg"
                                            type="email" placeholder="example@domain.com" />
                                        <Form.Text
                                            style={{
                                                color: '#6c757d',
                                                fontSize: '14px'
                                            }}
                                            className="text-muted">
                                            Please enter your email.
                                        </Form.Text>
                                    </div>
                                    {/*end::Input*/}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    {/*begin::Input*/}
                                    <div className="form-group">
                                        <Form.Label
                                            style={{
                                                marginBottom: '1.5rem',
                                                lineHeight: '1em',
                                                fontWeight: '400',
                                                fontSize: '15px',
                                                color: '#000000'

                                            }}
                                        >Address</Form.Label>
                                        <Form.Control
                                            name={`owner_address`}
                                            required onChange={(e)=> {handleOnChange(e)}}
                                            style={{
                                                padding: '1.3vw',
                                                fontSize: '17px'
                                            }}
                                            className="form-control bg-white form-control-lg"
                                            type="text"
                                            placeholder="Enter address" />
                                        <Form.Text
                                            style={{
                                                color: '#6c757d',
                                                fontSize: '14px'
                                            }}
                                            className="text-muted">
                                            Please enter your address.
                                        </Form.Text>
                                    </div>
                                    {/*end::Input*/}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6">
                                    {/*begin::Input*/}
                                    <div className="form-group">

                                        <Form.Group>
                                        <Form.Label
                                            style={{
                                                marginBottom: '1.5rem',
                                                lineHeight: '1em',
                                                fontWeight: '400',
                                                fontSize: '15px',
                                                color: '#000000'

                                            }}
                                        >Division</Form.Label>
                                        <Form.Control
                                            name={`owner_division`}
                                            style={{
                                                fontSize: '17px'
                                            }}
                                            required onChange={(e)=> {
                                                handleOnChange(e)
                                                getLocationV2("/division-district-list", e.target.value);
                                            }}
                                            as="select">
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
                                        </Form.Group>
                                        <Form.Text
                                            style={{
                                                color: '#6c757d',
                                                fontSize: '14px'
                                            }}
                                            className="text-muted">
                                            Please select division
                                        </Form.Text>

                                    </div>
                                    {/*end::Input*/}
                                </div>
                                <div className="col-xl-6">
                                    {/*begin::Input*/}
                                    <div className="form-group">
                                        <Form.Group>
                                            <Form.Label
                                                style={{
                                                    marginBottom: '1.5rem',
                                                    lineHeight: '1em',
                                                    fontWeight: '400',
                                                    fontSize: '15px',
                                                    color: '#000000'

                                                }}>District</Form.Label>
                                            <Form.Control
                                                name={`owner_district`}
                                                style={{

                                                    fontSize: '17px'
                                                }}
                                                required onChange={(e)=> {
                                                    handleOnChange(e)
                                                    getLocationV2("/district-upazila-list", e.target.value);
                                                }}
                                                as="select">
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
                                        </Form.Group>
                                        <Form.Text
                                            style={{
                                                color: '#6c757d',
                                                fontSize: '14px'
                                            }} className="text-muted">
                                           Please select district.
                                        </Form.Text>

                                    </div>
                                    {/*end::Input*/}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6">
                                    {/*begin::Input*/}
                                    <div className="form-group">
                                        <Form.Group>
                                            <Form.Label
                                                style={{
                                                    marginBottom: '1.5rem',
                                                    lineHeight: '1em',
                                                    fontWeight: '400',
                                                    fontSize: '15px',
                                                    color: '#000000'

                                                }}>Upazila</Form.Label>
                                            <Form.Control
                                                name={`owner_upazila`}
                                                style={{

                                                    fontSize: '17px'
                                                }}
                                                required onChange={(e)=> {
                                                    handleOnChange(e)
                                                    getLocationV2("/upazila-area-list", e.target.value);
                                                }}
                                                as="select">
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
                                        </Form.Group>
                                        <Form.Text
                                            style={{
                                                color: '#6c757d',
                                                fontSize: '14px'
                                            }} className="text-muted">
                                           Please select upazila
                                        </Form.Text>

                                    </div>
                                    {/*end::Input*/}
                                </div>
                                <div className="col-xl-6">
                                    {/*begin::Input*/}
                                    <div className="form-group">
                                        <Form.Group>
                                            <Form.Label
                                                style={{
                                                    marginBottom: '1.5rem',
                                                    lineHeight: '1em',
                                                    fontWeight: '400',
                                                    fontSize: '15px',
                                                    color: '#000000'

                                                }}>Union</Form.Label>
                                            <Form.Control
                                                name={`owner_union`}
                                                style={{

                                                    fontSize: '17px'
                                                }}
                                                required onChange={(e)=> {handleOnChange(e)}}
                                                as="select">
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
                                        </Form.Group>
                                        <Form.Text
                                            style={{
                                                color: '#6c757d',
                                                fontSize: '14px'
                                            }} className="text-muted">
                                            Please select union.
                                        </Form.Text>

                                    </div>
                                    {/*end::Input*/}
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-xl-6">
                                    {/*begin::Input*/}
                                    <div className="form-group">
                                        <Form.Label
                                            style={{
                                                marginBottom: '1.5rem',
                                                lineHeight: '1em',
                                                fontWeight: '400',
                                                fontSize: '15px',
                                                color: '#000000'

                                            }}>Post code</Form.Label>
                                        <Form.Control
                                            name={`owner_postcode`}
                                            required onChange={(e)=> {handleOnChange(e)}}
                                            style={{
                                                padding: '1.3vw',
                                                fontSize: '17px'
                                            }}
                                            className="form-control bg-white form-control-lg"
                                            type="text"
                                            placeholder="Enter post code" />
                                        <Form.Text
                                            style={{
                                                color: '#6c757d',
                                                fontSize: '14px'
                                            }} className="text-muted">
                                            Please enter post code
                                        </Form.Text>
                                    </div>
                                </div>

                                <div className="col-xl-6">
                                    {/*begin::Input*/}
                                    <div className="form-group">
                                        <Form.Label
                                            style={{
                                                marginBottom: '1.5rem',
                                                lineHeight: '1em',
                                                fontWeight: '400',
                                                fontSize: '15px',
                                                color: '#000000'

                                            }}
                                        >NID</Form.Label>
                                        <Form.Control
                                            name={`nid_number`}
                                            required onChange={(e)=> {handleOnChange(e)}}
                                            style={{
                                                padding: '1.3vw',
                                                fontSize: '17px'
                                            }}
                                            className="form-control bg-white form-control-lg"
                                            type="text"
                                            placeholder="Enter NID" />
                                        <Form.Text
                                            style={{
                                                color: '#6c757d',
                                                fontSize: '14px'
                                            }} className="text-muted">
                                            Please select NID.
                                        </Form.Text>
                                    </div>
                                    {/*end::Input*/}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6">
                                    {/*begin::Input*/}
                                    <div className="form-group row">
                                        <label
                                            style={{
                                                marginBottom: '1.5rem',
                                                lineHeight: '1em',
                                                fontWeight: '400',
                                                fontSize: '15px',
                                                color: '#000000'

                                            }}
                                            className="col-lg-12 col-form-label text-lg-left">Upload NID copy Front side:</label>
                                        <div className="col-lg-12">
                                            <div className="uppy" id="kt_uppy_5">

                                                <Form.Group>
                                                    <Form.Control type={`file`}
                                                                  style={{
                                                                      fontSize: '17px'
                                                                  }}
                                                                  required onChange={(e)=> {handleOnChange(e)}}
                                                                  name={`nid_front`}/>

                                                </Form.Group>
                                                   </div>
                                            <span
                                                style={{
                                                    color: '#6c757d',
                                                    fontSize: '14px'
                                                }} className="form-text text-muted">Max file size is 1MB and max number of files is 1.</span>
                                        </div>
                                    </div>


                                </div>
                                <div className="col-xl-6">
                                    {/*begin::Input*/}
                                    <div className="form-group row">
                                        <label
                                            style={{
                                                marginBottom: '1.5rem',
                                                lineHeight: '1em',
                                                fontWeight: '400',
                                                fontSize: '15px',
                                                color: '#000000'

                                            }}
                                            className="col-lg-12 col-form-label text-lg-left">Upload NID copy Back side:</label>
                                        <div className="col-lg-12">
                                            <div className="uppy" id="kt_uppy_5">
                                                <Form.Group>

                                                    <Form.Control type={`file`}
                                                                  style={{
                                                                      fontSize: '17px'
                                                                  }}
                                                                  required onChange={(e)=> {handleOnChange(e)}}
                                                                  name={`nid_back`}/>

                                                   {/* <Form.File
                                                        name={`nid_back`}
                                                        required onChange={(e)=> {handleOnChange(e)}}
                                                        id="exampleFormControlFile1" />*/}
                                                </Form.Group>
                                            </div>
                                            <span
                                                style={{
                                                    color: '#6c757d',
                                                    fontSize: '14px'
                                                }} className="form-text text-muted">Max file size is 1MB and max number of files is 1.</span>
                                        </div>
                                    </div>
                                    {/*end::Input*/}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6">
                                    {/*begin::Input*/}
                                    <div className="form-group">
                                        <Form.Label
                                            style={{
                                                marginBottom: '1.5rem',
                                                lineHeight: '1em',
                                                fontWeight: '400',
                                                fontSize: '15px',
                                                color: '#000000'

                                            }}
                                        >Business Name</Form.Label>
                                        <Form.Control
                                            name={`business_name`}
                                            style={{
                                                padding: '1.3vw',
                                                fontSize: '17px'
                                            }}
                                            required onChange={(e)=> {handleOnChange(e)}}
                                            className="form-control bg-white form-control-lg"
                                            type="text" placeholder="Enter business name" />
                                        <Form.Text
                                            style={{
                                                color: '#6c757d',
                                                fontSize: '14px'
                                            }} className="text-muted">
                                          Please enter your business name.
                                        </Form.Text>
                                    </div>
                                    {/*end::Input*/}
                                </div>
                                <div className="col-xl-6">
                                    {/*begin::Input*/}
                                    <div className="form-group">
                                        <Form.Label
                                            style={{
                                                marginBottom: '1.5rem',
                                                lineHeight: '1em',
                                                fontWeight: '400',
                                                fontSize: '15px',
                                                color: '#000000'

                                            }}
                                        >Business Registration number</Form.Label>
                                        <Form.Control
                                            name={`business_registration_number`}
                                            style={{
                                                padding: '1.3vw',
                                                fontSize: '17px'
                                            }}
                                            required onChange={(e)=> {handleOnChange(e)}}
                                            className="form-control bg-white form-control-lg" type="number" placeholder="Enter business registration number" />
                                        <Form.Text
                                            style={{
                                                color: '#6c757d',
                                                fontSize: '14px'
                                            }} className="text-muted">
                                            Please enter your registration number.
                                        </Form.Text>
                                    </div>
                                    {/*end::Input*/}
                                </div>
                            </div>
                            {/*begin::Wizard Actions*/}
                            <div className="d-flex justify-content-end mt-5">
                                <Button
                                    style={{
                                        border: '1px solid #ED1C24',
                                        padding: '5px 25px',
                                        fontSize: '13px',
                                        float:'right',
                                        fontWeight: 'bolder',
                                        backgroundColor: '#ED1C24'
                                    }}
                                    type={"submit"} variant="success">Submit</Button>{' '}
                            </div>
                            {/*end::Wizard Actions*/}
                        </div>
                    </Form>
                    :
                    <h2>Merchant Registration Successfully</h2>
                    }
                </div>
            </div>




        </ContainerMarketPlace3>
    );
};

export default MerchantForm;

import { Modal, Rate, Select, Tooltip, Upload } from "antd";

import moment from "moment";
import React, { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { AiOutlinePlus, BsFillStarFill } from "react-icons/all";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "../assets/css/register.css";
import ContainerMarketPlace3 from "../components/layouts/ContainerMarketPlace3.jsx";
import { handleShowAuthModal } from "../redux";
import {
  processDeleteRequest,
  processGetRequest,
  processPostRequestMultiImage,
  processPutRequest
} from "../services/baseServices";
const { Option } = Select;

const Invoice = ({ handleShowAuthModal }) => {
  const { id } = useParams();
  const location = useLocation();
  const [json, setJson] = useState();
  const [timeLineStatus, setTimeLineStatus] = useState(-1);
  const [timeLineArray, setTimeLineArray] = useState([]);
  const [isTimelineShowing, setIsTimelineShowing] = useState(true);

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [formData, setFormData] = useState({});
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [validationMessage, setValidationMessage] = useState("");
  const [fileList, setFileList] = useState([]);
  const [isValidated, setIsValidated] = useState(true);
  const [orderReviews, setOrderReviews] = useState([]);
  const [preview, setPreview] = useState({
    previewVisible: false,
    previewTitle: "",
    previewImage: null,
  });
  const [reviewId, setReviewId] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [disputeMessage, setDisputeMessage] = useState("");
  const [disputeData, setDisputeData] = useState({reason: "", order_id: id, store_id: null, product_id: null})
  const [isDisputeModalOpen, setIsDisputeModalOpen] = useState(false);


  useEffect(() => {
    processGetRequest(`/order-details/${id}`, {}, true).then((res) => {
      setJson(res.ordered_item);
      setTimeLineArray(res.ordered_item.timeline);
      loadReviewByOrderId(id);
      console.log(res.ordered_item.timeline);
      res.ordered_item.timeline.map((data, index) => {
        if (data?.active === true) {
          console.log("ACTIVE INDEX", index);
          setTimeLineStatus(index);
        }
      });
    });

    setFormData({
      product_id: null,
      images: [],
      order_store_id: id,
      rating: "",
      review: "",
    })
  }, []);

  const loadReviewByOrderId = (orderId) => {
    processGetRequest(`/order-review/${orderId}`, {}, true)
      .then((res) => {
        console.log("order reviews", res);
        setOrderReviews(res.all_review);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const inputOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRateOnChange = (value) => {
    setFormData({ ...formData, rating: value });
  };

  const submitReview = (e, review_id = null) => {
    e.preventDefault();
    const url = isUpdating ? `/product-review/${review_id}` : `/product-review`;

    const form = e.currentTarget;
    if (
      form.checkValidity() === false ||
      formData.rating === undefined ||
      formData.review === undefined
    ) {
      e.preventDefault();
      e.stopPropagation();
      setIsValidated(false);
      setValidationMessage("Please fill the rating and review fields!");
    } else {
      setIsValidated(true);
      const data = new FormData();
      Object.keys(formData).map((key) => {
        if (key === "images") {
          formData[key].map((single_image) => {
            console.log("image", single_image);
            data.append(`${key}[]`, single_image.originFileObj);
          });
        } else {
          data.append(key, formData[key]);
        }
      });
      processPostRequestMultiImage(url, data, true)
        .then((res) => {
          setFormData({ product_id: null, images: [], order_store_id: id, review: '', rating: 0 });
          loadReviewByOrderId(id);
          toast.success(res.data.message);
          setVisible(false);
          setIsUpdating(false);
          setReviewId(null);
        })
        .catch((err) => {
          console.log("err 401", err);
          setIsUpdating(false);
          setReviewId(null);
          if (err.status === 401) {
            setValidationMessage("Please log in before giving review");
            handleShowAuthModal();
          } else {
            setValidationMessage(err.data.message);
            toast.error(err.message);
          }
        });
    }
  };

  const handlereviewEdit = (e, id) => {
    e.preventDefault();
    processGetRequest(`/product-review/${id}/edit`, {}, true)
      .then((res) => {
        const image_id = setFormData({
          order_store_id: res.review.order_store_id,
          product_id: res.review.product_id,
          images: res.review.product_review_image.map((img) => img.file_attach),
          rating: res.review.rating,
          review: res.review.review,
          image_id: [],
        });
      })
      .then(() => {
        setReviewId(id);
        setVisible(true);
        setIsUpdating(true);
      })
      .catch((err) => {
        console.log("Sorry", err);
        toast.error("Sorry, you cannot edit this review");
      });
  };

  const handlereviewDelete = (e, review_id) => {
    e.preventDefault();
    processDeleteRequest(`/product-review/${review_id}`, {}, true)
      .then((res) => {
        loadReviewByOrderId(id);
        toast.success(res.message);
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handlePreviewCancel = () =>
    setPreview({ ...preview, previewVisible: false });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreview({
      ...preview,
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };

  const handleImageChange = ({ fileList }) =>
    setFormData({ ...formData, images: fileList });


    const handleDisputeModalShow = (store_id, product_id, status)=>{
      if(status == 6){
        setIsDisputeModalOpen(true);
        setDisputeData({...disputeData, store_id, product_id})
      }
    }

  const handleDisputeChange = (e) => {
    setDisputeData({...disputeData, reason: e.target.value})
  };

  const handleDisputeSubmit = (e) =>{
    e.preventDefault();
    processPutRequest('/dispute', disputeData, true).then(res=>console.log(res.data)).then(err=>console.log(err))
  }

  return (
    <ContainerMarketPlace3 title="Checkout" isExpanded={true}>
      {/* Review modal */}
      <Modal
        visible={visible}
        title={null}
        footer={null}
        onCancel={() => setVisible(false)}
      >
        <form
          onSubmit={(e) => submitReview(e, reviewId)}
          className="ps-form--review"
          novalidate
          validate={isValidated}
        >
          {validationMessage && (
            <Alert variant="warning">{validationMessage}</Alert>
          )}

          <h4>{isUpdating ? "Update your review" : "Submit Your Review"}</h4>
          <p>
            Your email address will not be published. Required fields are marked
            <sup>*</sup>
          </p>
          <label>Your rating for this product</label>
          <div className="form-group form-group__rating">
            <Rate
              tooltips={desc}
              onChange={handleRateOnChange}
              value={formData?.rating || 0}
              character={<BsFillStarFill />}
            />
          </div>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            method="POST"
            listType="picture-card"
            fileList={formData?.images}
            onPreview={handlePreview}
            onChange={handleImageChange}
          >
            {fileList.length >= 8 ? null : (
              <div>
                <AiOutlinePlus />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </Upload>
          <Modal
            visible={preview.previewVisible}
            title={preview.previewTitle}
            footer={null}
            onCancel={handlePreviewCancel}
          >
            <img
              alt="example"
              style={{ width: "100%" }}
              src={preview.previewImage}
            />
          </Modal>

          <div className="form-group">
            <textarea
              name="review"
              className="form-control"
              rows="6"
              placeholder="Write your review here"
              onChange={inputOnChange}
              value={formData?.review || ""}
            ></textarea>
          </div>

          <div className="form-group submit">
            <button type="submit" className="ps-btn">
              {isUpdating ? "Update" : "Submit Review"}
            </button>
          </div>
        </form>
        {/* </Modal.Body> */}
      </Modal>

      {/* Dispute modal */}
      <Modal
        visible={isDisputeModalOpen}
        title={null}
        footer={null}
        onCancel={() => setIsDisputeModalOpen(false)}
      >
        <>
          <h4>{"Raise a dispute"}</h4>
          <textarea
              className="form-control"
              rows="3"
              placeholder="Write your dispute reasons"
              onChange={handleDisputeChange}
              defaultValue={disputeMessage}
            ></textarea>
            <Button className="mt-3 w-25 ml-auto p-3" onClick={handleDisputeSubmit}>Submit</Button>
        </>
      </Modal>
      {/*--Dispute modal --*/}

      <div className="main-content invoice-main-content">
        <div className="container">
          <div className="section-block invoice-section-block">
            <div className="block-header">
              <h2 className="block-title" />
            </div>
            <div className="invoice-outer">
              <div className="invoice-table-container table-responsive">
                <table className="invoice-table">
                  <tbody>
                    <tr className="v-top">
                      <td>
                        <img
                          src="https://parallaxlogic.dev/shukran-view/img/shukran.png"
                          alt
                          className="brand-logo"
                        />
                      </td>
                      <td className="text-right">
                        <span className="d-block">
                          Support@shukran24seven.com
                        </span>
                        <span className="d-block">info@shukran24seven.com</span>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <h3 className="invoice-title">
                          order id : #{json?.id}
                        </h3>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <table>
                          <tbody>
                            <tr>
                              <td width="20%" style={{ paddingBottom: 20 }}>
                                <h4 className="invoice-title-alt">Ship To</h4>
                                <span className="d-block">
                                  {json?.order?.address?.name}
                                </span>
                                <span className="d-block">
                                  {json?.order?.address?.phone_number}
                                </span>
                                <span className="d-block">
                                  {json?.order?.address?.address}
                                </span>
                                <span className="d-block"></span>
                              </td>
                              <td width="40%" style={{ paddingBottom: 20 }}>
                                <h4 className="invoice-title-alt">
                                  Payment Method
                                </h4>
                                <span className="d-block" />
                                <span className="d-block">
                                  {" "}
                                  {json?.order?.payment?.name}
                                </span>
                              </td>

                              <td width="20%" style={{ paddingBottom: 20 }}>
                                <span className="d-block order-date-tag">
                                  <strong>Order Date: </strong>
                                  {moment(json?.order?.created_at).format("ll")}
                                </span>
                                <span className="d-block pr-0">
                                  <svg
                                    width="310px"
                                    height="92px"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 310 92"
                                    xmlns="http://www.w3.org/2000/svg"
                                    version="1.1"
                                    style={{ transform: "translate(0,0)" }}
                                  >
                                    <rect
                                      x={0}
                                      y={0}
                                      width={310}
                                      height={92}
                                      style={{ fill: "#ffffff" }}
                                    />
                                    <g
                                      transform="translate(10, 10)"
                                      style={{ fill: "#000000" }}
                                    >
                                      <rect x={0} y={0} width={4} height={50} />
                                      <rect x={6} y={0} width={2} height={50} />
                                      <rect
                                        x={12}
                                        y={0}
                                        width={2}
                                        height={50}
                                      />
                                      <rect
                                        x={22}
                                        y={0}
                                        width={2}
                                        height={50}
                                      />
                                      <rect
                                        x={30}
                                        y={0}
                                        width={2}
                                        height={50}
                                      />
                                      <rect
                                        x={34}
                                        y={0}
                                        width={4}
                                        height={50}
                                      />
                                      <rect
                                        x={44}
                                        y={0}
                                        width={2}
                                        height={50}
                                      />
                                      <rect
                                        x={48}
                                        y={0}
                                        width={4}
                                        height={50}
                                      />
                                      <rect
                                        x={58}
                                        y={0}
                                        width={2}
                                        height={50}
                                      />
                                      <rect
                                        x={66}
                                        y={0}
                                        width={2}
                                        height={50}
                                      />
                                      <rect
                                        x={72}
                                        y={0}
                                        width={4}
                                        height={50}
                                      />
                                      <rect
                                        x={78}
                                        y={0}
                                        width={6}
                                        height={50}
                                      />
                                      <rect
                                        x={88}
                                        y={0}
                                        width={4}
                                        height={50}
                                      />
                                      <rect
                                        x={96}
                                        y={0}
                                        width={2}
                                        height={50}
                                      />
                                      <rect
                                        x={100}
                                        y={0}
                                        width={6}
                                        height={50}
                                      />
                                      <rect
                                        x={110}
                                        y={0}
                                        width={2}
                                        height={50}
                                      />
                                      <rect
                                        x={114}
                                        y={0}
                                        width={6}
                                        height={50}
                                      />
                                      <rect
                                        x={122}
                                        y={0}
                                        width={8}
                                        height={50}
                                      />
                                      <rect
                                        x={132}
                                        y={0}
                                        width={2}
                                        height={50}
                                      />
                                      <rect
                                        x={136}
                                        y={0}
                                        width={6}
                                        height={50}
                                      />
                                      <rect
                                        x={144}
                                        y={0}
                                        width={4}
                                        height={50}
                                      />
                                      <rect
                                        x={154}
                                        y={0}
                                        width={6}
                                        height={50}
                                      />
                                      <rect
                                        x={166}
                                        y={0}
                                        width={4}
                                        height={50}
                                      />
                                      <rect
                                        x={172}
                                        y={0}
                                        width={2}
                                        height={50}
                                      />
                                      <rect
                                        x={176}
                                        y={0}
                                        width={4}
                                        height={50}
                                      />
                                      <rect
                                        x={184}
                                        y={0}
                                        width={4}
                                        height={50}
                                      />
                                      <rect
                                        x={190}
                                        y={0}
                                        width={4}
                                        height={50}
                                      />
                                      <rect
                                        x={198}
                                        y={0}
                                        width={4}
                                        height={50}
                                      />
                                      <rect
                                        x={204}
                                        y={0}
                                        width={8}
                                        height={50}
                                      />
                                      <rect
                                        x={214}
                                        y={0}
                                        width={4}
                                        height={50}
                                      />
                                      <rect
                                        x={220}
                                        y={0}
                                        width={6}
                                        height={50}
                                      />
                                      <rect
                                        x={228}
                                        y={0}
                                        width={6}
                                        height={50}
                                      />
                                      <rect
                                        x={236}
                                        y={0}
                                        width={4}
                                        height={50}
                                      />
                                      <rect
                                        x={242}
                                        y={0}
                                        width={4}
                                        height={50}
                                      />
                                      <rect
                                        x={250}
                                        y={0}
                                        width={2}
                                        height={50}
                                      />
                                      <rect
                                        x={256}
                                        y={0}
                                        width={6}
                                        height={50}
                                      />
                                      <rect
                                        x={264}
                                        y={0}
                                        width={4}
                                        height={50}
                                      />
                                      <rect
                                        x={274}
                                        y={0}
                                        width={6}
                                        height={50}
                                      />
                                      <rect
                                        x={282}
                                        y={0}
                                        width={2}
                                        height={50}
                                      />
                                      <rect
                                        x={286}
                                        y={0}
                                        width={4}
                                        height={50}
                                      />
                                      <text
                                        style={{ font: "20px monospace" }}
                                        textAnchor="middle"
                                        x={145}
                                        y={72}
                                      >
                                        {json?.id}
                                      </text>
                                    </g>
                                  </svg>
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Item</th>
                              <th className="text-center">Quantity</th>
                              <th className="text-right">Amount (৳)</th>
                              <th style={{ width: "1%" }} />
                            </tr>
                          </thead>
                          <tbody>
                            {/*    <tr>
                                                    <td colSpan={4}>
                                                        <span
                                                            className="store-name">
                                                            <span className="icon">
                                                                <svg stroke="currentColor"
                                                                     fill="currentColor"
                                                                     strokeWidth={0}
                                                                     viewBox="0 0 616 512"
                                                                     height="1em" width="1em"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5.6 9.1.9 13.7.9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1.8-12.1 1.2-18.2 1.2z" /></svg>
                                                            </span>
                                                            <span
                                                                className="text">Jahanar import &amp; export
                                                            </span>
                                                        </span>
                                                        <span className="badge badge-info ml-4">Pending</span></td>
                                                </tr>*/}
                            {json?.store_product &&
                              json?.store_product.map((data1, index) => (
                                <tr key={data1?.id}>
                                  <td>
                                    <span className="d-block">
                                      <strong>
                                        <Link
                                          to={`/product/${data1.product.id}`}
                                        >
                                          {" "}
                                          {data1.product.name}{" "}
                                        </Link>
                                      </strong>
                                    </span>
                                    <span className="d-block text-muted" />
                                  </td>
                                  <td>{data1.quantity}</td>
                                  <td className="text-right">
                                    {data1.total_amount}
                                  </td>
                                  <td className="d-flex flex-column">
                                    <Tooltip title={json?.status == 6 ? "": "Only for delivered product"}>
                                    <button
                                      type="button"
                                      className="btn btn-link text-muted btn-sm dispute-review"
                                      onClick={()=>handleDisputeModalShow(data1?.store_id, data1?.product.id, json?.status)}
                                    >
                                      Dispute
                                    </button>
                                    </Tooltip>
                                  

                                    
                                        {orderReviews.find(
                                          (item) =>
                                            item.product_id == data1.product.id
                                        ) ? (
                                          <>
                                            {/* <button
                                                className="btn btn-link text-muted btn-sm dispute-review"
                                                onClick={(e) =>
                                                  handlereviewEdit(
                                                    e,
                                                    orderReviews.find(
                                                      (item) =>
                                                        item.product_id ==
                                                        data1.product.id
                                                    ).id
                                                  )
                                                }
                                              >
                                                Review Edit
                                              </button> */}
                                              
                                            <button
                                              className="btn btn-link text-muted btn-sm dispute-review"
                                              onClick={(e) =>
                                                handlereviewDelete(
                                                  e,
                                                  orderReviews.find(
                                                    (item) =>
                                                      item.product_id ==
                                                      data1.product.id
                                                  ).id
                                                )
                                              }
                                            >
                                              Delete Review
                                            </button>
                                          </>
                                        ) : (
                                          <Tooltip title={json?.status == 6 ? "": "Only for delivered product"}>
                                          <button
                                            type="button"
                                            className="btn btn-link text-muted btn-sm dispute-review"
                                            onClick={(e) => {
                                              if(json?.status == 6){
                                                setVisible(true);
                                                setFormData({
                                                  ...formData,
                                                  product_id: data1.product.id,
                                                });
                                              }else{
                                                e.preventDefault();
                                              }
                                              
                                            }}
                                          >
                                            Review
                                          </button>
                                          </Tooltip>
                                        )}
                                      
                                  </td>
                                </tr>
                              ))}
                            <tr>
                              {/*
                                                         {data.store_product.map((data1,index1) => (
                                                            <>
                                                                <td>
                                                        <span className="d-block">
                                                        <strong>
                                                        <a href="/products/details/604092662146a37c6fe03ba3" target="_blank">
                                                            {data1.product.name}
                                                        </a>
                                                    </strong></span><span className="d-block text-muted" /></td>
                                                                <td>{data1.quantity}</td>
                                                                <td className="text-right">{data1.total_amount}</td>
                                                                <td>
                                                                    <button disabled type="button" className="btn btn-link text-muted btn-sm dispute-review">Dispute
                                                                    </button>
                                                                    <button disabled type="button" className="btn btn-link text-muted btn-sm dispute-review">Review
                                                                    </button>
                                                                </td>
                                                            </>
                                                            ))}
                                                           */}
                            </tr>
                            <tr>
                              <td
                                colSpan={4}
                                style={{
                                  padding: 0,
                                  backgroundColor: "transparent",
                                }}
                              >
                                {isTimelineShowing && (
                                  <div
                                    className="delivery-progress-timeline grid-6"
                                    style={{ margin: 0 }}
                                  >
                                    <span className="progress-line" />
                                    <div className="timeline-inner">
                                      {timeLineArray.length >= 0 &&
                                        timeLineArray.map((data, index) => (
                                          <div
                                            key={data?.id}
                                            className={
                                              "progress-block " +
                                              (data.active ||
                                              timeLineStatus >= index
                                                ? "completed"
                                                : "")
                                            }
                                          >
                                            <div className="date">
                                              {index === 0 ? (
                                                moment(
                                                  timeLineArray?.created_at
                                                ).format("ll")
                                              ) : (
                                                <>
                                                  {index !== 0 &&
                                                  data?.updated_at !== null ? (
                                                    moment(
                                                      timeLineArray?.updated_at
                                                    ).format("ll")
                                                  ) : (
                                                    <>-</>
                                                  )}
                                                </>
                                              )}
                                            </div>
                                            <div className="circle" />
                                            <div className="text">
                                              <h4>{data?.name}</h4>
                                              <p />
                                            </div>
                                          </div>
                                        ))}
                                    </div>
                                  </div>
                                )}

                                <span
                                  className="btn-toggle-collapse"
                                  onClick={() =>
                                    setIsTimelineShowing(!isTimelineShowing)
                                  }
                                >
                                  {isTimelineShowing ? "Less" : "More"}
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    version="1.2"
                                    baseProfile="tiny"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M18.2 13.3l-6.2-6.3-6.2 6.3c-.2.2-.3.5-.3.7s.1.5.3.7c.2.2.4.3.7.3h11c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7s-.1-.5-.3-.7z" />
                                  </svg>
                                </span>
                              </td>
                            </tr>
                            <tr className="text-bold">
                              <td colSpan={3} className="text-right">
                                Subtotal
                              </td>
                              <td className="text-right">
                                {json?.order?.sub_total_amount}
                              </td>
                            </tr>
                            <tr className="text-bold">
                              <td colSpan={3} className="text-right">
                                Discount
                              </td>
                              <td className="text-right">
                                {json?.order?.discount_amount}
                              </td>
                            </tr>

                            <tr className="text-bold">
                              <td colSpan={3} className="text-right">
                                Grand Total
                              </td>
                              <td className="text-right">
                                {json?.order?.total_amount}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerMarketPlace3>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleShowAuthModal: () => dispatch(handleShowAuthModal()),
  };
};

export default connect(null, mapDispatchToProps)(Invoice);

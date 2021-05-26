import moment from "moment";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import "../../../../assets/scss/customer-review.scss";
import { handleShowAuthModal } from "../../../../redux";
import {
  processGetRequest,
  processPostRequest
} from "../../../../services/baseServices";
import Rating from "../../../elements/Rating";

const PartialReview = ({ handleShowAuthModal, product }) => {
  const [formData, setFormData] = useState({ product_id: product?.id });
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [validationMessage, setValidationMessage] = useState("");
  const [reviewInfo, setReviewInfo] = useState({});

  const inputOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRateOnChange = (value) => {
    setFormData({ ...formData, rating: value });
  };

  const submitReview = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidationMessage("Please fill the required fields!");
    } else {
      processPostRequest("/customer-review", formData, true)
        .then((res) => {
          form.reset();
          toast(res.data.message);
        })
        .then((err) => {
          if (err.response.status === 401) {
            setValidationMessage("Please log in before giving review");
            handleShowAuthModal();
          } else {
            setValidationMessage(err.response.data.message);
          }
        });

      //   const authData = userData();
      //   axios
      //     .post(
      //       `http://localhost:80/shukran-backend/api/v1/customer-review`,
      //       formData,
      //       {
      //         headers: {
      //           "Content-Type": "application/json",
      //           Authorization: authData?.token,
      //         },
      //       }
      //     )
      //     .then((res) => {
      //       form.reset();
      //       toast(res.data.message);
      //     })
      //     .catch((err) => {
      //       if (err.response.status === 401) {
      //         setValidationMessage("Please log in before giving review");
      //         handleShowAuthModal();
      //       } else {
      //         setValidationMessage(err.response.data.message);
      //       }
      //     });
    }
  };

  useEffect(() => {
    processGetRequest(`/product-review/${product?.id}`).then(res=>{
      console.log("response", res)
        setReviewInfo(res);
    }).catch(err=>{
        console.log(err);
    })

    // axios
    //   .get(
    //     `http://localhost:80/shukran-backend/api/v1/customer-review/${product?.id}`)
    //   .then((res) => {
    //     setReviewInfo(res.data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  }, []);

  console.log("review info", reviewInfo);

  return (
    <div className="row">
      <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 mb-5">
        <div className="ps-block--average-rating">
          <div className="ps-block__header">
            <h3>{reviewInfo?.avg_rating || "N/A"}</h3>
            <Rating count={reviewInfo?.avg_rating || 0} />

            <span>{reviewInfo?.count} Review</span>
          </div>
          {reviewInfo?.grp_rating?.map((rating) => (
            <div className="ps-block__star">
              <span>{rating?.rating} Star</span>
              <div
                className="ps-progress"
                data-value={(rating?.total / reviewInfo?.count) * 100}
              >
                <span></span>
              </div>
              <span>{(rating?.total / reviewInfo?.count) * 100}%</span>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ">
        <form
          onSubmit={submitReview}
          className="ps-form--review needs-validation"
          action="/"
          method="get"
          novalidate
        >
          {validationMessage && (
            <Alert variant="warning">{validationMessage}</Alert>
          )}

          <h4>Submit Your Review</h4>
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
          <div className="form-group">
            <textarea
              name="review"
              className="form-control"
              rows="6"
              placeholder="Write your review here"
              required
              onChange={inputOnChange}
            ></textarea>
          </div> */}
          {/* <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12  ">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12  ">
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
            </div>
          </div> */}
          {/* <div className="form-group submit">
            <button type="submit" className="ps-btn">
              Submit Review
            </button>
          </div>
        </form>
      </div> */}
      {
        reviewInfo?.all_review?.length > 0 && <div className="review-container">
        <h4>Customers Review</h4>
        <div className="customer-review">
          {reviewInfo?.all_review?.map((review) => (
            <div className="single-review">
              <Rating count={review?.rating || 0} />
              <p>{review?.created_at ? moment(review?.created_at).fromNow() : ""}</p>
              <p className="customer-name-container">
                by{" "}
                <span className="customer-name">{review?.name || "N/A"}</span>
              </p>
              
              <p className="review">{review?.review || "N/A"}</p>
              {
                review?.product_review_image?.length > 0 && <div className="d-flex flex-wrap w-100 w-md-50">
                  {
                    review?.product_review_image?.map(image=>(
                      <img width="100px" height="100px" className="p-2" src={image?.image} alt="" />
                    ))
                  }
                </div>
              }
              
            </div>
          ))}
        </div>
      </div>
      }
      
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleShowAuthModal: () => dispatch(handleShowAuthModal()),
  };
};

export default connect(null, mapDispatchToProps)(PartialReview);

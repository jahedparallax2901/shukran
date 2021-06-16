import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiAlarmClock } from "react-icons/gi";
import { AiOutlineHeart, AiOutlineLogout } from "react-icons/ai";
import user from "../../../assets/img/users/3.jpg";
import { FiUser } from "react-icons/fi";
import { RiCouponLine, RiSignalWifiErrorLine } from "react-icons/ri";
import { FaRegAddressCard, FaRegMoneyBillAlt } from "react-icons/fa";
import { FiX, MdEdit, TiUserOutline } from "react-icons/all";
import {
  processGetRequest,
  processPostRequest,
} from "../../../services/baseServices";
import { toast } from "react-toastify";
import {
  Upload,
  Input,
  Tooltip,
  Modal,
  Button,
  Cascader,
  Select,
  options,
  Space,
  Form,
  Alert,
  DatePicker,
} from "antd";
import ImgCrop from "antd-img-crop";
import { EditOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Option } from "antd/es/mentions";
import { connect } from "react-redux";
import { handleClearCart, handleSignOut } from "../../../redux";
import { handleClearWishlist } from "../../../redux/wishlist/wishlistActions";
import moment from "moment";

const AccountMenuSidebar = ({
  selectedTab,
  handleClearWishlist,
  handleSignOut,
  handleClearCart,
}) => {
  const accountLinks = [
    {
      text: "My Account",
      url: "/account/my-account",
      icon: <FiUser />,
    },
    {
      text: "My Orders",
      url: "/account/my-orders",
      icon: <GiAlarmClock />,
    },
    // {
    //   text: "My Coupons",
    //   url: "/account/coupons",
    //   icon: <RiCouponLine />,
    // }
    {
      text: "My Wishlist",
      url: "/account/wishlist",
      icon: <AiOutlineHeart />,
    },
    // {
    //   text: "Disputes",
    //   url: "/account/disputes",
    //   icon: <RiSignalWifiErrorLine />,
    // },
    {
      text: "Shipping Address",
      url: "/account/shipping-address",
      icon: <FaRegAddressCard />,
    },
    {
      text: "My Contacts",
      url: "/account/contacts",
      icon: <FaRegMoneyBillAlt />,
    },
  ];

  const [userDetails, setUserDetails] = useState();

  const [visible, setVisible] = React.useState();
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState("Content of the modal");
  const [fileList, setFileList] = useState([]);
  const [formData, setFormData] = useState({});
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [err, setErr] = useState();
  const [errMsg, setErrMsg] = useState(null);

  useEffect(() => {
    getData();
    setErr(false);
  }, []);

  const getData = () => {
    processGetRequest("/user-details", {}, true)
      .then((res) => {
        console.log(res);
        setUserDetails(res.user_info);
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const showModal = () => {
    setVisible(true);
    setFormData({});
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setFormData({});
    setFileList([]);
    setVisible(false);
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnUpdate = (e) => {
    e.preventDefault();
    if (isChangePassword) {
      if (
        !formData?.password ||
        !formData?.new_password ||
        !formData?.new_password_confirmation
      ) {
        setErr(true);
        setErrMsg("All the field are required");
      } else if (
        formData?.new_password !== formData?.new_password_confirmation
      ) {
        setErr(true);
        setErrMsg("new password and confirm password does not match");
      } else if (formData?.password?.length < 6) {
        setErr(true);
        setErrMsg("password minimum 6 characters");
      } else {
        processPostRequest(
          `/password-change-auth`,
          {
            password: formData?.password,
            new_password: formData?.new_password,
            new_password_confirmation: formData?.new_password_confirmation,
          },
          true
        )
          .then((res) => {
            setFormData({
              ...formData,
              password: "",
              new_password: "",
              new_password_confirmation: "",
            });
            setErr(false);
            setErrMsg("");
            toast.success(res.data.message);
          })
          .catch((err) => {
            setErrMsg(err.message);
          });
      }
    } else {
      update();
    }
  };

  const update = () => {
    setConfirmLoading(true);
    const data = new FormData();
    Object.keys(formData).map((item) => {
      data.append(item, formData[item]);
    });
    processPostRequest("/update-details", data, true)
      .then((res) => {
        if (res.status === 200) {
          getData();
          toast.success(res.data.message);
          setVisible(false);
          setConfirmLoading(false);
          setFormData({
            name: "",
            phone: "",
            email: "",
            date_of_birth: "",
            gender: "",
          });
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    console.log(newFileList);
    setFormData({
      ...formData,
      profile_picture: newFileList[0]?.originFileObj,
    });
  };

  const onPreview = async (file) => {
    console.log(file);
    let src = file.url;
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const handleChange = (value) => {
    setFormData({ ...formData, gender: value });
  };

  const SignOut = () => {
    localStorage.clear();
    handleClearWishlist();
    handleSignOut();
    handleClearCart();
  };

  const birthDataOnChange = (date, dateString) => {
    setFormData({ ...formData, date_of_birth: dateString });
  };

  return (
    <aside className="ps-widget--account-dashboard">
      <div className="ps-widget__header">
        <img
          alt={""}
          style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
          src={userDetails?.details?.image}
        />
        <figure>
          <figcaption>{userDetails?.name}</figcaption>
          <p>
            <a href="#">+880-{userDetails?.phone}</a>
          </p>
          <p className="mb-2">{userDetails?.email}</p>
          <div
            onClick={() => {
              setIsChangePassword(false);
              showModal();
              setFormData({
                name: userDetails?.name,
                email: userDetails?.email,
                phone: userDetails?.phone,
                date_of_birth: userDetails?.details?.date_of_birth,
                gender: userDetails?.details?.gender,
              });
            }}
            className="btn btn-secondary mr-2"
            href=""
          >
            Edit
          </div>
          <div
            onClick={() => {
              setIsChangePassword(true);
              showModal();
            }}
            class="btn btn-secondary"
            href=""
          >
            Change Password
          </div>
        </figure>
      </div>
      <div className="ps-widget__content">
        <ul className="nav nav-pills d-block mb-3">
          {accountLinks.map((link) => (
            <li
              key={link.text}
              className={
                link.text === selectedTab ? "nav-item active" : "nav-item"
              }
            >
              <Link to={link.url}>
                <i>{link.icon}</i>
                {link.text}
              </Link>
            </li>
          ))}
          <li className="nav-item">
            <Link
              onClick={(e) => {
                e.preventDefault();
                SignOut();
              }}
            >
              <i>
                <AiOutlineLogout />
              </i>
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/*TODO: Modal Start*/}
      <Modal
        title={isChangePassword ? "Change password" : "Edit profile"}
        visible={visible}
        onOk={handleOnUpdate}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={[
          <Button key="dsgg" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            style={{ backgroundColor: "#1d6c32", color: "white" }}
            key="dad"
            onClick={handleOnUpdate}
          >
            Update
          </Button>,
        ]}
      >
        {!isChangePassword ? (
          <>
            <ImgCrop rotate>
              <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
              >
                {fileList.length < 1 && "+ Upload"}
              </Upload>
            </ImgCrop>

            <Input
              name={`name`}
              onChange={(e) => {
                handleOnChange(e);
              }}
              defaultValue={formData?.name}
              style={{ marginTop: "10px" }}
              placeholder="Enter your username"
              prefix={<UserOutlined className="site-form-item-icon" />}
            />

            <Input
              name={`email`}
              onChange={handleOnChange}
              defaultValue={formData?.email}
              disabled={userDetails?.email}
              style={{ marginTop: "10px" }}
              placeholder="Enter your email"
              suffix={
                <a href={`#`}>
                  <EditOutlined style={{ color: "#1d6c32" }} />
                </a>
              }
              prefix={<MailOutlined className="site-form-item-icon" />}
            />

            <Input
              name={`phone`}
              onChange={handleOnChange}
              defaultValue={formData?.phone}
              disabled={userDetails?.phone}
              style={{ marginTop: "10px" }}
              placeholder=""
              prefix={`+880 `}
              suffix={
                <a href={`#`}>
                  <EditOutlined style={{ color: "#1d6c32" }} />
                </a>
              }
            />

            <DatePicker
              placeholder="Select Birthdate"
              className="w-100 mt-3"
              onChange={birthDataOnChange}
              defaultValue={
                formData?.date_of_birth
                  ? moment(formData?.date_of_birth, "YYYY-MM-DD")
                  : ""
              }
              disabled={userDetails?.details?.date_of_birth}
            />

            <Input.Group compact>
              <Select
                style={{ width: "100%", marginTop: "10px" }}
                onChange={handleChange}
                defaultValue={formData?.gender}
              >
                <Option value="m">Male</Option>
                <Option value="f">Female</Option>
                <Option value="o">Other</Option>
              </Select>
            </Input.Group>
          </>
        ) : (
          <>
            <Form>
              {err === true && (
                <Alert message={errMsg} type="error" showIcon closable />
              )}
              <Input.Password
                style={{ marginTop: "10px" }}
                name={`password`}
                onChange={handleOnChange}
                value={formData?.password}
                placeholder="old password"
              />
              <Input.Password
                onChange={handleOnChange}
                style={{ marginTop: "10px" }}
                placeholder="new password"
                value={formData?.new_password}
                name={`new_password`}
              />
              <Input.Password
                onChange={handleOnChange}
                style={{ marginTop: "10px" }}
                name={`new_password_confirmation`}
                value={formData?.new_password_confirmation}
                placeholder="confirm password"
              />
            </Form>
          </>
        )}
      </Modal>

      {/*TODO: Modal End*/}
    </aside>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSignOut: () => dispatch(handleSignOut()),
    handleClearCart: () => dispatch(handleClearCart()),
    handleClearWishlist: () => dispatch(handleClearWishlist()),
  };
};

export default connect(null, mapDispatchToProps)(AccountMenuSidebar);

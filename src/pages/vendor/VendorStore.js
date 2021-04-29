import React, {useEffect, useState} from "react";
import { BsChevronRight, BsPhone } from "react-icons/bs";
import ContainerMarketPlace3 from "../../components/layouts/ContainerMarketPlace3";
import ShopBanner from "../../components/partials/store/ShopBanner";
import img1 from "../../assets/img/1.jpg";
import { BiEnvelope, BiSearchAlt2 } from "react-icons/bi";
import shopLogo1 from "../../assets/img/shop-logo1.jpeg";
import { AiOutlineQuestionCircle, AiOutlineStar } from "react-icons/ai";
import banner4 from "../../assets/img/downloads/banner4.jpg";
import banner5 from "../../assets/img/downloads/banner5.png";
import banner6 from "../../assets/img/downloads/banner6.png";
import shoeShopLogo from "../../assets/img/downloads/shoe-shop-logo.jpg";
import girlsShopLogo from "../../assets/img/downloads/girls-shop-logo.jpg";
import girlsShopLogo2 from "../../assets/img/downloads/girls-shop-logo2.jpg";
import {processGetRequest} from "../../services/baseServices";
import Pagination from "react-js-pagination";

const VendorStore = () => {

  const [storeData , setStoreData] = useState([])
  const [storeCategory , setStoreCategory] = useState([])
  const [query , setQuery] = useState({})
  const [searchKey , setSearchKey] = useState("")
  const [pagination, setPagination] = useState({});


  useEffect(()=>{
    setQuery({page: "1"})
  },[])


  useEffect( () =>{
    getData()
  },[query])



  const getData = () =>{
    processGetRequest('/merchant/store-list',query,true).then((res)=>{
      setStoreData(res.merchants.data)
      setStoreCategory(res.store_categories);
    })
  }



  const handlePageChange = async (pageNumber) => {
    console.log(pageNumber)
    setQuery({...query , page : pageNumber })


    /*const params = { ...queryParams, page: pageNumber };
    const result = await getTableData('/users',params);
    setTableList(result.items);
    setPagination({ ...pagination, ...result.pagination });*/
  };


  return (
    <ContainerMarketPlace3>
      <div className="ps-page--single ps-page--vendor custom-layout">
        <section className="ps-store-list">
          <ShopBanner />
          <div className="container">
            <form
              role="search"
              method="get"
              className="store-search-form"
              onSubmit={(e)=>{
                e.preventDefault();
                setQuery({
                  q: searchKey
                })
              }}
            >
              <input
                onChange={(e)=>{
                  setSearchKey(e.target.value)
                }}
                type="search"
                id="search"
                className="search-field wcfmmp-store-search"
                placeholder="Search &hellip;"
                name="wcfmmp_store_search"
                title="Search store &hellip;"
              />
              <select
                  onChange={
                    (e)=> {
                      setQuery({...query , store_category_id : e.target.value })
                    }
                  }
                id="search-select-field"
                name="store-select-field"
                className="store-select-field"
              >
                <option value="">Choose Category</option>
                <option value="18">Interior</option>
                <option value="39">Dash Cover</option>
                <option value="34">Seats</option>
                <option value="21">Lighting</option>
                <option value="155">Headlight</option>
                <option value="157">Accessories Lighhting</option>
                <option value="156">Off-Road Light</option>
                <option value="35">Exterior</option>
                <option value="33">Off-Road Bumpers</option>
                <option value="41">Body Kits</option>
                <option value="52">Custom Grilles</option>
                <option value="42">Wheels &amp; Tires</option>
                <option value="37">Factory Wheels</option>
                <option value="43">Custom Wheels</option>
                <option value="46">Center Caps</option>
                <option value="44">Performance</option>
                <option value="138">Exhausted System</option>
                <option value="140">Performance Chips</option>
                <option value="139">Brakes</option>
                <option value="45">Body parts</option>
                <option value="158">Quater Panels</option>
                <option value="30">Mirrors</option>
              </select>
              <input
                type="hidden"
                id="pagination_base"
                name="pagination_base"
                value=""
              />
              <input
                type="hidden"
                id="wcfm_paged"
                name="wcfm_paged"
                value="1"
              />
              <input type="hidden" id="nonce" name="nonce" value="4efca6309d" />
              <div className="wcfmmp-overlay" style={{display: 'none'}}>
                <span className="wcfmmp-ajax-loader"></span>
              </div>
            </form>
            <div className="ps-section__wrapper">
              <div className="ps-section__left">
           {/*     <aside className="widget widget--vendor">
                  <h3 className="widget-title">Product Search</h3>
                  <div className="form-group--icon">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Search..."
                    />
                    <i>
                      <BiSearchAlt2 />
                    </i>
                  </div>
                </aside>*/}
                <aside className="widget widget--vendor">
                  <h3 className="widget-title">Store Categories</h3>
                  <ul className="ps-list--arrow">

                    {storeCategory && storeCategory.map( (res , index)=>(
                        <li key={index}>
                          <a href="#">{res.name}</a>
                        </li>
                    ))}

                  </ul>
                </aside>
              </div>
              <div className="ps-section__right">
                <nav className="ps-store-link">
                  <ul className="d-flex justify-content-between vendor-store-pagination">
                    <li className="vendor-store-pagination-first-li">
                      <form
                        role="search"
                        method="get"
                        className="store-search-form1"
                        action="#"
                      >
                        <select
                          onChange={
                            (e)=> {
                              setQuery({...query , store_category_id : e.target.value })
                            }
                          }
                          id="search-select-field1"
                          name="store-select-field1"
                          className="store-select-field1"
                        >
                          <option value="">Choose Category</option>
                          <option value="18">Interior</option>
                          <option value="39">Dash Cover</option>
                          <option value="34">Seats</option>
                          <option value="21">Lighting</option>
                          <option value="155">Headlight</option>
                          <option value="157">Accessories Lighhting</option>
                          <option value="156">Off-Road Light</option>
                          <option value="35">Exterior</option>
                          <option value="33">Off-Road Bumpers</option>
                          <option value="41">Body Kits</option>
                          <option value="52">Custom Grilles</option>
                          <option value="42">Wheels &amp; Tires</option>
                          <option value="37">Factory Wheels</option>
                          <option value="43">Custom Wheels</option>
                          <option value="46">Center Caps</option>
                          <option value="44">Performance</option>
                          <option value="138">Exhausted System</option>
                          <option value="140">Performance Chips</option>
                          <option value="139">Brakes</option>
                          <option value="45">Body parts</option>
                          <option value="158">Quater Panels</option>
                          <option value="30">Mirrors</option>
                        </select>
                      </form>
                    </li>
                    <li>


                      <Pagination
                          itemClass="page-item"
                          linkClass="page-link"
                          activePage={query?.page}
                          itemsCountPerPage={storeData?.per_page}
                          totalItemsCount={storeData?.total}
                          pageRangeDisplayed={3}
                          onChange={handlePageChange}
                      />

                     {/* <ul className="pagination">
                        <li className="active">
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">
                            Next Page
                            <i>
                              {" "}
                              <BsChevronRight />
                            </i>
                          </a>
                        </li>
                      </ul>*/}
                    </li>
                  </ul>
                </nav>
                <div className="vendor-category-area">
                  <div className="row">
                    {storeData.map((item , index) => (
                        <div key={index} className="col-md-6 col-sm-12">
                          <div className="single-category-vendor">
                            <div className="category-vendor-top">
                              <img src={item?.store_detail?.file_attach_cover?.file_url} alt="fail" />
                            </div>
                            <div className="category-vendor-body">
                              <div className="shop-owner">
                                <img src={item?.store_detail?.file_attach_logo?.file_url} alt="fail" />
                                <a className="visit-store" href="vendor-store.html">
                                  Visit Store
                                </a>
                              </div>
                              <div className="shop-details">
                                <h1 className="shop-name">{item?.name}</h1>
                                <p className="shop-review">
                                  <i>
                                    <AiOutlineStar />
                                  </i>
                                  <i>
                                    <AiOutlineStar />
                                  </i>
                                  <i>
                                    <AiOutlineStar />
                                  </i>
                                  <i>
                                    <AiOutlineStar />
                                  </i>
                                  <i>
                                    <AiOutlineStar />
                                  </i>
                                  <i className="las la-star-of-david"></i>
                                </p>
                                <p className="shop-email">
                                  <i>
                                    <BiEnvelope />
                                  </i>{" "}
                                  {item?.vendor?.email}
                                </p>
                                <p className="shop-number">
                                  <i>
                                    <BsPhone />
                                  </i>{" "}
                                  {item?.vendor?.phone}
                                </p>
                                <button className="shop-inquiry">
                                  <i>
                                    <AiOutlineQuestionCircle />
                                  </i>
                                  Inquiry
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                    ))}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ContainerMarketPlace3>
  );
};

export default VendorStore;

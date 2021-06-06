import React, { useEffect, useState } from 'react';
import { Pagination } from 'antd';
import { dealOfTheDayProducts } from '../../../temp-data/homeData';
import Product from '../../product/module/Product';
import ProductWide from '../../product/ProductWide';
import { generateTempArray } from '../../../utilities/common-helpers';
import SkeletonProduct from '../shared/SkeletonProduct';
import ModuleShopSortBy from './module/ModuleShopSortBy';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { ImList } from 'react-icons/im';

const ShopItems = ({ columns = 4, pageSize = 12 }) => {
    const [listView, setListView] = useState(true);
    const [productItems, setProductItems] = useState(null);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [classes, setClasses] = useState(
        'col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6'
    );

    function handleChangeViewMode(e) {
        e.preventDefault();
        setListView(!listView);
    }

    async function getProducts() {
        setLoading(true);
        const responseData = dealOfTheDayProducts;
        if (responseData) {
            setProductItems(dealOfTheDayProducts);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    function handlePagination(page, pageSize) {
        // Router.push(`/shop?page=${page}`);
    }

    async function getTotalRecords(params) {
        const responseData = dealOfTheDayProducts;
        if (responseData) {
            setTotal(dealOfTheDayProducts.length);
        }
    }

    function handleSetColumns() {
        switch (columns) {
            case 2:
                setClasses('col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6');
                return 3;
                break;
            case 4:
                setClasses('col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6');
                return 4;
                break;
            case 6:
                setClasses('col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6');
                return 6;
                break;

            default:
                setClasses('col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6');
        }
    }

    useEffect(() => {
        // let params;
        // if (query) {
        //     if (query.page) {
        //         params = {
        //             _start: page * pageSize,
        //             _limit: pageSize,
        //         };
        //     } else {
        //         params = query;
        //         params._limit = pageSize;
        //     }
        // } else {
        //     params = {
        //         _limit: pageSize,
        //     };
        // }
        getTotalRecords();
        getProducts();
        handleSetColumns();
    }, []);

    // Views
    let productItemsView;
    if (!loading) {
        if (productItems && productItems.length > 0) {
            if (listView) {
                const items = productItems.map((item) => (
                    <div className={classes} key={item.id}>
                        <Product product={item} />
                    </div>
                ));
                productItemsView = (
                    <div className="ps-shop-items">
                        <div className="row">{items}</div>
                    </div>
                );
            } else {
                productItemsView = productItems.map((item) => (
                    <ProductWide product={item} key={item?.id}/>
                ));
            }
        } else {
            productItemsView = <p>No product found.</p>;
        }
    } else {
        const skeletonItems = generateTempArray(12).map((item) => (
            <div className={classes} key={item}>
                <SkeletonProduct />
            </div>
        ));
        productItemsView = <div className="row">{skeletonItems}</div>;
    }

    return (
        <div className="ps-shopping">
            <div className="ps-shopping__header">
                <p>
                    <strong className="mr-2">{total}</strong>
                    Products found
                </p>
                <div className="ps-shopping__actions">
                    <ModuleShopSortBy />
                    <div className="ps-shopping__view">
                        <p>View</p>
                        <ul className="ps-tab-list">
                            <li className={listView === true ? 'active' : ''}>
                                <a
                                    href="#"
                                    onClick={(e) => handleChangeViewMode(e)}>
                                    <i>
                                        <BsGrid3X3Gap/>
                                    </i>
                                </a>
                            </li>
                            <li className={listView !== true ? 'active' : ''}>
                                <a
                                    href="#"
                                    onClick={(e) => handleChangeViewMode(e)}>
                                    <i >
                                        <ImList/>
                                    </i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="ps-shopping__content">{productItemsView}</div>
            <div className="ps-shopping__footer text-center">
                <div className="ps-pagination">
                    <Pagination
                        total={total - 1}
                        pageSize={pageSize}
                        responsive={true}
                        showSizeChanger={false}
                        current={1}
                        onChange={(e) => handlePagination(e)}
                    />
                </div>
            </div>
        </div>
    );
};

export default ShopItems;

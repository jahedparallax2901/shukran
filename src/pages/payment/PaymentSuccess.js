import React from "react";
import ContainerMarketPlace3 from "../../components/layouts/ContainerMarketPlace3";
import { Result, Button } from 'antd';
import {Link} from "react-router-dom";

const PaymentSuccess = () =>{



    return(
        <ContainerMarketPlace3 title="Payment Success" isExpanded={true}>
            <div id="homepage-5">
                <div className="container">
                    <Result
                        style={{paddingTop:'15%',paddingBottom:'15%'}}
                        status="success"
                        title="Payment successfully done!"
                        subTitle="We are packaging your things and ship them asap!"
                        extra={[
                            <Button style={{backgroundColor: '#ed1c24'}} type="primary" key="console">
                                <Link to={`/account/my-orders`}>View Order List</Link>
                            </Button>
                        ]}
                    />
                </div>
            </div>
        </ContainerMarketPlace3>
    )
}

export default PaymentSuccess


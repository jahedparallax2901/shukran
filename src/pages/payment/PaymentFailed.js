import React from "react";
import ContainerMarketPlace3 from "../../components/layouts/ContainerMarketPlace3";
import { Result, Button } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";

const PaymentFailed = () =>{


    return(
        <ContainerMarketPlace3 title="Payment Success" isExpanded={true}>
            <div id="homepage-5">
                <div className="container">

                    <Result
                        style={{paddingTop:'10%' ,paddingBottom: '10%'}}
                        status="error"
                        title="Payment Error"
                        subTitle="Payment error message"
                        extra={[
                            <Button style={{backgroundColor: '#ed1c24'}} type="primary" key="console">
                                <Link to={`/`}>Go Back</Link>
                            </Button>,
                            <Button key="buy"> <Link to={`/checkout`}>Retry</Link></Button>
                        ]}
                    />

                </div>
            </div>
        </ContainerMarketPlace3>
    )
}

export default PaymentFailed


import React from 'react';

const PartialSpecification = ({product}) => (
    <div className="table-responsive">
        <table className="table table-bordered ps-table ps-table--specification">
            <tbody>
                <tr>
                    <td>Color</td>
                    <td>{product?.details?.colors || "N/A"}</td>
                </tr>
                <tr>
                    <td>Height</td>
                    <td>{product?.details?.height || "N/A"}</td>
                </tr>
                <tr>
                    <td>Weight</td>
                    <td>{product?.details?.weight || "N/A"}</td>
                </tr>
                <tr>
                    <td>Length</td>
                    <td>{product?.details?.length || "N/A"}</td>
                </tr>
                <tr>
                    <td>Wide</td>
                    <td>{product?.details?.wide || "N/A"}</td>
                </tr>
                
            </tbody>
        </table>
    </div>
);

export default PartialSpecification;

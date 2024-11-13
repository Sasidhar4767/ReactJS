import React, { useState } from "react";

let ProductITems = () =>{

    let [state , setState] = useState({
        product : {
            sno : 1,
            image : 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=600&sh=600',
            name : 'watch',
            price : 1500,
            Qty : 2
       }

    });
    let {product} = state;

    let incQty = () =>{
       setState((state) => ({
        product: {
            ...state.product,
            Qty: state.product.Qty + 1
        }
        
       }));
    }

    let decQty = () =>{
        setState((state) => ({
         product: {
             ...state.product,
             Qty: state.product.Qty - 1 > 0 ? state.product.Qty - 1 : 1
         }
         
        }));
    }

    
    return(

        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="cord-header">
                                <h1>Product Items</h1>
                            </div>
                            <div className="card-body row-6">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in maiores maxime velit officiis laborum est ratione modi amet tempore.</p>
                            </div>
                        </div>
                    </div>

                    <div className="container mt-3">
                        <div className="row">
                            <div className="col">
                                <table className="table table-center table-hover">
                                    <tr className="bg-dark text-white" >
                                        <th>sno</th>
                                        <th>image</th>
                                        <th>name</th>
                                        <th>price</th>
                                        <th>Qty</th>
                                        <th>total</th>
                                    </tr>
                                    <tr className="tr tr-center tr-hover">
                                        <td>{product.sno}</td>
                                        <td>
                                            <img src={product.image} alt="" width={100} height={100}/>
                                        </td>
                                        <td>
                                            {product.name}
                                        </td>
                                        <td>
                                            {product.price}
                                        </td>
                                        <td>
                                            <span onClick={decQty} className="bg-dark text-white mx-1" >  - </span>
                                            {product.Qty}
                                            <span onClick={incQty} className="bg-dark text-white mx-1"> + </span>
                                        </td>
                                        <td>
                                            {product.price * state.product.Qty}
                                        </td>
                                        
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductITems
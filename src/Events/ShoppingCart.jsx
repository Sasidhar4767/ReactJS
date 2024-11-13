import React, { useState } from "react";

const ShoppingCart = () => {

    let [state , setState] = useState ({
        product : [
            {
                sno : 1,
                image : 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=600&sh=600',
                name : 'watch',
                price : 1500,
                Qty : 2
           },
           {
            sno : 2,
            image : 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=600&sh=600',
            name : 'watch',
            price : 1500,
            Qty : 1
            },
            {
                sno : 3,
                image : 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=600&sh=600',
                name : 'watch',
                price : 1800,
                Qty : 3
           },
           {
            sno : 4,
            image : 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=600&sh=600',
            name : 'watch',
            price : 1100,
            Qty : 2
            },
            {
                sno : 5,
                image : 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=600&sh=600',
                name : 'watch',
                price : 1900,
                Qty : 2
           }
        ]
        
    })

    let {product} = state;

    let incrQty = (productID) => {
        let items = product.map(product => {
            if (product.sno === productID) {
                return{
                    ...product,
                    Qty : product.Qty + 1 
                }
                
            }
            return product;
        });

        setState((state) => ({
            product: [...items]
        }));
    };

    let decrQty = (productID) => {
        let items = product.map(product => {
            if (product.sno === productID) {
                return{
                    ...product,
                    Qty : product.Qty - 1 > 0 ? product.Qty - 1 : 1
                }
                
            }
            return product;
        });

        setState((state) => ({
            products: [...items]
        }));
       
    };

    let grandTotal = () =>{
        let total = 0;
        for(let product of items){
            total += product.price * product.Qty;
    
        }
        return total;
    }



    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card-header">
                            <h1>this is Shoping Cart</h1>
                        </div>
                        <div className="card-body row-50">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id qui voluptates illo error, modi rem.</p>

                        </div>
                    </div>
                </div>
            </div>
            <div >
               <table className="table table-center table-hover">
                    <thead>
                        <tr className="bg-success text-white" >
                            <th>sno</th>
                            <th>image</th>
                            <th>name</th>
                            <th>price</th>
                            <th>Qty</th>
                            <th>total</th>
                        </tr> 
                    </thead> 
                    <tbody>
                        {
                            product.map((product) => {
                                return(
                                    <tr  key={product.sno} className="tr tr-center tr-hover">
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
                                            <span onClick={() => decrQty(product.sno)} className="bg-dark text-white mx-1" >  - </span>
                                            {product.Qty}
                                            <span onClick={()=> incrQty(product.sno)} className="bg-dark text-white mx-1"> + </span>
                                        </td>
                                        <td>
                                            { product.Qty * product.price }
                                        </td>
                                        
                                    </tr>
                                )
                            })
                        }

                        <tr>
                            <td colSpan={4}></td>
                            <td> Grand Total</td>
                            <td>{grandTotal}</td>
                        </tr>
                        
                    </tbody> 
                </table>
            </div>

        </React.Fragment>
    )
}
export default ShoppingCart
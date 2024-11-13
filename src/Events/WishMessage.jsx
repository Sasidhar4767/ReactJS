import React, { useState } from "react";

let WishMessage = () =>{
    let [state , setState] = useState ({
        message : 'Hello'
    })

let SayGoodMorning = () =>{
    setState((state) => ({
        message : 'Good Morning'
    }));
}

let SayGoodAfternoon = (value) =>{
    setState((state) => ({
        message : value
    }))

}

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header bg-success">
                                <h2>Wish Message</h2>
                            </div>
                            <div className="card-body">
                                <h3> {state.message} </h3>
                                <button onClick={SayGoodMorning} className="btn btn-secondary "> Good Morinig</button>
                                <button onClick={ () => SayGoodAfternoon('Good After Noon')} className="btn btn-warning "> Good Afternoon</button>
                                <button className="btn btn-danger "> Good Evening</button>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </>
    )
};
export default WishMessage
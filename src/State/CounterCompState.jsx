import React, { Component } from "react";

class CounterCompState extends Component{
    state = {
        counter : 0
    }
    handeleIncrement = () =>{
        this.setState({
            counter : this.state.counter + 1
        });
    }
    handeleDecrement = () =>{
        this.setState({
            counter : this.state.counter - 1 > 0 ? this.state.counter - 1 : 0 
        });
    }
    handeleReset = () =>{
        this.setState({
            counter : this.state.counter = 0
        });
    }
    render(){
        return(
            <React.Fragment className="text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-header">
                                        <h1>This is Counter Component by using State in Class</h1>
                                    </div>
                                    <div className="card-body">
                                        <h3>counter : {this.state.counter} </h3>
                                        <button onClick={this.handeleIncrement} className="button btn btn-success"> Increment</button>
                                        <button onClick={this.handeleDecrement} className="button btn btn-success"> Decrement</button>
                                        <button onClick={this.handeleReset} className="button btn btn-success"> Reset</button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}

export default CounterCompState
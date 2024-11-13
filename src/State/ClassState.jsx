import React from "react";

class ClassState extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            empolye : 
                {
                   nameIs : "sasi",
                   age : 22
                },
            empolyees : {
                    name : "ragini",
                    age : 23
                }
            


        }
    }
    render(){
        return(
            <>
                {/* <div>
                    <h2> my Name is {this.state.empolye.nameIs}</h2>
                    <h2> my Name is {this.state.empolyees.age}</h2>
                </div>
                <div>
                    <h2> my Name is {this.state.empolyees.name}</h2>
                    <h2> my Name is {this.state.empolye.age}</h2>
                </div> */}
            </>
        )
    }
}

export default ClassState


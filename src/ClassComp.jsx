import { Component } from "react";


class ClassComp extends Component{
    constructor(props){
        super(props)
        console.log('Class compenents', props)
        
    }

    render(){
        return(
            <section>
                {/* <h3>this is Class Compenents</h3>
                <h3>course Namen is react Class Compenents : {this.props.courseName}</h3> */}
            </section>
        )
    }
}
export default ClassComp
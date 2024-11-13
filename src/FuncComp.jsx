import FuncCompTwo from "./FuncCompTwo"



const FuncComp = (props) => {

    
    const {courseName} = props
    console.log(props);
    
    
    return(
        <div>
           
            {/* <h2>This is Function Compents</h2> */}
            {/* <h2>CourseName: {courseName} </h2> */}
            {/* <h2>CourseName: {arrData} </h2> */}
            < FuncCompTwo />
        </div>
    )
}
export default FuncComp 

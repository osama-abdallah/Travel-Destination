import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../Navbar/Navbar";

function TourDetails(props) {

    const {id} =useParams();

    const [view,setview] =useState(true);

    function handleview(){
        setview(!view);
    }

    let arrTourDetails = props.cityData.filter(tour => {
        return id === tour.id;
    });

    console.log(props);
    return (
        <>
        <Header/>
        <div style={{color: "blue",border: "1px solid #000", textDecoration:"none", margin: "25px"}}>
         <h1>Name: {arrTourDetails[0].name}</h1>
         <img src={arrTourDetails[0].image} alt={arrTourDetails[0].name}/>
         <p> Tour Description : {arrTourDetails[0].info} </p>
         <p>
        {!view ?arrTourDetails[0].info : arrTourDetails[0].info.substring(0 ,0)}
        {!view?<button onClick={handleview}>less</button> : <button onClick={handleview}>read more</button>}
      </p>
      </div>
        </>
    )
}

export default TourDetails;
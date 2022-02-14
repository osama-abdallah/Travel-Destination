import { Link } from "react-router-dom";

export default function Tour(props) {
    return (
      <>
       <div style={{color: "blue",border: "1px solid #000", textDecoration:"none", marginLeft: "250px", marginRight:"269px", margin:"250px"}}>
      <Link to={`city/${props.tourObject.id}`}>
          <p  style={{textDecoration:"none"}}>{props.tourObject.name}</p>
          
          <img src={props.tourObject.image} alt={props.tourObject.name} />
      </Link>
      </div>
  </>
  )
  }
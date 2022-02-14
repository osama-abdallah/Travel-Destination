import { Link } from "react-router-dom";

export default function Header() {
    return (
      <>
      <nav>
      <Link style={{ color:"blue", textAlign: "center", textTransform: "uppercase",border: "1px solid #000", textDecoration:"none", marginLeft: "45%", marginTop:"50px"}}to="/">Home</Link> 
    </nav>      
      </>
    );
  }
export default function Tours(props) {
  return (
    <>
    <div style={{color: "blue", marginLeft: "50px"}}>
        <p>{props.tourObject.name}</p>
        
        <img src={props.tourObject.image} alt={props.tourObject.name} />
    </div>
</>
)
}
import Tour from "./tour/Tour";


export default function Tours(props) {
  return (
    <>
     {
      props.data.map(object=>{
                return (
                    <Tour key={object.id} tourObject={object}/>      
                    )
                })
            }
</>
)
}
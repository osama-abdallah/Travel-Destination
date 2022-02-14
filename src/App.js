import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
// import Tour from "./components/tours/tour/Tour";
import TourDetails from "./components/TourDetails/TourDetails";
const tourData = require("./data/db.json");

function App() {
  return (
    <>
 <Routes>
        <Route path="/" element={<Home data={tourData} />} />
        <Route path="/city/:id" element={<TourDetails cityData = {tourData} />} />     
</Routes>
    </>
  );
}

export default App;

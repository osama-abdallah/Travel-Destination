import Home from "./components/home/Home";

const tourData = require("./data/db.json");

function App() {
  return (
    <>
      <Home data={tourData} />
    </>
  )
}

export default App;

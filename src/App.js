import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/search";
import DisplayCurrent from "./components/displayCurrent";
import Description from "./components/Description";
import Forecast from "./components/Forecast";
import { setContainerBackground } from "./utils/functions/functions";

function App() {
  const [inputLocation, setInputLocation] = useState("");
  const [address, setAddress] = useState("");
  const [search, setSearch] = useState(false);
  const [currentConditions, setCurrentConditions] = useState({});
  const [description, setDescription] = useState("");
  const [daysForecast, setDaysForecast] = useState([]);

  async function fetchapi(inputLocation) {
    const options = {
      method: "POST",
      body: JSON.stringify({
        location: inputLocation,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    let data = await fetch(
      "https://proactive-w-backend.onrender.com/search",
      options
    ); //https://proactive-w-backend.onrender.com/search //"http://localhost:8000/search"
    let jsonData = await data.json();

    setCurrentConditions(jsonData && jsonData.currentConditions);

    setDescription(jsonData && jsonData.description);
    setDaysForecast(jsonData.days);
    setAddress(jsonData && jsonData.resolvedAddress);

    console.log(jsonData);
  }

  useEffect(() => {
    if (search) {
      fetchapi(inputLocation);
      setSearch(false);
    }
  }, [inputLocation, search]);

  function searchHandle() {
    setSearch(true);
    setTimeout(() => {
      setInputLocation("");
    }, 0);
  }

  function inputLocationHandle(value) {
    setInputLocation(value);
  }

  let sectionStyle = {
    backgroundImage: `url(${setContainerBackground(currentConditions)})`,
  };

  return (
    <div className="App" style={sectionStyle}>
      <Search
        searchHandle={searchHandle}
        inputLocationHandle={inputLocationHandle}
        inputLocation={inputLocation}
      />
      {address && (
        <div>
          <DisplayCurrent
            currentConditions={currentConditions}
            address={address}
            daysForecast={daysForecast}
          />
          <Description
            description={description}
            currentConditions={currentConditions}
          ></Description>
          <Forecast daysForecast={daysForecast}></Forecast>
        </div>
      )}
    </div>
  );
}

export default App;

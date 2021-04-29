import React , { useState }from 'react'

function Weathersearch() {
    const [loc, setLoc] = useState({location: ""});
    const [locData, setLocData] = useState([])
    
    //const [weather, setWeather] = useState([]);

    // const API = "https://www.metaweather.com/api/";

    async function locationData(e) {
        e.preventDefault();
        if (loc.location === "") {
          alert("NO LOCATION");
        } else {
          const data = await fetch(
            `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${loc.location}`
          )
            .then((res) => res.json())
            .then((data) => data);
    
          setLocData(...locData, data);
        }
      }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
    
        if (name === "location") {
          setLoc({ ...loc, location: value });
        }
        

    };
    console.log(locData);
    return (
        <div className="weather container">
            <h3 className="text-primary  text-center">Search Here</h3>
            <br/>

                <form className="mb-3" onSubmit={(e) => locationData(e)}>
                    
                    <label for="Location" className="form-label h4 text-muted">Location</label>
                    <div className="d-flex justify-content-center">
                        <input type="text" name="location" className="form-control" placeholder="Location"
                        onChange={(e) => handleChange(e)}/>
                    
                    

                        <button type="submit" className="btn btn-success py-2 mx-2 btn-lg" onClick={(e) => locationData(e)}> Search </button>

                    </div>
                    
                </form>

                <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">Results</h5>
                        <ul className="list-group ">
                          
                            {locData.map((place) => 
                            
                                 
                              <button type="button" className="list-group-item list-group-item-action" key="place.woeid">{place.title}</button>
                                  
                                 

                    ) } 
                        </ul>
                    </div>
                </div> 

                
        </div>
    )
 }

export default Weathersearch;

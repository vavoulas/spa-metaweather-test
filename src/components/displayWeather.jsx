import React , {useState, useEffect} from 'react'

function DisplayWeather(props) {
    const [weatherdata, setWeatherData] = useState([]);

    
        
     useEffect(() => {
        const getweather = async () => {
            const data = await fetch(
                `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${props.id}/`
              )
                .then((res) => res.json())
                .then((data) => data);
        
                setWeatherData(...weatherdata, data)
        }
        getweather();
        
        
         
     }, [])
     
     console.log(weatherdata);
         

      
        
            
            return props.condition ? (
                <div className="jumbotron jumbotron-fluid">
                    <React.Fragment>
                        <div className="card">
                            <h2 className="card-header">{props.city}</h2>
                            <div className="card-body">
                                <span className="card-title">{weatherdata.consolidated_weather[0].weather_state_name} <i></i></span>
                                
                                <button className="btn btn-danger">Close</button>
                            </div>
                        </div>
                        
        
                    </React.Fragment>
                        
                       
        
                              
                </div>
            ) : null
           
         
    
    } 



export default DisplayWeather;


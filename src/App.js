import React from 'react';
import axios from 'axios';


  const value = async () => {
	try {
		const res = await axios.get(
			`https://app-backend-api.azurewebsites.net/WeatherForecast`,
			{
				headers: {},
				params: {}
			}
		return <div><h1>Weather today is {res} </h1></div>;
		);
	} catch (err) {
		console.log(err);
	}
};
  

export default App;

import React from 'react';
import axios from 'axios';

function App() {
  const value = async () => {
	try {
		const res = await axios.get(
			`https://app-backend-api.azurewebsites.net/WeatherForecast`,
			{
				headers: {
				},
				params: {}
			}
		);
	} catch (err) {
		console.log(err);
	}
};
  return <div><h1>Weather today is {value} </h1></div>;
}

export default App;

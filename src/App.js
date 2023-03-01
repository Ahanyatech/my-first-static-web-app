import React from 'react';
import axios from 'axios';

const fetchQuotes = async () => {
	try {
		const res = await axios.get(
			`https://famous-quotes4.p.rapidapi.com/random`,
			{
				headers: {
					'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
					'x-rapidapi-key': API_KEY
				},
				params: {category: 'all', count: '10'}
			}
		);
	} catch (err) {
		console.log(err);
	}
};

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

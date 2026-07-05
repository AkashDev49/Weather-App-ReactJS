import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import "../style/SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
	let [city, setCity] = useState("");

	const Api_Url = `http://api.openweathermap.org/data/2.5/weather`;
	const Api_key = "e3f9650cbe06d6ba2d5b2bb11967fd98";

	let getWeatherInfo = async () => {
		let respo = await fetch(
			`${Api_Url}?q=${city}&appid=${Api_key}&units=metric`,
		);

		let jsonRes = await respo.json();
		console.log(jsonRes);

		let data = {
			city: city,
			temp: jsonRes.main.temp,
			Max: jsonRes.main.temp_max,
			Min: jsonRes.main.temp_min,
			humidity: jsonRes.main.humidity,
			feelsLikes: jsonRes.main.feels_like,
			weather: jsonRes.weather[0].description,
		};

		console.log(data);
		return data;
	};

	let handleCityChange = (evt) => {
		setCity(evt.target.value);
	};

	let handleSubmit = async (event) => {
		event.preventDefault();
		console.log(city);
		setCity("");
		let info = await getWeatherInfo();
		updateInfo(info);
	};

	return (
		<div className="Contain">
			<form onSubmit={handleSubmit}>
				<TextField
					id="outlined-basic"
					label="City Name"
					variant="outlined"
					required
					value={city}
					onChange={handleCityChange}
				/>

				<br />
				<br />

				<Button variant="contained" endIcon={<SendIcon />} type="submit">
					Search
				</Button>
			</form>
		</div>
	);
}

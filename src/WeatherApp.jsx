import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
	const [weather, setWeather] = useState({
		city: "Mumbai",
		Max: 11.05,
		Min: 11.05,
		feelsLikes: 10.48,
		humidity: 87,
		temp: 11.05,
		weather: "mist",
	});

	let updateInfo = (data) => {
		setWeather(data);
	};

	return (
		<div style={{ textAlign: "center" }}>
			<h1>Weather App</h1>
			<SearchBox updateInfo={updateInfo} />
			<InfoBox info={weather} />
		</div>
	);
}

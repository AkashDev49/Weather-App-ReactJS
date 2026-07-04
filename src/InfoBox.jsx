import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox({ info }) {
	return (
		<div className="info_box">
			<div className="info-cont">
				<Card sx={{ maxWidth: 345 }}>
					<CardMedia
						sx={{ height: 140 }}
						image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYf7BMsL1MP6wXRzYXDlIw4uvIH4EOPR3Qjg&s"
						title="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{info.city}
						</Typography>
						<Typography
							variant="body2"
							sx={{ color: "text.secondary" }}
							component={"span"}
						>
							<p>Tempature : {info.temp}</p>
							<p>Humidity : {info.humidity}</p>
							<p>Max Temp : {info.Max}</p>
							<p>Min Temp : {info.Min}</p>
							<p>Weather Feels Like {info.feelsLikes}</p>
						</Typography>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

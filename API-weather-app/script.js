const searchBar = document.getElementById("searchBar");

const url = "https://api.openweathermap.org/data/2.5/";
const key = "1ca20ba143ce016f12cb40a702ec4336";

const setQuery = (e) => {
	if (e.keyCode == "13") {
		getResult(searchBar.value);
	}
};

const getResult = (cityName) => {
	let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
	fetch(query)
		.then((weather) => {
			return weather.json();
		})
		.then(displayResult);
};

const displayResult = (result) => {
  console.log(result)
	let city = document.querySelector(".city");
	city.innerText = `${result.name}, ${result.sys.country}`;

  let temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(result.main.temp)}°C`;

  let desc = document.querySelector(".desc");
  desc.innerText = result.weather[0].description;

  let minmax = document.querySelector(".minmax")
  minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(
		result.main.temp_max
	)}°C`;
};

searchBar.addEventListener("keypress", setQuery);
function displayTemperature (response){
 console.log(response.data);
 let temperatureElement = document.querySelector("#temperature");
 let cityElement = document.querySelector("#city");
 let descriptionElement = document.querySelector("#description");
 let humidityElement = document.querySelector("#humidity");
 let windElement = document.querySelector("#wind");
 let iconElement = document.querySelector("#icon");

 temperatureElement.innerHTML = Math.round(response.data.main.temp);
 cityElement.innerHTML=response.data.name;
 descriptionElement.innerHTML = response.data.weather[0].description;
 humidityElement.innerHTML = response.data.main.humidity;
 windElement.innerHTML = Math.round(response.data.wind.speed);
 iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
 iconElement.setAttribute("alt", response.data.weather[0].description);

}
       let now = new Date();
       let h6 = document.querySelector("h6");
       let date = now.getDate();
       let hours = now.getHours();
       let minutes = now.getMinutes();
       let year = now.getFullYear();

       let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
       let day = days[now.getDay()];
       let months = [
         "Jan",
         "Feb",
         "Mar",
         "Apr",
         "May",
         "Jun",
         "Jul",
         "Aug",
         "Sep",
         "Oct",
         "Nov",
         "Dec",
       ];
       let month = months[now.getMonth()];

       h6.innerHTML = `${day} ${month} ${date}; ${hours}:${minutes}, ${year}`; 
       
       
function search(city) {

let apiKey = "1e79b31769bb7a7029157c18e1a2cb3a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
}       

function handleSubmit (event) {
  event.preventDefault ();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);

}
search ("Kyiv");
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let fahrenheitTemperature = (14*9)/5+32;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);

}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);
















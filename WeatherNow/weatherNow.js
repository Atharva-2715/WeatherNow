const apiKey = 'f71909fb53c739f299816362dd6c882c';
const searchButton = document.querySelector(".search-btn");
const cityInput = document.querySelector(".search");
const weatherBox = document.querySelector(".weather-box");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temp");
const cityName = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

searchButton.addEventListener("click",async function(){
    const city = cityInput.value;
    if(city){
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
        const data = await fetchWeatherData(apiUrl);
        
        if(data){
            displayWeatherData(data);
        }
    }
});

async function fetchWeatherData(url){
    try{
        const response = await fetch(url);
        const data = await response.json();
        if(response.ok){
            return data;
        }
        else{
            alert("City not found.");
        }
    }catch(error){
        console.error("Error fetching data :", error)
        alert("Error fetching data");
    }
}

function displayWeatherData(data){
    const {name , main, weather ,wind: windData} = data;
    const weatherDescription = weather[0].description;
    const iconCode = weather[0].icon;


    cityName.textContent = name;
    temperature.textContent = `${main.temp}°C`;
    humidity.textContent = `Humidity: ${main.humidity}%`;
    wind.textContent = `Wind speed: ${windData.speed} km/h`;   
    
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}.png`; // Set weather icon



} 



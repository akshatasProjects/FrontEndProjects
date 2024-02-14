const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const apiKey ="05874aa79df4a6782309e31a0318bdc4";
// apiKey2 = '0dc7999814d786c929fff80d7a566ff3';

weatherForm.addEventListener('submit',async(event)=>{
    // to avoid the default submission behaviour of form on refresh
    event.preventDefault();

    const city = cityInput.value;
    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    } else {
        displayError("Please Enter a city");
    }
});

async function getWeatherData(city){
    // https://openweathermap.org/current
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiURL);
    if(!response.ok){
        throw new Error("Error: Couldn't fetch Weather Data");
    }

    return await response.json();
}

function displayWeatherInfo(data){
    const {name:city, main:{temp, humidity}, weather:[{description, id}]} = data;

    card.textContent ="";
    card.style.display ='flex';

    const cityDisplay = document.createElement('h1');
    const tempDisplay = document.createElement('p');
    const humidityDisplay = document.createElement('p');
    const descDisplay = document.createElement('p');
    const weatherEmoji = document.createElement('p');

    cityDisplay.textContent = city;
    cityDisplay.classList.add('cityDisplay');
    card.appendChild(cityDisplay);

    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)} C `; 
    tempDisplay.classList.add('tempDisplay');
    card.appendChild(tempDisplay);

    humidityDisplay.textContent = `Humidiy : ${humidity}%`;
    humidityDisplay.classList.add('humidityDisplay');
    card.appendChild(humidityDisplay);

    descDisplay.textContent = description;
    descDisplay.classList.add('descDisplay');
    card.appendChild(descDisplay);

    weatherEmoji.textContent = getWeatherEmoji(id);
    weatherEmoji.classList.add('weatherEmoji');
    card.appendChild(weatherEmoji);
}   

function getWeatherEmoji(weatherId){
    // check for the weather code : https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⚡ ";
        case (weatherId >= 300 && weatherId < 400):
            return "🌦⛈";
        case (weatherId >= 400 && weatherId < 500):
            return "☔";
        case (weatherId >= 500 && weatherId < 600):
            return "❄";
        case (weatherId >= 600 && weatherId < 700):
            return "🌪";
        case (weatherId >= 700 && weatherId < 800):
            return "🌃";
        case (weatherId >= 800 && weatherId < 900):
            return "☁";
     
    }
}

function displayError(message){

    const errMsg = document.createElement('p');
    errMsg.textContent = message;
    errMsg.classList.add("errorDisplay");

    card.textContent ="";
    card.style.display = "flex";
    card.appendChild(errMsg) 
}
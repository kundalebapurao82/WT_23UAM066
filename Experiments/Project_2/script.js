const API_KEY = "68bef57cb765a7ab1784588b62ceb4dd";

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === pass && user !== "") {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("mainPage").style.display = "block";

    } else {

        document.getElementById("loginError").innerText = "Invalid Username or Password";
    }
}

function logout() {

    document.getElementById("mainPage").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
}

async function getWeather() {

    const city = document.getElementById("city").value;

    if (city.trim() === "") {

        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (response.status !== 200) {
            document.getElementById("weatherResult").innerText =
                "Error: " + data.message;
            return;
        }

        // weather report
        const report = `

            <h3>Weather in ${data.name}</h3>

            <p>Temperature: ${data.main.temp} °C</p>
            <p>Humidity: ${data.main.humidity}%</p>

            <p>Pressure: ${data.main.pressure} hPa</p>

            <p>Condition: ${data.weather[0].main} (${data.weather[0].description})</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>

            <hr>
            <p><strong>Summary:</strong> It is currently ${data.weather[0].description} with a temperature of ${data.main.temp}°C in ${data.name}.</p>
        `;

        document.getElementById("weatherResult").innerHTML = report;

    } catch (error) {

        document.getElementById("weatherResult").innerText =
            "Something went wrong.";
    }
}
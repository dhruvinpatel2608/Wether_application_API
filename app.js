async function wether() {
    const city = document.getElementById("city").value;
    const country = document.getElementById('country').value;
    const apikey = '312dcdcb36d4b1afb6135c4b57f4d3f1';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apikey}&units=metric`;
    const res = await fetch(url);

    if (res.status == 200) {
        // success → show data
        let data = await res.json();

        document.querySelector(".weather-result").innerHTML = `
                <div class="weather-icon">🌡️</div>
                <div class="temp">${data.main.temp}°C</div>
                <div class="desc">${data.weather[0].description}</div>
                <div class="location">🌍 ${data.name}, ${data.sys.country}</div>
            `;
    } else {
        // city not found → show error
        document.querySelector(".weather-result").innerHTML = `
                <p style="color:red;">${error.message}</p>
            `;
    }
}

let btn = document.getElementById("convertBtn");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    wether();
});

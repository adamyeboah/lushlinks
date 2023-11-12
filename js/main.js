// Location Functionality
const fetchLocation = async () => {
    const res = await fetch(
        "https://api.ipdata.co?api-key=a1ef42ed02be7e5fdcbdbfabe48aa5147a0bcf08e8531d9de9c786f6"
    );
    const data = await res.json();

    document.querySelector(
        ".location #text"
    ).innerText = `${data.city}, ${data.country_name}`;
    document.querySelector("#city").innerText = data.city;
};

if (document.querySelector(".location #text")) fetchLocation();

// Timer
let endDate = localStorage.getItem("end-date");

if (!endDate || new Date(endDate) - new Date() < 0) {
    endDate = new Date();

    const randomHours = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    const randomMins = Math.floor(Math.random() * (59 - 2 + 1) + 2);
    const randomSecs = Math.floor(Math.random() * (58 - 3 + 1) + 3);

    endDate.setHours(endDate.getHours() + randomHours);
    endDate.setMinutes(endDate.getMinutes() + randomMins);
    endDate.setSeconds(endDate.getSeconds() + randomSecs);

    localStorage.setItem("end-date", endDate);
}

function updateTimer() {
    now = new Date();

    future = new Date(endDate);

    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);
    d = days >= 0 ? days : 0;
    _hours = hours - days * 24;
    h = _hours >= 0 ? _hours : 0;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.querySelector("#countdown").innerText = `${h < 10 ? "0" + h : h}:${
        m < 10 ? "0" + m : m
    }:${s < 10 ? "0" + s : s}`;
}
if (document.querySelector("#countdown")) setInterval(updateTimer, 1000);

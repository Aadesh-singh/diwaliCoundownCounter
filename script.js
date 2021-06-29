const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secEl = document.getElementById('sec');

const diwali = "4 Nov 2021";
const curDate = "24 Oct 2022"

function countdown() {
    const diwaliDate = new Date(diwali);
    const currentDate = new Date();

    const totalSeconds = (diwaliDate - currentDate)/ 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds/ 3600) %24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const sec = Math.floor(totalSeconds) % 60;

    console.log(days,hours,mins,sec);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secEl.innerHTML = sec;
}

countdown();

setInterval(countdown, 1000);
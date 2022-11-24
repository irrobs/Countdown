const countdown = () => {
    // find the time in miliseconds
    const targetDate = new Date('jan 01, 2023 00:00:00').getTime();
    const present = new Date();
    const timeGap = targetDate - present;
    console.log(timeGap)

    // find the time in days, hours, minutes and seconds

    const second = 1000;
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    // calculate each time that will be used
    const totalDays = Math.floor(timeGap/day) // .floor returns you the integer number without the decimals
    const totalHours = Math.floor((timeGap % day) / hour)
    const totalMinutes = Math.floor((timeGap % hour) / minute)
    const totalSeconds = Math.floor((timeGap % minute) / second)

    // show the countdown in the page
    document.querySelector(".days").innerHTML = totalDays
    document.querySelector(".hours").innerHTML = totalHours
    document.querySelector(".minutes").innerHTML = totalMinutes
    document.querySelector(".seconds").innerHTML = totalSeconds
};

setInterval(countdown, 1000)
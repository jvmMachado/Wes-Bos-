const secondsHand = document.querySelector('.second-hand');
const hoursHand = document.querySelector('.hours-hand');
const minutesHand = document.querySelector('.minutes-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secDegrees = ((360/60) * seconds) + 90;
    if (seconds == 0) {
        secondsHand.style.transition = 'none';
    }
    const hours = now.getHours();
    const hoursDegrees = ((360/12) * hours) + 90;
    if (hours == 0) {
        hoursHand.style.transition = 'none';
    }
    const minutes = now.getMinutes();
    const minutesDegrees = ((360/60) * minutes) + 90;
    if (minutes == 0) {
        minutesHand.style.transition = 'none';
    }
    secondsHand.style.transform = `rotate(${secDegrees}deg)`;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    console.log(seconds);
}

setInterval(setDate, 1000);

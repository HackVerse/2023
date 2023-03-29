const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown_end = new Date('Jan 26, 2020 17:00:00').getTime()
let countDown_start = new Date('Jan 25, 2020 17:00:00').getTime()
let input_flag = false
let input = ""

const dinner_div = document.getElementById("dinner")
const lunch_div = document.getElementById("lunch")
const tea_div = document.getElementById("tea")
const breakfast_div = document.getElementById("breakfast")
const video_1_div = document.getElementById("video1")
const container_div = document.getElementById("container")

const marquee_div = document.getElementById("announcement")
const type_flag = document.getElementById("flag_img")

const timer_end_div = document.getElementById("timer_end")
const timer_start_div = document.getElementById("timer_start")

x = setInterval(function() {
    let now_end = new Date().getTime(),
        distance_end = countDown_end - now_end;
    document.getElementById('hours_end').innerText = ('0' + Math.floor((distance_end) / (hour))).slice(-2);
    document.getElementById('minutes_end').innerText = ('0' + Math.floor((distance_end % (hour)) / (minute))).slice(-2);
    document.getElementById('seconds_end').innerText = ('0' + Math.floor((distance_end % (minute)) / second)).slice(-2);
}, second)

y = setInterval(function() {
    let now_start = new Date().getTime();
    distance_start = countDown_start - now_start;
    document.getElementById('hours_start').innerText = ('0' + Math.floor((distance_start % (day)) / (hour))).slice(-2);
    document.getElementById('minutes_start').innerText = ('0' + Math.floor((distance_start % (hour)) / (minute))).slice(-2);
    document.getElementById('seconds_start').innerText = ('0' + Math.floor((distance_start % (minute)) / second)).slice(-2);
}, second)

function toggle_div(div_element) {
    div_element.style.display = (div_element.style.display == "none") ? "block" : "none"
}

document.addEventListener("keydown", function onEvent(event) {
    if (event.key === '`') {
        if (input_flag == true) {
            marquee_div.innerHTML = input;
        } else {
            marquee_div.innerHTML = "  ";
        }
        input_flag = !input_flag;
        input = "";
    }
    if (input_flag && event.key != '`') {

        if (event.key.length === 1)
            input += event.key;
        else if (event.key === "Backspace")
            input = input.slice(0, -1);
        console.log(input);
    } else {
        if (event.key === "d") {
            toggle_div(dinner_div)
        } else if (event.key === "e") {
            toggle_div(timer_end_div)
        } else if (event.key === "s") {
            toggle_div(timer_start_div)
        } else if (event.key === "l") {
            toggle_div(lunch_div)
        } else if (event.key === "b") {
            toggle_div(breakfast_div)
        } else if (event.key === "t") {
            toggle_div(tea_div)
        } else if (event.key === "1") {
            toggle_div(container_div)

            const video = document.getElementById('video')

            var playPromise = video.play();

            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
            toggle_div(video_1_div)
        }
    }
});

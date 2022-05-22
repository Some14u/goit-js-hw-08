import throttle from "lodash.throttle";

const iframe = document.getElementById("vimeo-player");

const CURRENT_TIME_KEY = "videoplayer-current-time";
const UPDATE_COOLDOWN = 1000; // milliseconds

/**
 * @type {import("@vimeo/player").Player}
 */
const player = new Vimeo.Player(iframe);

var currentTime = localStorage.getItem(CURRENT_TIME_KEY);

if (currentTime) {
  player.setCurrentTime(currentTime);
}

player.on("timeupdate", throttle(onTimerUpdate, UPDATE_COOLDOWN));

function onTimerUpdate({seconds}) {
  localStorage.setItem(CURRENT_TIME_KEY, seconds);
}





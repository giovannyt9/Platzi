console.log("index.js module Open")
import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js"
import AutoPause from "./plugins/AutoPause.js"

// //mdn htmlmediaelement https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
const video = document.querySelector("video");
const btnPlay = document.getElementById("btnPlay");
const btnUnmute = document.getElementById("btnUnmute");
const player = new MediaPlayer({
    el: video,
    plugins: [new AutoPlay(), new AutoPause()]
});

btnPlay.onclick = () => player.togglePlay();
btnUnmute.onclick = () => player.toggleMute();
//btnUnmute.onclick = () => player.unmute();


if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(error => {
        console.log("Hello Gio SW")
        console.log(error.message)
    })
}
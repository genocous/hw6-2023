var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });


// Page Load - initialize the video element and turn off autoplay and turn off looping
function initialize() {
    video = document.querySelector("#player1");
    video.load();
    console.log("Video is ready");
}

// Play Button - play the video and update the volume information
function playVideo() {
	video.play();
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
}

// Pause Button - pause the video
function pauseVideo() {
	video.pause();
	console.log("Pause Video");
}

// Slow Down Button	- slow down the current video speed each time the button is clicked and log the new speed to the console. Change it by an amount proportional to the slow down. If you slow down three times and then speed up three times, you should be within 5 digits of 100% again.
function slowDown() {
	video.playbackRate *= 0.95;
	console.log("New speed is " + video.playbackRate);
}

// Speed Up Button - increase the current video speed each time the button is clicked and log the new speed to the console. Change it by an amount proportional to the slow down. If you slow down three times and then speed up three times, you should be within 5 digits of 100% again. 
function speedUp() {
	video.playbackRate /= 0.95;
	console.log("New speed is " + video.playbackRate);
}

// Skip Ahead Button - skip ahead 10 seconds. If the video length has been exceeded, go back to the start of the video, no farther. Log the current location of the video. 
function skipAhead() {
	if (video.currentTime + 15 < video.duration) {
		video.currentTime += 15;
	} else {
		video.currentTime = 0;
		video.play();
	}
	console.log("Current location " + video.currentTime);
}

// Mute Button - mute/unmute video and update button text
function mute() {
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
}

// Volume Slider - change volume based on the slider and update volume information
function volumeChange() {
    var volume = document.querySelector("#slider").value;
    video.volume = volume / 100;
    document.querySelector("#volume").textContent = volume + "%";
}

// Styled - utilize existing oldSchool class on the video element
function oldSchool() {
	video.classList.add("oldSchool");
}
// Original - remove oldSchool class from the video
function original() {
	video.classList.remove("oldSchool");
}


// Add event listeners
window.addEventListener("load", initialize);
document.querySelector("#play").addEventListener("click", playVideo);
document.querySelector("#pause").addEventListener("click", pauseVideo);
document.querySelector("#slower").addEventListener("click", slowDown);
document.querySelector("#faster").addEventListener("click", speedUp);
document.querySelector("#skip").addEventListener("click", skipAhead);
document.querySelector("#mute").addEventListener("click", mute);
document.querySelector("#slider").addEventListener("change", volumeChange);
document.querySelector("#vintage").addEventListener("click", oldSchool);
document.querySelector("#orig").addEventListener("click", original);


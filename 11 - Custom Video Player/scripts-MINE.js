const video = document.querySelector('video');
const playButton = document.querySelector('.toggle');
const skipForward25 = document.querySelector("[data-skip='25']");
const skipBackward10 = document.querySelector("[data-skip='-10']");
const volumeRange = document.querySelector("[name=volume]");
const playbackRate = document.querySelector("[name=playbackRate]");
playButton.addEventListener('click', function(){
    video.paused ? video.play() : video.pause();
});
skipForward25.addEventListener('click', function(){
    video.currentTime += 25;
});
skipBackward10.addEventListener('click', function(){
    video.currentTime -= 10;
});

volumeRange.addEventListener('mousemove', function(e){
    video.volume = e.target.value
})
volumeRange.addEventListener('change', function(e){
    video.volume = e.target.value
})
playbackRate.addEventListener('mousemove', function(e){
    video.playbackRate = e.target.value
})
playbackRate.addEventListener('change', function(e){
    video.playbackRate = e.target.value
})
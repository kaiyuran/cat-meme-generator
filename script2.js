function playVideo() {
    const video = document.getElementById("myVideo"); // Select the video element
    const source = document.getElementById("videoSource"); // Select the source element
    // source.src = "resources\\catVids\\cat0.mp4";
    var randomNumber = Math.floor(Math.random() * 5);
    source.src = `resources\\catVids\\cat${randomNumber}.mp4`;



    const aspectRatio = video.videoWidth / video.videoHeight;
    video.width = video.height * aspectRatio;



    // if (!video.readyState) {
    video.load();
    video.play();
    // };
}
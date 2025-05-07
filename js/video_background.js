// JavaScript Document to conditionally load the video background for screens with dimensions of 800px amd above.

if(window.innerWidth >= 800)
{
    const video = document.getElementById('video_bkgd');
    const source = document.createElement('source');
    source.src = '../assets/video_bkgd.mp4';
    source.type = "video/mp4";

    // Specify the video attributes.
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    // Append the source to the video.
    video.appendChild(source);
}
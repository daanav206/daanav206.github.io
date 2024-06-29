// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoList = document.getElementById('videoList');

    // List of videos
    const videos = [
        {
            title: 'What Car Can You Get For A Grand?',
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4'
        },
        {
            title: 'Big Buck Bunny',
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        },
        {
            title: 'Sintel',
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
        },
        {
            title: 'Elephant Dream',
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
        }
    ];

    // Function to load video list
    function loadVideoList() {
        videos.forEach((video, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = video.title;
            listItem.addEventListener('click', () => playVideo(index));
            videoList.appendChild(listItem);
        });
    }

    // Function to play video
    function playVideo(index) {
        const selectedVideo = videos[index];
        videoPlayer.src = selectedVideo.url;
        videoPlayer.play();
    }

    // Load the video list on page load
    loadVideoList();
});


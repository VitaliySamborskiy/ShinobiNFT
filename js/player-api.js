
  // 2. This code loads the IFrame Player API code asynchronously.
  const tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      videoId: '4xDzrJKXOOY?si=ktRGhKRiDDcJnaLI',
      events: {
        'playVideo': playVideo,
        'pauseVideo': pauseVideo,
      }
  });
}

function pauseVideo() {
  player.playVideo();
}

function playVideo() {
  player.pauseVideo();
}

const optionsActive = {
  rootMargin: '-140px',
  threshold: 0.1,
}

const autoPlayVideo = new IntersectionObserver ((entries) => {
  console.log(entries);
  entries.forEach((play) => {
    if(play.isIntersecting) {
      player.playVideo();      
    } else {
      player.pauseVideo();
    }
  })

}, optionsActive);

const autoPlayTarget = document.querySelector('.broadcast_autoplay');
autoPlayTarget.forEach((element) => autoPlayVideo.observe(element));
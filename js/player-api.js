
  // 2. This code loads the IFrame Player API code asynchronously.
  let player;
  const tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      videoId: '4xDzrJKXOOY',
      events: {
        'onStateChange': function onPlayerStateChange(event) {
          const autoPlayVideo = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if(!entry.isIntersecting) {
                player.pauseVideo(); 
              } 
            })
          });
          
          let target = document.querySelector('.broadcast_autoplay');
          autoPlayVideo.observe(target);
        }
      }
  });
}

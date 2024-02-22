window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the down button to slide down the playlist.
*/
document.getElementsByClassName('down-header')[0].addEventListener('click', function(){
  var list = document.getElementById('list');

  list.style.height = ( parseInt( document.getElementById('flat-black-player-container').offsetHeight ) - 135 ) + 'px';

  document.getElementById('list-screen').classList.remove('slide-out-top');
  document.getElementById('list-screen').classList.add('slide-in-top');
  document.getElementById('list-screen').style.display = "block";
});

/*
  Handles a click on the up arrow to hide the list screen.
*/
document.getElementsByClassName('hide-playlist')[0].addEventListener('click', function(){
  document.getElementById('list-screen').classList.remove('slide-in-top');
  document.getElementById('list-screen').classList.add('slide-out-top');
  document.getElementById('list-screen').style.display = "none";
});

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function( e ){
  var offset = this.getBoundingClientRect();
  var x = e.pageX - offset.left;

  Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

Amplitude.init({
  "bindings": {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },
  "songs": [
    {
"name": "01",
      "artist": "Atom Loves You",
      "album": "Album: 2025",
      "url": "https://assets.codepen.io/6566924/Ad+Astra+1.mp",
      "cover_art_url": "https://assets.codepen.io/6566924/bright-colors-grid-square.png",
    },
    {
      "name": "02",
      "artist": "Atom Loves You",
      "album": "Album: 2025",
      "url": "https://assets.codepen.io/6566924/Ad+Astra+1.mp",
      "cover_art_url": "https://assets.codepen.io/6566924/round-spring-logo.png",
    },
    {
"name": "03",
      "artist": "Atom Loves You",
      "album": "Album: 2025",
      "url": "https://assets.codepen.io/6566924/Ad+Astra+1.mp",
      "cover_art_url": "https://assets.codepen.io/6566924/round-spring-logo.png",
    },
    {
"name": "04",
      "artist": "Atom Loves You",
      "album": "Album: 2025",
      "url": "https://assets.codepen.io/6566924/Ad+Astra+1.mp",
      "cover_art_url": "https://assets.codepen.io/6566924/round-spring-logo.png"
    },
    {
"name": "05",
      "artist": "Atom Loves You",
      "album": "Album: 2025",
      "url": "https://assets.codepen.io/6566924/Ad+Astra+1.mp",
      "cover_art_url": "https://assets.codepen.io/6566924/round-spring-logo.png"
    },
    {
    "name": "06",
      "artist": "Atom Loves You",
      "album": "Album: 2025",
      "url": "https://assets.codepen.io/6566924/Ad+Astra+1.mp",
      "cover_art_url": "https://assets.codepen.io/6566924/round-spring-logo.png"
    },
    {
"name": "07",
      "artist": "Atom Loves You",
      "album": "Album: 2025",
      "url": "https://assets.codepen.io/6566924/Ad+Astra+1.mp",
      "cover_art_url": "https://assets.codepen.io/6566924/round-spring-logo.png",
    },
    {
"name": "08",
      "artist": "Atom Loves You",
      "album": "Album: 2025",
      "url": "https://assets.codepen.io/6566924/Ad+Astra+1.mp",
      "cover_art_url": "https://assets.codepen.io/6566924/round-spring-logo.png",
    },
    {
 "name": "09",
      "artist": "Atom Loves You",
      "album": "Album: 2025",
      "url": "https://assets.codepen.io/6566924/Ad+Astra+1.mp",
      "cover_art_url": "https://assets.codepen.io/6566924/round-spring-logo.png",
    },
    {
   "name": "10",
      "artist": "Atom Loves You",
      "album": "Album: 2025",
      "url": "https://assets.codepen.io/6566924/Ad+Astra+1.mp",
      "cover_art_url": "https://assets.codepen.io/6566924/round-spring-logo.png"
    }
  ]
});
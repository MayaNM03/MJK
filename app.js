// Show player page when play button is clicked
document.getElementById('play-btn').onclick = function() {
  document.getElementById('main-page').style.display = 'none';
  document.getElementById('player-page').style.display = 'block';
};

// Go back to main page when back arrow is clicked
document.getElementById('back-btn').onclick = function() {
  document.getElementById('player-page').style.display = 'none';
  document.getElementById('main-page').style.display = 'block';
};

function showPlayer(song) {
  document.getElementById('song-name').textContent = song.name;
  document.getElementById('song-artist').textContent = song.artist;
  document.getElementById('album-name').textContent = song.album;
  document.getElementById('song-length').textContent = song.length;
  document.getElementById('player-cover').src = song.cover;
  document.getElementById('main-page').style.display = 'none';
  document.getElementById('player-page').style.display = 'block';
}

document.getElementById('settings-btn').onclick = function() {
  window.location.href = 'settings.html';
};

document.getElementById('help-btn').onclick = function() {
  window.location.href = 'help.html';
};

document.getElementById('account-btn').onclick = function() {
  window.location.href = 'account.html';
};

document.querySelectorAll('#browse-btn').forEach(function(btn) {
  btn.onclick = function() {
    window.location.href = 'browse.html';
  };
});

document.querySelectorAll('#search-btn').forEach(function(input) {
  input.onclick = function() {
    window.location.href = 'search.html';
  };
});

document.querySelectorAll('#playlist-btn').forEach(function(input) {
  input.onclick = function() {
    window.location.href = 'playlist.html';
  };
});

// Ashlin Songs Web Player - Main Application

const TRACKS = [
  {
    id: 0,
    title: "Bottom Of The Ocean",
    artist: "Ashlin",
    duration: "1:15",
    localUrl: "audio/BottomOfTheOcean.mp3",
    cloudUrl: "https://ashlin-songs-bucket.s3.us-east-2.amazonaws.com/audio/BottomOfTheOcean.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA5VTROI4ZGTB5LML7%2F20261112%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20261112T171630Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIQCXigDry1%2Fd%2B6Ix%2FYQvfqPV3%2Bz9iHRobv%2BLRZjIzkOW8gIgPmIrOKdFibsYUlw7bWTJEtnc7CFI6CcRLLWr4aU59%2BQqqAgIchAAGgw5Mzk3NjIwMDk5MDYiDPFVED%2FRhwlUpA6eMyqFCIMlrZyNzadHt3sr749Jd%2FWnCfUIkCviqm6oXMyyjRXh%2FWoJvDkrcW03rlFcUzBgLY2LLXre4XEOgaiT5AMnmasz0jZLdejaQgi6kmyZbRW65BuNuF%2F7n7yy4C%2BYFedUW8qNHyZGXQUlPPM9evL%2BI3Cn3skAhaZaIDwqC4%2Fk0uuIxV69fnlosZpwYH1TmC%2BGcztG7pECkRPfkgM8BCATSpxszERr9CiUq54eeLNP4S%2F%2FyBKrLNrVuc5Ry7nwSIMn8YRanNH42CU%2FokAd0GhQ5EhuYZIC1JRDYiHDV1XtUshcLnsoxK7LBugaA3i9dwtA%2F4hHphnQxYcow4x9nAk5UwSUja56ODs19SX4XUoRWAco%2FZIJNEsgedr3zCRVW1%2Fp4vo%2FEQHhWi75p25WOHKklBfSqdABahkoI%2Bac23NjHuQCpx7sOS2ug4a6YSVLUAcVkbuxuXHN0gTFFcioDMRSASFs8U08RAH9bQeitcDPX2HkMP9nYixP1qn5o99JUUO2yZgTl4T3MfIVpel3OWf8rJ50D84JREdVHDWgdgc783wx5cJcP9naENu4Yx1qL3yprsiDZeE%2FkMx%2BncOo7a3lx5W52gFdhr9Okx39lr7J82f1OreR1Amp9C6UWBhgvWtBaUV7P20voEypGcSavpr7hsS7D3sCmkDi6A6DpGYOqyvPWK8M8WXkDzhFb1o%2Bat%2FU9Kp7GCe%2BY%2FTqpVOINeedjbXiNv5qi0nqaD8F0zpHyms%2B8P0YcfBjxPAAKORblMUgV1sogK3AxLVsU2VWfB1tdZnZtTOm4Us6jTYg3P4dPAstQAvpKIvoXEKCZQdMTOq9fndtXq3N9O6vQSUNW%2FYl%2FUU3Cej8%2FkdR0oOAE%2FV0I6iyylv8PXJUuTpoodhqHUfwYmhQUZpIdECEFUrkiT5oqtgESWG%2Bk0265pvbEgPDEsJGYOFzotqhH6NqQvzy4iy5SFI4IDKXP%2B1Lqs0xksuWYigorm51VrnCmWLUqYKbTQB9mE66Vw8P%2F1JJrSTg%2B%2Fx%2F6qSO7SpUewE1YvbG6vOzPLrPjzGUGs7YysTVuuIF%2BSkc8JF2O2W8cfA2LSjG6dMRLSgf1aZvfY5oXOqUFq1nCPjkX4oAM1ItPylnXSjo7sOYBQM4HMNkRslBzXmHePaXrJebstEJKv1fMpWv6r4QTNJ0iqdmZfw9ZscXx1VEsbXKdXNtZ3QcFgVLWixq%2B9J4Gt4kocBSCPupLDiHwL%2BU%2Buhol4au5yJPKhEIhItNyNjDcaCg6%2FBME8oASlpDV5fD4i8CBfxOm0u3lAT6TMJyYM%2FpxOZ6Z5PNkXUphQYXwwVUL3uwz0%2FfN9ZMCrGuRJV4szvZ4QRV0kCG996k8twYzCnhOMto5zD71dfXBjqdArRwyRnLg2zPqaVbGXBhcUZG4udeqpZdLjDNbmMe6r8QSiXQRkjkJJyzT4DGcnWuMWRiZ%2FEHW2O2Bfcp9IzE4o%2BYZ6jSxgTBId6y66QTIjoft5s7dNfPbF9P%2FMFY0GhmbaNfg%2B%2Fd%2BRIrlnu8YJpZpZ5zpOd8St5IHmywrvCm0jBgglO6WTKT3KeKzEBxyXndYUx5PHIDXlVbvmiiaVUDzg0ZiiBWHRAJQDChNfR4SyqIjc0t3CxRbKp%2B%2F0CRAWe0QaX25Ip1iGmuqM9cHpSb3DpG2c7hOGzCAotCw190UI2dqxu5WMSZR1DVK2UAmi%2BPiHU5TnAVSU2Ahog1dtIq7%2BIHR%2B8sjVoV4vmPOqvSvH2VThSa%2Bt45d5dSax4TNw%3D%3D&X-Amz-Signature=d1bc9c54e5d80b588af6416f269bac737bb7c22588f68727534d4ae1a28bce8b"
  },
  {
    id: 1,
    title: "Dear God",
    artist: "Ashlin",
    duration: "3:01",
    localUrl: "audio/DearGod.mp3",
    cloudUrl: "https://ashlin-songs-bucket.s3.us-east-2.amazonaws.com/audio/DearGod.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA5VTROI4ZGTB5LML7%2F20261112%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20261112T171638Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIQCXigDry1%2Fd%2B6Ix%2FYQvfqPV3%2Bz9iHRobv%2BLRZjIzkOW8gIgPmIrOKdFibsYUlw7bWTJEtnc7CFI6CcRLLWr4aU59%2BQqqAgIchAAGgw5Mzk3NjIwMDk5MDYiDPFVED%2FRhwlUpA6eMyqFCIMlrZyNzadHt3sr749Jd%2FWnCfUIkCviqm6oXMyyjRXh%2FWoJvDkrcW03rlFcUzBgLY2LLXre4XEOgaiT5AMnmasz0jZLdejaQgi6kmyZbRW65BuNuF%2F7n7yy4C%2BYFedUW8qNHyZGXQUlPPM9evL%2BI3Cn3skAhaZaIDwqC4%2Fk0uuIxV69fnlosZpwYH1TmC%2BGcztG7pECkRPfkgM8BCATSpxszERr9CiUq54eeLNP4S%2F%2FyBKrLNrVuc5Ry7nwSIMn8YRanNH42CU%2FokAd0GhQ5EhuYZIC1JRDYiHDV1XtUshcLnsoxK7LBugaA3i9dwtA%2F4hHphnQxYcow4x9nAk5UwSUja56ODs19SX4XUoRWAco%2FZIJNEsgedr3zCRVW1%2Fp4vo%2FEQHhWi75p25WOHKklBfSqdABahkoI%2Bac23NjHuQCpx7sOS2ug4a6YSVLUAcVkbuxuXHN0gTFFcioDMRSASFs8U08RAH9bQeitcDPX2HkMP9nYixP1qn5o99JUUO2yZgTl4T3MfIVpel3OWf8rJ50D84JREdVHDWgdgc783wx5cJcP9naENu4Yx1qL3yprsiDZeE%2FkMx%2BncOo7a3lx5W52gFdhr9Okx39lr7J82f1OreR1Amp9C6UWBhgvWtBaUV7P20voEypGcSavpr7hsS7D3sCmkDi6A6DpGYOqyvPWK8M8WXkDzhFb1o%2Bat%2FU9Kp7GCe%2BY%2FTqpVOINeedjbXiNv5qi0nqaD8F0zpHyms%2B8P0YcfBjxPAAKORblMUgV1sogK3AxLVsU2VWfB1tdZnZtTOm4Us6jTYg3P4dPAstQAvpKIvoXEKCZQdMTOq9fndtXq3N9O6vQSUNW%2FYl%2FUU3Cej8%2FkdR0oOAE%2FV0I6iyylv8PXJUuTpoodhqHUfwYmhQUZpIdECEFUrkiT5oqtgESWG%2Bk0265pvbEgPDEsJGYOFzotqhH6NqQvzy4iy5SFI4IDKXP%2B1Lqs0xksuWYigorm51VrnCmWLUqYKbTQB9mE66Vw8P%2F1JJrSTg%2B%2Fx%2F6qSO7SpUewE1YvbG6vOzPLrPjzGUGs7YysTVuuIF%2BSkc8JF2O2W8cfA2LSjG6dMRLSgf1aZvfY5oXOqUFq1nCPjkX4oAM1ItPylnXSjo7sOYBQM4HMNkRslBzXmHePaXrJebstEJKv1fMpWv6r4QTNJ0iqdmZfw9ZscXx1VEsbXKdXNtZ3QcFgVLWixq%2B9J4Gt4kocBSCPupLDiHwL%2BU%2Buhol4au5yJPKhEIhItNyNjDcaCg6%2FBME8oASlpDV5fD4i8CBfxOm0u3lAT6TMJyYM%2FpxOZ6Z5PNkXUphQYXwwVUL3uwz0%2FfN9ZMCrGuRJV4szvZ4QRV0kCG996k8twYzCnhOMto5zD71dfXBjqdArRwyRnLg2zPqaVbGXBhcUZG4udeqpZdLjDNbmMe6r8QSiXQRkjkJJyzT4DGcnWuMWRiZ%2FEHW2O2Bfcp9IzE4o%2BYZ6jSxgTBId6y66QTIjoft5s7dNfPbF9P%2FMFY0GhmbaNfg%2B%2Fd%2BRIrlnu8YJpZpZ5zpOd8St5IHmywrvCm0jBgglO6WTKT3KeKzEBxyXndYUx5PHIDXlVbvmiiaVUDzg0ZiiBWHRAJQDChNfR4SyqIjc0t3CxRbKp%2B%2F0CRAWe0QaX25Ip1iGmuqM9cHpSb3DpG2c7hOGzCAotCw190UI2dqxu5WMSZR1DVK2UAmi%2BPiHU5TnAVSU2Ahog1dtIq7%2BIHR%2B8sjVoV4vmPOqvSvH2VThSa%2Bt45d5dSax4TNw%3D%3D&X-Amz-Signature=03f80b67c614a7836bed8e9f26e62805440d9b8db4f59296fcc9a793bb1cbe61"
  },
  {
    id: 2,
    title: "Harmonizing",
    artist: "Ashlin",
    duration: "2:19",
    localUrl: "audio/Harmonizing.mp3",
    cloudUrl: "https://ashlin-songs-bucket.s3.us-east-2.amazonaws.com/audio/Harmonizing.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA5VTROI4ZGTB5LML7%2F20261112%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20261112T171647Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIQCXigDry1%2Fd%2B6Ix%2FYQvfqPV3%2Bz9iHRobv%2BLRZjIzkOW8gIgPmIrOKdFibsYUlw7bWTJEtnc7CFI6CcRLLWr4aU59%2BQqqAgIchAAGgw5Mzk3NjIwMDk5MDYiDPFVED%2FRhwlUpA6eMyqFCIMlrZyNzadHt3sr749Jd%2FWnCfUIkCviqm6oXMyyjRXh%2FWoJvDkrcW03rlFcUzBgLY2LLXre4XEOgaiT5AMnmasz0jZLdejaQgi6kmyZbRW65BuNuF%2F7n7yy4C%2BYFedUW8qNHyZGXQUlPPM9evL%2BI3Cn3skAhaZaIDwqC4%2Fk0uuIxV69fnlosZpwYH1TmC%2BGcztG7pECkRPfkgM8BCATSpxszERr9CiUq54eeLNP4S%2F%2FyBKrLNrVuc5Ry7nwSIMn8YRanNH42CU%2FokAd0GhQ5EhuYZIC1JRDYiHDV1XtUshcLnsoxK7LBugaA3i9dwtA%2F4hHphnQxYcow4x9nAk5UwSUja56ODs19SX4XUoRWAco%2FZIJNEsgedr3zCRVW1%2Fp4vo%2FEQHhWi75p25WOHKklBfSqdABahkoI%2Bac23NjHuQCpx7sOS2ug4a6YSVLUAcVkbuxuXHN0gTFFcioDMRSASFs8U08RAH9bQeitcDPX2HkMP9nYixP1qn5o99JUUO2yZgTl4T3MfIVpel3OWf8rJ50D84JREdVHDWgdgc783wx5cJcP9naENu4Yx1qL3yprsiDZeE%2FkMx%2BncOo7a3lx5W52gFdhr9Okx39lr7J82f1OreR1Amp9C6UWBhgvWtBaUV7P20voEypGcSavpr7hsS7D3sCmkDi6A6DpGYOqyvPWK8M8WXkDzhFb1o%2Bat%2FU9Kp7GCe%2BY%2FTqpVOINeedjbXiNv5qi0nqaD8F0zpHyms%2B8P0YcfBjxPAAKORblMUgV1sogK3AxLVsU2VWfB1tdZnZtTOm4Us6jTYg3P4dPAstQAvpKIvoXEKCZQdMTOq9fndtXq3N9O6vQSUNW%2FYl%2FUU3Cej8%2FkdR0oOAE%2FV0I6iyylv8PXJUuTpoodhqHUfwYmhQUZpIdECEFUrkiT5oqtgESWG%2Bk0265pvbEgPDEsJGYOFzotqhH6NqQvzy4iy5SFI4IDKXP%2B1Lqs0xksuWYigorm51VrnCmWLUqYKbTQB9mE66Vw8P%2F1JJrSTg%2B%2Fx%2F6qSO7SpUewE1YvbG6vOzPLrPjzGUGs7YysTVuuIF%2BSkc8JF2O2W8cfA2LSjG6dMRLSgf1aZvfY5oXOqUFq1nCPjkX4oAM1ItPylnXSjo7sOYBQM4HMNkRslBzXmHePaXrJebstEJKv1fMpWv6r4QTNJ0iqdmZfw9ZscXx1VEsbXKdXNtZ3QcFgVLWixq%2B9J4Gt4kocBSCPupLDiHwL%2BU%2Buhol4au5yJPKhEIhItNyNjDcaCg6%2FBME8oASlpDV5fD4i8CBfxOm0u3lAT6TMJyYM%2FpxOZ6Z5PNkXUphQYXwwVUL3uwz0%2FfN9ZMCrGuRJV4szvZ4QRV0kCG996k8twYzCnhOMto5zD71dfXBjqdArRwyRnLg2zPqaVbGXBhcUZG4udeqpZdLjDNbmMe6r8QSiXQRkjkJJyzT4DGcnWuMWRiZ%2FEHW2O2Bfcp9IzE4o%2BYZ6jSxgTBId6y66QTIjoft5s7dNfPbF9P%2FMFY0GhmbaNfg%2B%2Fd%2BRIrlnu8YJpZpZ5zpOd8St5IHmywrvCm0jBgglO6WTKT3KeKzEBxyXndYUx5PHIDXlVbvmiiaVUDzg0ZiiBWHRAJQDChNfR4SyqIjc0t3CxRbKp%2B%2F0CRAWe0QaX25Ip1iGmuqM9cHpSb3DpG2c7hOGzCAotCw190UI2dqxu5WMSZR1DVK2UAmi%2BPiHU5TnAVSU2Ahog1dtIq7%2BIHR%2B8sjVoV4vmPOqvSvH2VThSa%2Bt45d5dSax4TNw%3D%3D&X-Amz-Signature=68ea79d869cacbc475889857fc693f43193dcb1e809be7f6b85b4a8c9d94c260"
  }
];

// App State
let currentTrackIndex = 0;
let isPlaying = false;
let isMuted = false;
let isShuffle = false;
let isRepeat = false;
let currentSource = "local"; // 'local' (permanent) or 'cloud' (temporary STS presigned)
let previousVolume = 0.8;

// DOM Elements
const audio = document.getElementById("audio-player");
const btnPlayPause = document.getElementById("btn-play-pause");
const iconPlay = btnPlayPause.querySelector(".icon-play");
const iconPause = btnPlayPause.querySelector(".icon-pause");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const btnShuffle = document.getElementById("btn-shuffle");
const btnRepeat = document.getElementById("btn-repeat");
const btnSourceCloud = document.getElementById("btn-source-cloud");
const btnSourceLocal = document.getElementById("btn-source-local");

const trackTitle = document.getElementById("track-title");
const trackArtist = document.getElementById("track-artist");
const artTrackTitle = document.getElementById("art-track-title");
const sourceBadge = document.getElementById("source-badge");
const playerCard = document.querySelector(".player-card");

const progressContainer = document.getElementById("progress-container");
const progressCurrent = document.getElementById("progress-current");
const progressBuffered = document.getElementById("progress-buffered");
const progressThumb = document.getElementById("progress-thumb");
const currentTimeEl = document.getElementById("current-time");
const durationTimeEl = document.getElementById("duration-time");

const volumeSlider = document.getElementById("volume-slider");
const btnMute = document.getElementById("btn-mute");
const iconVolHigh = btnMute.querySelector(".icon-vol-high");
const iconVolMuted = btnMute.querySelector(".icon-vol-muted");
const playlistContainer = document.getElementById("playlist-container");

// Initialize
function init() {
  renderPlaylist();
  loadTrack(currentTrackIndex, false);
  setupEventListeners();
}

function renderPlaylist() {
  playlistContainer.innerHTML = "";
  TRACKS.forEach((track, index) => {
    const li = document.createElement("li");
    li.className = `playlist-item ${index === currentTrackIndex ? "active" : ""}`;
    li.dataset.index = index;
    li.innerHTML = `
      <div class="playlist-left">
        <span class="playlist-num">${index + 1}</span>
        <div class="playlist-info">
          <h4>${track.title}</h4>
          <p>${track.artist}</p>
        </div>
      </div>
      <span class="playlist-duration">${track.duration}</span>
    `;
    li.addEventListener("click", () => {
      loadTrack(index, true);
    });
    playlistContainer.appendChild(li);
  });
}

function loadTrack(index, autoPlay = false) {
  currentTrackIndex = index;
  const track = TRACKS[index];

  // Set audio source based on currentSource
  const url = currentSource === "cloud" ? track.cloudUrl : track.localUrl;
  audio.src = url;

  // Update UI
  trackTitle.textContent = track.title;
  trackArtist.textContent = track.artist;
  artTrackTitle.textContent = track.title;
  durationTimeEl.textContent = track.duration;
  sourceBadge.textContent = currentSource === "cloud" ? "AWS S3 Cloud" : "Local Audio";

  updatePlaylistActive();
  resetProgress();

  if (autoPlay) {
    playTrack();
  } else {
    pauseTrack();
  }
}

function updatePlaylistActive() {
  const items = playlistContainer.querySelectorAll(".playlist-item");
  items.forEach((item, index) => {
    if (index === currentTrackIndex) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

function playTrack() {
  audio.play()
    .then(() => {
      isPlaying = true;
      iconPlay.style.display = "none";
      iconPause.style.display = "block";
      playerCard.classList.add("playing");
    })
    .catch((err) => {
      console.warn("Playback error:", err);
      // Fallback to local if cloud URL had an issue
      if (currentSource === "cloud") {
        setSource("local");
        playTrack();
      }
    });
}

function pauseTrack() {
  audio.pause();
  isPlaying = false;
  iconPlay.style.display = "block";
  iconPause.style.display = "none";
  playerCard.classList.remove("playing");
}

function togglePlayPause() {
  if (isPlaying) {
    pauseTrack();
  } else {
    playTrack();
  }
}

function prevTrack() {
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }
  let newIndex = currentTrackIndex - 1;
  if (newIndex < 0) {
    newIndex = TRACKS.length - 1;
  }
  loadTrack(newIndex, isPlaying);
}

function nextTrack() {
  if (isShuffle) {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * TRACKS.length);
    } while (nextIndex === currentTrackIndex && TRACKS.length > 1);
    loadTrack(nextIndex, isPlaying);
    return;
  }

  let newIndex = currentTrackIndex + 1;
  if (newIndex >= TRACKS.length) {
    newIndex = 0;
  }
  loadTrack(newIndex, isPlaying);
}

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

function resetProgress() {
  progressCurrent.style.width = "0%";
  progressThumb.style.left = "0%";
  currentTimeEl.textContent = "0:00";
}

function setSource(source) {
  if (currentSource === source) return;
  currentSource = source;

  if (source === "cloud") {
    btnSourceCloud.classList.add("active");
    btnSourceLocal.classList.remove("active");
  } else {
    btnSourceLocal.classList.add("active");
    btnSourceCloud.classList.remove("active");
  }

  const wasPlaying = isPlaying;
  const savedTime = audio.currentTime;
  loadTrack(currentTrackIndex, false);
  audio.currentTime = savedTime;
  if (wasPlaying) playTrack();
}

function setupEventListeners() {
  // Play/Pause button
  btnPlayPause.addEventListener("click", togglePlayPause);
  btnPrev.addEventListener("click", prevTrack);
  btnNext.addEventListener("click", nextTrack);

  // Source toggle
  btnSourceCloud.addEventListener("click", () => setSource("cloud"));
  btnSourceLocal.addEventListener("click", () => setSource("local"));

  // Shuffle toggle
  btnShuffle.addEventListener("click", () => {
    isShuffle = !isShuffle;
    btnShuffle.classList.toggle("active", isShuffle);
  });

  // Repeat toggle
  btnRepeat.addEventListener("click", () => {
    isRepeat = !isRepeat;
    btnRepeat.classList.toggle("active", isRepeat);
  });

  // Audio element events
  audio.addEventListener("timeupdate", () => {
    if (!audio.duration) return;
    const percent = (audio.currentTime / audio.duration) * 100;
    progressCurrent.style.width = `${percent}%`;
    progressThumb.style.left = `${percent}%`;
    currentTimeEl.textContent = formatTime(audio.currentTime);
  });

  audio.addEventListener("loadedmetadata", () => {
    durationTimeEl.textContent = formatTime(audio.duration);
  });

  audio.addEventListener("progress", () => {
    if (audio.buffered.length > 0 && audio.duration) {
      const bufferedEnd = audio.buffered.end(audio.buffered.length - 1);
      const percent = (bufferedEnd / audio.duration) * 100;
      progressBuffered.style.width = `${percent}%`;
    }
  });

  audio.addEventListener("ended", () => {
    if (isRepeat) {
      audio.currentTime = 0;
      playTrack();
    } else {
      nextTrack();
    }
  });

  // Progress bar scrub/click
  progressContainer.addEventListener("click", (e) => {
    if (!audio.duration) return;
    const rect = progressContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, clickX / rect.width));
    audio.currentTime = percent * audio.duration;
  });

  // Volume slider
  volumeSlider.addEventListener("input", (e) => {
    const val = parseFloat(e.target.value);
    audio.volume = val;
    isMuted = val === 0;
    updateVolumeIcon();
  });

  // Mute button
  btnMute.addEventListener("click", () => {
    if (isMuted) {
      audio.volume = previousVolume > 0 ? previousVolume : 0.8;
      volumeSlider.value = audio.volume;
      isMuted = false;
    } else {
      previousVolume = audio.volume;
      audio.volume = 0;
      volumeSlider.value = 0;
      isMuted = true;
    }
    updateVolumeIcon();
  });

  function updateVolumeIcon() {
    if (isMuted || audio.volume === 0) {
      iconVolHigh.style.display = "none";
      iconVolMuted.style.display = "block";
    } else {
      iconVolHigh.style.display = "block";
      iconVolMuted.style.display = "none";
    }
  }

  // Keyboard Shortcuts
  window.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT") return;
    if (e.code === "Space") {
      e.preventDefault();
      togglePlayPause();
    } else if (e.code === "ArrowRight") {
      audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
    } else if (e.code === "ArrowLeft") {
      audio.currentTime = Math.max(0, audio.currentTime - 5);
    } else if (e.code === "ArrowUp") {
      e.preventDefault();
      audio.volume = Math.min(1, audio.volume + 0.05);
      volumeSlider.value = audio.volume;
      isMuted = false;
      updateVolumeIcon();
    } else if (e.code === "ArrowDown") {
      e.preventDefault();
      audio.volume = Math.max(0, audio.volume - 0.05);
      volumeSlider.value = audio.volume;
      isMuted = audio.volume === 0;
      updateVolumeIcon();
    }
  });
}

// Start
document.addEventListener("DOMContentLoaded", init);

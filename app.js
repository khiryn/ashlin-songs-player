// Ashlin Songs Web Player - Main Application

const TRACKS = [
  {
    id: 0,
    title: "Bottom Of The Ocean",
    artist: "Ashlin",
    duration: "1:15",
    localUrl: "audio/BottomOfTheOcean.mp3",
    cloudUrl: "https://d1w55keg91gj32.cloudfront.net/audio/BottomOfTheOcean.mp3"
  },
  {
    id: 1,
    title: "Dear God",
    artist: "Ashlin",
    duration: "3:01",
    localUrl: "audio/DearGod.mp3",
    cloudUrl: "https://d1w55keg91gj32.cloudfront.net/audio/DearGod.mp3"
  },
  {
    id: 2,
    title: "Harmonizing",
    artist: "Ashlin",
    duration: "2:19",
    localUrl: "audio/Harmonizing.mp3",
    cloudUrl: "https://ashlin-songs-bucket.s3.us-east-2.amazonaws.com/audio/Harmonizing.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA5VTROI4ZFC2SJT3E%2F20261111%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20261111T034914Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIQD56k5hGZWfl4g4LFXiK%2Fq9K3%2B3W8zQVbYLmg51eAWAeQIgCp70mnp3Q3KoI7NZWLuYta5LlGvITxlu2kvPSUu1GaEqqQgITRAAGgw5Mzk3NjIwMDk5MDYiDJvQ6sfqffMmWPMoJyqGCNu%2B0cxg4gquUi5ZK3Q1PUCx6RhQS7ZLs82uWjULcICtGteAbpXRBOisjD8E2ASrSF4qpwHoShY8qExPVdWJHkgBvtSZqPf8NPyfIy%2BLs%2BDa%2FPh8lex%2BCkUELtfgk62psOyN2KqMBXFvuwI8FSuk%2FxWOnOAnwPnktLMT%2FGC0b%2BOABsBumt16iVQCKbQzMFchmW21REUoiDw%2FHg9%2Fn3G6%2BUhXcSLxpcB%2BLiRe7tQXe%2FNZRRj4l9kgeyT6r5hy4GMRTikxZaJ%2BymkBKRDqSUXIapFDHFLz2%2FqeT2dqkCIT8cQP35T6mVWmfNl6YShxGj8KcxYqL5LjjXtbZY%2FabgH72JdUq%2FYwQ2O9pnZ22TaAvwkhCReKp7bwEAUHNU9W87S%2BfxOKznF8IeOE2LhypLsF3nWO2Gcnqh8xRs2tgaLAWIe1TNgLtQYEDfGUVshEBy9MDyWxVdXJ8DRZnFOau6DynnHyrzEa2zGXHs%2B5twXmhpX%2F%2BOaFz2%2BneMoAHYF4ZUONKrS%2FgV9Mn%2BvMn9W5AV0z%2Ftuu5dqGkItQERGrdDoLpeiS5uUyiysL6GbrP4aH1%2FxOAQIXxfXulazwX2qfcvjph6vji%2FI1VKSKlgYU%2BCxJx4yBGUQ72VHOCgpUgiKuuqJOrjjLvZmen2RElzZT99WGaU1ali74R6Jml2RUS%2BehJLDf24XyWTNVvdssBkIVzmemZETu8cXSMgJ7toAsi%2BV%2F%2BH%2BTYLBdEHRx7iIlI0j32sS1hmnjf9v1q1aBuQw1wrfTO206gk8f48UHsxPp1%2Bx71rYS1xaPUfJvmDNwBWpGEuSo78lJouDV5%2FHb04H2G5DPdM3G1Neb0sMo5BPfS4kvXuNZZa1%2FYATV0pP8X30qKFDMBCGp2FbONqu44IUjdDilgyjPdjt%2BKvdwYf3B2S2%2FmwDCAnPRrGSIQURyy45mzfMancYtV%2FnVeZFOSsqcUuIPzZZvorWCbqskpNAtLMqKd2WU0LhRMZm7QOBkR%2F6kq2H%2FwJQHDIIphiOIlEZb3RQJisD4AxFZvTw1zTbj9qWKVNyjcrBbk%2BmpnmCGHFot%2BifJ4FIbF1xjKZAJrRuqEkh5AgWbGz6I0uJdxPBYw7Ber8xqCSAl1KeR15eam3sQumiSLJAWhQFQWpSlONWD7XPFrW2vqwQjcaIeMcOZCaNdlVdsJpFwwftUGe3N0CqgQf2SjpPGR4DVX6lxKCDtXNUZ6c1rqUISlsXCrHL4FPJiHlPayIzbwkmIxjgefWG1wLhGirhMIyk5GJ02nEAZ2n6nMzWOdaQhacAay7JKZU%2FgfTCuvmRJpfczO2h0%2B23KXMO2QR%2FV7%2B%2FmfNnFI6ba6P4XudyqkEvufA0VXvBOZtnpbkCi54jgBNIw5PPN1wY6nQKcGi8WwsOghUwcLM5Fx58id4WYqHFqi8CxlmyAAjGW66%2Bq43ZjzZwsxQpAQYF0MU6QFUrfPNRs0zh1j1XPo0dxb8Q1%2BPN9DehYPmHfQ96w6rOQzNakZWhf%2ByUn8usOidA5tj6eq%2BlSQyPD5X8B4pZ19LqSQJ974A2zWtYQBJPKjlG3Yt0gg8sO17OcF4Zx%2BoRPTXLYF1cSEB6Gu0ugZFTCfkhXgpWDvjbUYncyQwiijlbeL3TKuIfXujMciLgW7d8q9RISjkT4Iqmjw4yY9mARE3e66ltWM6IPti1RF3eMRzMvsPfwXPP%2FBvom7R%2B3gIdBwNWr7DJCTByMlACwklMAUGavDJAcOA4%2B27EiO%2BqPFBR8sbXVJYCkZaZB%2B2w%3D&X-Amz-Signature=84f8045b1be7cd8f88c610b2e5875c7f3a71600c41759a2c08f8593729b75f6b"
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

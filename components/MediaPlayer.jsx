"use client";
import React, { useEffect, useRef, useState } from "react";

const MediaPlayer = ({
  src,
  poster,
  title = "Windows Media Player",
  nowPlaying = "Scendent Media Reel",
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    if (!src) return;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.then === "function") {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [src]);

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    setIsPlaying(false);
  };

  const handleToggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <div className="win-player">
      <div className="win-titlebar">
        <div className="win-titlebar-left">
          <span className="win-titlebar-icon">▶</span>
          <span>{title}</span>
        </div>
        <div className="win-titlebar-controls" aria-label="Window controls">
          <button className="win-titlebar-btn" type="button" aria-label="Minimize">
            _
          </button>
          <button className="win-titlebar-btn" type="button" aria-label="Maximize">
            []
          </button>
          <button className="win-titlebar-btn" type="button" aria-label="Close">
            X
          </button>
        </div>
      </div>

      <div className="win-player-menubar">
        <div className="win-menu-group">
          <button className="win-menu-item" type="button">File</button>
          <button className="win-menu-item" type="button">View</button>
          <button className="win-menu-item" type="button">Play</button>
          <button className="win-menu-item" type="button">Help</button>
        </div>
        <div className="win-menu-group">
          <span className="win-status-pill">Now Playing: {nowPlaying}</span>
        </div>
      </div>

      <div className="win-player-body">
        <div className="win-player-screen">
          <video
            ref={videoRef}
            className="win-player-video"
            src={src}
            poster={poster}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          <div className="win-player-overlay">
            <span>Now Playing</span>
            <strong>{nowPlaying}</strong>
          </div>
        </div>

        <div className="win-player-controls">
          <div className="win-player-controls-group">
            <button
              className="win-player-btn"
              type="button"
              onClick={handleTogglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
            <button className="win-player-btn" type="button" onClick={handleStop}>
              Stop
            </button>
            <button
              className="win-player-btn"
              type="button"
              onClick={handleToggleMute}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? "Unmute" : "Mute"}
            </button>
          </div>
          <div className="win-player-status">
            Status: {isPlaying ? "Playing" : "Paused"} · {isMuted ? "Muted" : "Sound on"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaPlayer;

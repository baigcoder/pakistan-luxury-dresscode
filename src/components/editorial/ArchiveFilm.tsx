"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./ArchiveFilm.module.css";

export const ArchiveFilm: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [motionAllowed, setMotionAllowed] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMotionAllowed(!reducedMotion.matches);
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.pause();
          return;
        }
        if (!reducedMotion.matches && !userPaused.current) {
          void video.play().catch(() => setIsPlaying(false));
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPaused.current = false;
      void video.play().catch(() => setIsPlaying(false));
    } else {
      userPaused.current = true;
      video.pause();
    }
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="archive-film-title">
      <div className={styles.heading}>
        <div>
          <span className={styles.kicker}>Moving image archive · Winter 2024</span>
          <h2 id="archive-film-title" className={styles.title}>
            Unstitched in <em>motion.</em>
          </h2>
        </div>
        <p className={styles.intro}>
          A study in winter light, embroidered cloth and the landscapes that shape a collection.
        </p>
      </div>

      <div className={styles.frame}>
        <video
          ref={videoRef}
          className={styles.video}
          src="/videos/mbasics-unstitched-winter-24.mp4"
          poster="/images/mbasics-winter-film-poster.jpg"
          muted
          loop
          playsInline
          preload="none"
          aria-label="Winter unstitched fashion campaign, moving between embroidered looks, jewelry and mountain scenery"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        <div className={styles.scrim} aria-hidden="true" />
        <div className={styles.filmCaption}>
          <div>
            <span className={styles.filmLabel}>Campaign film · 00:59</span>
            <p className={styles.filmName}>MBasics Unstitched Collection ’24</p>
            <p className={styles.credit}>Original film by MARIA.B Official</p>
          </div>
          <div className={styles.controls} aria-label="Film controls">
            <button type="button" onClick={togglePlayback} className={styles.control} aria-label={isPlaying ? "Pause film" : "Play film"}>
              <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
              <span>{isPlaying ? "Pause" : "Play film"}</span>
            </button>
            <button type="button" onClick={toggleSound} className={styles.control} aria-label={isMuted ? "Unmute film" : "Mute film"}>
              <span aria-hidden="true">{isMuted ? "◖" : "◖))"}</span>
              <span>{isMuted ? "Sound off" : "Sound on"}</span>
            </button>
          </div>
        </div>
      </div>
      <p className={styles.note}>
        The film is muted on arrival. {motionAllowed ? "Playback pauses when it leaves view." : "It remains still until you choose to play it."}
      </p>
    </section>
  );
};

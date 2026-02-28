"use client";

/**
 * Pure CSS parallax pixel stars - based on
 * https://codepen.io/mattmarble/pen/qBdamQz
 */

export default function StarParallax() {
  return (
    <div className="hero-stars-container">
      <div id="stars" className="hero-stars-layer" />
      <div id="stars2" className="hero-stars-layer hero-stars-layer-2" />
      <div id="stars3" className="hero-stars-layer hero-stars-layer-3" />
    </div>
  );
}

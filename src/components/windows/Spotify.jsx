import React from "react";
import MacWindow from "./MacWindow";
import './spotify.scss'

const Spotify = () => {
  return (
    <MacWindow width='25vw'>
      <div className="spotify-window">
        <iframe
          title="Spotify playlist"
          src="https://open.spotify.com/embed/playlist/37i9dQZF1E4xzuMPqbCJfm?utm_source=generator&si=2c28f698699c4ca0"
          width="100%"
          height="352"
          style={{ borderRadius: "12px" }}
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Spotify;

// import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="sparkle-background">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="confetti-container">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="confetti-piece"
            style={{
              left: `${Math.random() * 100}%`,
              backgroundColor: [
                "#ffd700",
                "#ff6b6b",
                "#4ecdc4",
                "#45b7d1",
                "#96ceb4",
              ][Math.floor(Math.random() * 5)],
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="birthday-card">
        <h1>Chúc bố sinh nhật vui vẻ !</h1>
        <h2>Happy Birthday !!!</h2>
      </div>

      <div className="balloon-cluster">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`balloon balloon${i + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="cake">
        <div className="plate"></div>
        <div className="layer layer1"></div>
        <div className="layer layer2"></div>
        <div className="layer layer3"></div>
        <div className="layer layer4"></div>
        <div className="layer layer5"></div>
        <div className="candle"></div>
        <div className="flame"></div>
        <div className="flame-reflection"></div>
      </div>

      <div className="fireworks">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="firework" />
        ))}
      </div>
    </>
  );
}

export default App;

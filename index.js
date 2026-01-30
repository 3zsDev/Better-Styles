(() => {
  const css = `
    .lyrics-panel .lyric-line.past.near,
    .lyrics-panel .lyric-line.past.mid,
    .lyrics-panel .lyric-line.past.far {
      filter: none !important;
      opacity: 1 !important;
    }

    [data-theme=light] .lyrics-panel .lyric-line.past.near {
      color: rgba(0, 0, 0, 0.45) !important;
    }
    [data-theme=light] .lyrics-panel .lyric-line.past.mid {
      color: rgba(0, 0, 0, 0.3) !important;
    }
    [data-theme=light] .lyrics-panel .lyric-line.past.far {
      color: rgba(0, 0, 0, 0.2) !important;
    }

    [data-theme=dark] .lyrics-panel .lyric-line.past.near {
      color: rgba(255, 255, 255, 0.45) !important;
    }
    [data-theme=dark] .lyrics-panel .lyric-line.past.mid {
      color: rgba(255, 255, 255, 0.3) !important;
    }
    [data-theme=dark] .lyrics-panel .lyric-line.past.far {
      color: rgba(255, 255, 255, 0.2) !important;
    }

    .playback-controls[class*="svelte"] {
      overflow: visible !important;
    }

    .play-btn[class*="svelte"] {
      position: relative;
      z-index: 10;
    }

    .separator[class*="svelte"] {
      visibility: hidden;
      position: relative;
    }

    .separator[class*="svelte"]::after {
      content: "-";
      visibility: visible;
      position: absolute;
      inset: 0;
      text-align: center;
    }
`;

  let style = document.getElementById("better-styles");
  if (!style) {
    style = document.createElement("style");
    style.id = "better-styles";
    document.head.appendChild(style);
  }
  style.textContent = css;
  console.log("[BetterS] Init");
})();

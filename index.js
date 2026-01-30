export function activate({ importCSS }) {
  const customCSS = `
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
  `;
  importCSS(customCSS);
  console.log("better-styles init Successful");
}

export function deactivate() {}

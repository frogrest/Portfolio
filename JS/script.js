function switchTab(tabId) {
  const tabs = ["home", "skills", "projects"];

  tabs.forEach((t) => {
    const panel = document.getElementById(`panel-${t}`);
    const btn = document.getElementById(`btn-${t}`);

    if (panel) {
      if (t === tabId) {
        panel.classList.add("show");
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            panel.classList.add("fade-in");
          });
        });
      } else {
        // nothing to remove here; keep hide behavior
        panel.classList.remove("fade-in", "show");
      }
    }

    if (btn) {
      if (t === tabId) {
        btn.className =
          "px-5 py-2.5 rounded-full text-[11px] font-bold tracking-wider uppercase transition-all duration-300 bg-white text-black";
      } else {
        btn.className =
          "px-5 py-2.5 rounded-full text-[11px] font-bold tracking-wider uppercase transition-all duration-300 text-zinc-400 hover:text-white";
      }
    }
  });
}

function switchProject(projKey) {
  const views = document.querySelectorAll(".project-view");
  views.forEach((v) => v.classList.add("hidden"));

  const targetView = document.getElementById(`project-${projKey}`);
  if (targetView) targetView.classList.remove("hidden");

  const btnPrepa = document.getElementById("proj-btn-prepa");
  const btnBot = document.getElementById("proj-btn-bot");

  if (projKey === "prepa") {
    btnPrepa.className =
      "px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all bg-white text-black";
    btnBot.className =
      "px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all text-zinc-400 hover:text-white";
  } else {
    btnBot.className =
      "px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all bg-white text-black";
    btnPrepa.className =
      "px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all text-zinc-400 hover:text-white";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");
  const toggleBtn = document.getElementById("audio-toggle");
  const statusDot = document.getElementById("audio-status-dot");
  const statusText = document.getElementById("audio-text");

  audio.volume = 0.15;

  function updateUI(isPlaying) {
    if (isPlaying) {
      statusDot.className = "w-1.5 h-1.5 rounded-full bg-white animate-ping";
      statusText.innerText = "Music On";
    } else {
      statusDot.className = "w-1.5 h-1.5 rounded-full bg-zinc-500";
      statusText.innerText = "Music Off";
    }
  }

  toggleBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio
        .play()
        .then(() => updateUI(true))
        .catch(() => updateUI(false));
    } else {
      audio.pause();
      updateUI(false);
    }
  });

  document.body.addEventListener(
    "click",
    () => {
      audio
        .play()
        .then(() => updateUI(true))
        .catch(() => updateUI(false));
    },
    { once: true },
  );
  // Beat detection removed — profile glow remains decorative only.
});

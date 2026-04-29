const GPU_DATA = [
  { name: "Intel UHD / basic iGPU", score: 18, vram: 1, watts: 25, tier: "Integrated" },
  { name: "Intel Iris Xe", score: 30, vram: 2, watts: 30, tier: "Integrated" },
  { name: "GTX 1050 Ti", score: 42, vram: 4, watts: 75, tier: "Entry" },
  { name: "GTX 1650", score: 50, vram: 4, watts: 75, tier: "Entry" },
  { name: "GTX 1660 Super", score: 65, vram: 6, watts: 125, tier: "Budget" },
  { name: "RTX 2060", score: 75, vram: 6, watts: 160, tier: "Budget RTX" },
  { name: "RTX 3060", score: 92, vram: 12, watts: 170, tier: "1080p/1440p" },
  { name: "RTX 3060 Ti", score: 112, vram: 8, watts: 200, tier: "1440p" },
  { name: "RTX 3070", score: 125, vram: 8, watts: 220, tier: "1440p" },
  { name: "RTX 3080", score: 156, vram: 10, watts: 320, tier: "High" },
  { name: "RTX 4060", score: 102, vram: 8, watts: 115, tier: "Efficient" },
  { name: "RTX 4060 Ti", score: 123, vram: 8, watts: 160, tier: "1080p High" },
  { name: "RTX 4070", score: 158, vram: 12, watts: 200, tier: "1440p High" },
  { name: "RTX 4070 Super", score: 178, vram: 12, watts: 220, tier: "1440p Ultra" },
  { name: "RTX 4070 Ti Super", score: 210, vram: 16, watts: 285, tier: "High" },
  { name: "RTX 4080 Super", score: 250, vram: 16, watts: 320, tier: "4K" },
  { name: "RTX 4090", score: 330, vram: 24, watts: 450, tier: "Monster" },
  { name: "RX 580", score: 48, vram: 8, watts: 185, tier: "Budget" },
  { name: "RX 5600 XT", score: 70, vram: 6, watts: 150, tier: "Budget" },
  { name: "RX 6600", score: 86, vram: 8, watts: 132, tier: "1080p" },
  { name: "RX 6650 XT", score: 102, vram: 8, watts: 176, tier: "1080p High" },
  { name: "RX 6700 XT", score: 128, vram: 12, watts: 230, tier: "1440p" },
  { name: "RX 6750 XT", score: 140, vram: 12, watts: 250, tier: "1440p" },
  { name: "RX 6800 XT", score: 170, vram: 16, watts: 300, tier: "High" },
  { name: "RX 7600", score: 98, vram: 8, watts: 165, tier: "1080p" },
  { name: "RX 7700 XT", score: 145, vram: 12, watts: 245, tier: "1440p" },
  { name: "RX 7800 XT", score: 172, vram: 16, watts: 263, tier: "1440p Ultra" },
  { name: "RX 7900 XT", score: 225, vram: 20, watts: 315, tier: "4K" },
  { name: "RX 7900 XTX", score: 255, vram: 24, watts: 355, tier: "4K High" },
  { name: "Arc A580", score: 82, vram: 8, watts: 185, tier: "Budget" },
  { name: "Arc A750", score: 96, vram: 8, watts: 225, tier: "1080p" },
  { name: "Arc A770", score: 112, vram: 16, watts: 225, tier: "1080p/1440p" }
];

const GAME_DATA = [
  { name: "Fortnite", base: 122, cpu: 0.82, vram: 6 },
  { name: "Minecraft Java", base: 180, cpu: 1.25, vram: 4 },
  { name: "Roblox", base: 240, cpu: 1.05, vram: 2 },
  { name: "Valorant", base: 260, cpu: 1.35, vram: 4 },
  { name: "CS2", base: 150, cpu: 1.18, vram: 6 },
  { name: "GTA V", base: 115, cpu: 0.92, vram: 4 },
  { name: "Forza Horizon 5", base: 96, cpu: 0.78, vram: 8 },
  { name: "Cyberpunk 2077", base: 62, cpu: 0.67, vram: 10 },
  { name: "Warzone", base: 88, cpu: 0.98, vram: 8 },
  { name: "Apex Legends", base: 132, cpu: 0.92, vram: 6 }
];

const CHECKLISTS = {
  windows: [
    ["Turn on Game Mode", "Settings → Gaming → Game Mode. Helps Windows prioritize games."],
    ["Update GPU driver", "Use GeForce Experience/NVIDIA app, AMD Adrenalin, Intel Arc Control, or official driver page."],
    ["Use High Performance power mode", "Settings → System → Power. On laptops, plug in the charger."],
    ["Disable useless startup apps", "Task Manager → Startup apps. Less background load = smoother gameplay."],
    ["Close overlays you do not need", "Too many overlays can cause stutter: Xbox Game Bar, Discord, recording apps."],
    ["Check monitor refresh rate", "Settings → Display → Advanced display. Set 144 Hz/165 Hz if your monitor supports it."]
  ],
  nvidia: [
    ["Prefer maximum performance", "NVIDIA Control Panel → Manage 3D settings → Power management mode."],
    ["Enable Reflex in supported games", "Good for lower input delay in Fortnite, Valorant, Apex and more."],
    ["Use DLSS when available", "DLSS Quality/Balanced can raise FPS with good image quality."],
    ["Keep GPU temperature under control", "Hot GPUs lower clocks. Clean dust and improve airflow."],
    ["Set correct GPU on laptops", "Windows graphics settings → choose High performance GPU for games."]
  ],
  amd: [
    ["Use AMD Adrenalin profiles", "Per-game profiles keep settings clean and reversible."],
    ["Try FSR in supported games", "FSR Quality/Balanced can boost FPS, especially at 1440p/4K."],
    ["Enable Anti-Lag", "Can reduce input delay in many games."],
    ["Avoid random driver mod packs", "Use official drivers unless you know exactly what you are doing."],
    ["Check Smart Access Memory", "Can help on supported Ryzen + Radeon systems."]
  ],
  hardware: [
    ["Check PSU wattage", "New GPUs can need more power. Leave safety headroom."],
    ["Measure case clearance", "Some GPUs are huge. Check length and slot thickness before buying."],
    ["Use correct PCIe power cables", "Do not force weird adapters. Use proper cables from your PSU brand."],
    ["Enable XMP/EXPO for RAM", "BIOS setting that lets RAM run at advertised speed."],
    ["Clean dust carefully", "Dust = heat = lower FPS. Turn PC off and clean gently."],
    ["Use DisplayPort/HDMI in GPU", "Plug monitor into the GPU, not the motherboard, if you have a dedicated GPU."]
  ]
};

let selectedGames = new Set(["Fortnite", "Minecraft Java", "CS2", "Forza Horizon 5"]);
let activeChecklist = "windows";
let lastResult = null;
let deferredPrompt = null;

const $ = (id) => document.getElementById(id);

function init() {
  fillGpuSelects();
  renderGames();
  renderChecklist();
  renderSavedPlans();
  attachEvents();
  calculate();
}

function fillGpuSelects() {
  const current = $("currentGpu");
  const target = $("targetGpu");

  GPU_DATA.forEach((gpu, index) => {
    const option1 = document.createElement("option");
    option1.value = index;
    option1.textContent = `${gpu.name} — ${gpu.tier}`;
    current.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = index;
    option2.textContent = `${gpu.name} — ${gpu.tier}`;
    target.appendChild(option2);
  });

  current.value = "4";
  target.value = "12";
}

function renderGames() {
  const list = $("gameList");
  list.innerHTML = "";

  GAME_DATA.forEach((game) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = `chip ${selectedGames.has(game.name) ? "active" : ""}`;
    chip.textContent = game.name;
    chip.addEventListener("click", () => {
      if (selectedGames.has(game.name)) {
        selectedGames.delete(game.name);
      } else {
        selectedGames.add(game.name);
      }
      if (selectedGames.size === 0) selectedGames.add(game.name);
      renderGames();
      calculate();
    });
    list.appendChild(chip);
  });
}

function attachEvents() {
  $("calculateBtn").addEventListener("click", calculate);
  $("detectBtn").addEventListener("click", detectBrowserGpu);
  $("saveBtn").addEventListener("click", savePlan);
  $("resetBtn").addEventListener("click", resetForm);
  $("copyChecklistBtn").addEventListener("click", copyChecklist);
  $("markDoneBtn").addEventListener("click", markAllDone);

  ["currentGpu", "targetGpu", "cpuTier", "ramGb", "resolution", "quality", "psuWatts", "budget"].forEach((id) => {
    $(id).addEventListener("input", calculate);
    $(id).addEventListener("change", calculate);
  });

  document.querySelectorAll(".tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeChecklist = btn.dataset.tab;
      renderChecklist();
    });
  });

  $("installBtn").addEventListener("click", async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    $("installBtn").classList.add("hidden");
  });

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    $("installBtn").classList.remove("hidden");
  });
}

function getSelectedGpu(id) {
  return GPU_DATA[Number($(id).value)];
}

function estimateFps(gpu, game) {
  const cpuTier = Number($("cpuTier").value);
  const ram = Number($("ramGb").value);
  const resolutionCost = Number($("resolution").value);
  const qualityCost = Number($("quality").value);

  const gpuFactor = gpu.score / 100;
  const cpuFactor = Math.min(1.25, Math.max(0.42, cpuTier / 75));
  const cpuLimit = (0.58 + (cpuFactor * 0.42)) / game.cpu;
  const ramFactor = ram < 16 ? 0.82 : ram >= 32 ? 1.04 : 1;
  const vramPenalty = gpu.vram < game.vram ? Math.max(0.55, gpu.vram / game.vram) : 1;
  const randomLikeRealWorldVariation = 0.96;

  const fps = game.base * gpuFactor * cpuLimit * ramFactor * vramPenalty * randomLikeRealWorldVariation / (resolutionCost * qualityCost);
  return Math.max(12, Math.round(fps));
}

function calculate() {
  const currentGpu = getSelectedGpu("currentGpu");
  const targetGpu = getSelectedGpu("targetGpu");
  const selectedGameObjects = GAME_DATA.filter((game) => selectedGames.has(game.name));

  const rows = selectedGameObjects.map((game) => {
    const currentFps = estimateFps(currentGpu, game);
    const targetFps = estimateFps(targetGpu, game);
    return {
      game: game.name,
      currentFps,
      targetFps,
      gain: targetFps - currentFps,
      percent: currentFps ? Math.round(((targetFps - currentFps) / currentFps) * 100) : 0
    };
  });

  const avgCurrent = Math.round(rows.reduce((sum, row) => sum + row.currentFps, 0) / rows.length);
  const avgTarget = Math.round(rows.reduce((sum, row) => sum + row.targetFps, 0) / rows.length);
  const gainPercent = Math.max(0, Math.round(((avgTarget - avgCurrent) / Math.max(1, avgCurrent)) * 100));

  const value = calculateValueScore(currentGpu, targetGpu, avgCurrent, avgTarget);
  const compat = compatibilityReport(currentGpu, targetGpu, rows);

  $("fpsCurrent").textContent = avgCurrent;
  $("fpsTarget").textContent = avgTarget;
  $("fpsGainText").textContent = gainPercent > 0
    ? `Around +${gainPercent}% average uplift in selected games.`
    : `This upgrade may not improve FPS much.`;

  $("fpsBar").style.width = `${Math.min(100, gainPercent)}%`;

  $("valueScore").textContent = `${value}/100`;
  $("valueText").textContent = valueText(value);
  $("scoreRingInner").textContent = value;
  document.querySelector(".scoreRing").style.background = `conic-gradient(var(--green) ${value * 3.6}deg, rgba(255,255,255,0.1) 0deg)`;

  $("compatTitle").textContent = compat.title;
  $("compatText").textContent = compat.text;

  renderFpsTable(rows);

  lastResult = {
    date: new Date().toLocaleString(),
    currentGpu: currentGpu.name,
    targetGpu: targetGpu.name,
    avgCurrent,
    avgTarget,
    gainPercent,
    selectedGames: Array.from(selectedGames)
  };
}

function calculateValueScore(currentGpu, targetGpu, avgCurrent, avgTarget) {
  const rawGain = Math.max(0, avgTarget - avgCurrent);
  const gainRatio = rawGain / Math.max(30, avgCurrent);
  const powerPenalty = targetGpu.watts > 320 ? 8 : targetGpu.watts > 250 ? 4 : 0;
  const tinyUpgradePenalty = targetGpu.score <= currentGpu.score * 1.15 ? 28 : 0;
  const vramBonus = targetGpu.vram >= 12 ? 7 : targetGpu.vram >= 8 ? 3 : 0;
  const score = Math.round(Math.min(100, gainRatio * 85 + vramBonus + 20 - powerPenalty - tinyUpgradePenalty));
  return Math.max(0, score);
}

function valueText(value) {
  if (value >= 85) return "Huge upgrade. This is the spicy one.";
  if (value >= 65) return "Strong upgrade. Good FPS jump for most games.";
  if (value >= 45) return "Okay upgrade, but check price carefully.";
  if (value >= 25) return "Small upgrade. Might not be worth it unless very cheap.";
  return "Weak value. Save money or choose a stronger target GPU.";
}

function compatibilityReport(currentGpu, targetGpu, rows) {
  const psu = Number($("psuWatts").value);
  const cpu = Number($("cpuTier").value);
  const ram = Number($("ramGb").value);
  const neededPsu = Math.ceil((targetGpu.watts + 180) * 1.35 / 50) * 50;
  const badRows = rows.filter((row) => row.targetFps < 60);
  const warnings = [];

  if (psu < neededPsu) warnings.push(`PSU may be too weak. Recommended around ${neededPsu}W+.`);
  if (cpu < 65 && targetGpu.score > 140) warnings.push("CPU bottleneck likely with this GPU.");
  if (ram < 16) warnings.push("8 GB RAM can cause stutter in newer games.");
  if (targetGpu.vram < 8) warnings.push("Less than 8 GB VRAM can struggle in modern high settings.");
  if (targetGpu.score <= currentGpu.score) warnings.push("Target GPU is not faster than your current GPU.");
  if (badRows.length) warnings.push(`${badRows.length} selected game(s) may still be under 60 FPS.`);

  if (!warnings.length) {
    return {
      title: "Looks good ✅",
      text: `Estimated PSU need: about ${neededPsu}W+. No major warning found. Still check case size and power cables.`
    };
  }

  return {
    title: "Check before buying ⚠️",
    text: warnings.join(" ")
  };
}

function renderFpsTable(rows) {
  const tbody = $("fpsTable");
  tbody.innerHTML = "";

  rows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><b>${escapeHtml(row.game)}</b></td>
      <td>${row.currentFps} FPS</td>
      <td>${row.targetFps} FPS</td>
      <td>${row.gain >= 0 ? "+" : ""}${row.gain} FPS (${row.percent >= 0 ? "+" : ""}${row.percent}%)</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderChecklist() {
  const wrap = $("checklistItems");
  wrap.innerHTML = "";

  CHECKLISTS[activeChecklist].forEach(([title, desc], i) => {
    const item = document.createElement("label");
    item.className = "checkItem";
    item.innerHTML = `
      <input type="checkbox" data-check="${activeChecklist}-${i}" ${localStorage.getItem(`check-${activeChecklist}-${i}`) === "1" ? "checked" : ""}>
      <span><b>${escapeHtml(title)}</b>${escapeHtml(desc)}</span>
    `;
    const input = item.querySelector("input");
    input.addEventListener("change", () => {
      localStorage.setItem(`check-${activeChecklist}-${i}`, input.checked ? "1" : "0");
    });
    wrap.appendChild(item);
  });
}

function copyChecklist() {
  const text = CHECKLISTS[activeChecklist]
    .map(([title, desc], index) => `${index + 1}. ${title} — ${desc}`)
    .join("\n");

  navigator.clipboard.writeText(text)
    .then(() => toast("Checklist copied ✅"))
    .catch(() => toast("Copy failed. Browser blocked clipboard."));
}

function markAllDone() {
  CHECKLISTS[activeChecklist].forEach((_, i) => {
    localStorage.setItem(`check-${activeChecklist}-${i}`, "1");
  });
  renderChecklist();
  toast("Marked done ✅");
}

function savePlan() {
  calculate();
  const plans = JSON.parse(localStorage.getItem("gpuPlans") || "[]");
  plans.unshift(lastResult);
  localStorage.setItem("gpuPlans", JSON.stringify(plans.slice(0, 8)));
  renderSavedPlans();
  toast("Plan saved 💾");
}

function renderSavedPlans() {
  const wrap = $("savedPlans");
  const plans = JSON.parse(localStorage.getItem("gpuPlans") || "[]");
  wrap.innerHTML = "";

  if (!plans.length) {
    wrap.innerHTML = `<p style="color: var(--muted); margin: 0;">No saved plans yet.</p>`;
    return;
  }

  plans.forEach((plan, index) => {
    const div = document.createElement("div");
    div.className = "savedPlan";
    div.innerHTML = `
      <div>
        <b>${escapeHtml(plan.currentGpu)} → ${escapeHtml(plan.targetGpu)}</b>
        <p>${plan.avgCurrent} FPS → ${plan.avgTarget} FPS • +${plan.gainPercent}% • ${escapeHtml(plan.date)}</p>
      </div>
      <button data-delete="${index}">Delete</button>
    `;
    div.querySelector("button").addEventListener("click", () => {
      const updated = JSON.parse(localStorage.getItem("gpuPlans") || "[]");
      updated.splice(index, 1);
      localStorage.setItem("gpuPlans", JSON.stringify(updated));
      renderSavedPlans();
    });
    wrap.appendChild(div);
  });
}

function resetForm() {
  $("currentGpu").value = "4";
  $("targetGpu").value = "12";
  $("cpuTier").value = "75";
  $("ramGb").value = "16";
  $("resolution").value = "1.00";
  $("quality").value = "1.00";
  $("psuWatts").value = "650";
  $("budget").value = "12000";
  selectedGames = new Set(["Fortnite", "Minecraft Java", "CS2", "Forza Horizon 5"]);
  renderGames();
  calculate();
  toast("Reset done");
}

function detectBrowserGpu() {
  let renderer = "Unknown / blocked by browser";
  let vendor = "Unknown";

  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (gl) {
      const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
      if (debugInfo) {
        vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
        renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      } else {
        renderer = gl.getParameter(gl.RENDERER);
        vendor = gl.getParameter(gl.VENDOR);
      }
    }
  } catch (error) {
    renderer = "Detection failed";
  }

  $("detectedGpu").textContent = `${vendor} ${renderer}`.trim();
  $("detectedCores").textContent = navigator.hardwareConcurrency ? `${navigator.hardwareConcurrency}` : "?";
  $("detectedRam").textContent = navigator.deviceMemory ? `${navigator.deviceMemory} GB` : "Blocked";
  toast("Browser GPU info detected 🔎");
}

function toast(message) {
  let el = document.querySelector(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    document.body.appendChild(el);
  }

  el.textContent = message;
  el.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      console.log("Service worker registration failed.");
    });
  });
}

init();

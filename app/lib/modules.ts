export type ModuleCategory =
  | "Combat"
  | "Visual"
  | "Movement"
  | "HUD"
  | "Render"
  | "Utility"
  | "Misc";

export type ModuleSetting =
  | { type: "toggle"; key: string; label: string; value: boolean }
  | {
      type: "slider";
      key: string;
      label: string;
      value: number;
      min: number;
      max: number;
      step?: number;
      unit?: string;
    }
  | {
      type: "dropdown";
      key: string;
      label: string;
      value: string;
      options: string[];
    }
  | { type: "color"; key: string; label: string; value: string };

export interface Module {
  slug: string;
  name: string;
  category: ModuleCategory;
  description: string;
  /** PNG path under /public/mod-icons/, sourced from dll-css/src/Assets/Data */
  icon: string;
  defaultEnabled?: boolean;
  settings: ModuleSetting[];
}

const I = (file: string) => `/mod-icons/${file}`;

/* Display names + icon files mapped 1:1 from the C++ module constructors and Assets.rc */
export const MODULES: Module[] = [
  /* ── Combat ───────────────────────────────────────────────────── */
  { slug: "kill-aura", name: "KillAura", category: "Combat", description: "Hits nearby entities within reach.", icon: I("sword.png"), settings: [
    { type: "slider", key: "range", label: "Range", value: 3.5, min: 1, max: 6, step: 0.1, unit: "blocks" },
    { type: "slider", key: "cps", label: "Max CPS", value: 12, min: 1, max: 20, step: 1 },
    { type: "dropdown", key: "target", label: "Target", value: "Closest", options: ["Closest", "Lowest HP", "Strongest"] },
  ] },
  { slug: "reach", name: "Reach", category: "Combat", description: "Extends melee reach distance.", icon: I("reach.png"), settings: [
    { type: "slider", key: "reach", label: "Reach", value: 3.5, min: 3, max: 6, step: 0.1, unit: "blocks" },
  ] },
  { slug: "crystal-optimizer", name: "Crystal Optimizer", category: "Combat", description: "Removes end crystals client-side on attack.", icon: I("skull.png"), settings: [] },
  { slug: "swing-animations", name: "Swing Animations", category: "Combat", description: "Custom arm-swing animation curves.", icon: I("sword.png"), settings: [] },
  { slug: "block-hit", name: "Block Hit", category: "Combat", description: "Auto sword-block on attack.", icon: I("sword.png"), settings: [] },
  { slug: "hitbox", name: "Hitbox", category: "Combat", description: "Expands entity hitboxes.", icon: I("block.png"), settings: [
    { type: "slider", key: "size", label: "Size", value: 1.5, min: 1, max: 3, step: 0.1 },
  ] },
  { slug: "block-break-indicator", name: "Block Break Indicator", category: "Combat", description: "Per-block break progress markers.", icon: I("block_break_indicator.png"), settings: [] },
  { slug: "no-hurt-cam", name: "No Hurt Cam", category: "Combat", description: "Disables hurt-camera shake.", icon: I("reach.png"), settings: [] },
  { slug: "insta-hurt-animation", name: "Insta Hurt Animation", category: "Combat", description: "Skips delay on damage animations.", icon: I("combo.png"), settings: [] },
  { slug: "cps-limiter", name: "CPS Limiter", category: "Combat", description: "Cap click-rate to a target CPS.", icon: I("stop.png"), settings: [
    { type: "slider", key: "cap", label: "Cap", value: 14, min: 4, max: 24, step: 1 },
  ] },
  { slug: "opponent-reach", name: "Opponent Reach", category: "Combat", description: "Displays opponent reach in PvP.", icon: I("reach.png"), settings: [] },
  { slug: "knockback-logger", name: "Knockback Logger", category: "Combat", description: "Logs knockback patterns per server.", icon: I("combo.png"), settings: [] },
  { slug: "glint-color", name: "Glint Color", category: "Combat", description: "Custom enchantment-glint color.", icon: I("sword.png"), settings: [
    { type: "color", key: "glint", label: "Glint", value: "#fe4443" },
  ] },

  /* ── Visual ───────────────────────────────────────────────────── */
  { slug: "fullbright", name: "Fullbright", category: "Visual", description: "Removes darkness — every block lit.", icon: I("fullbright.png"), defaultEnabled: true, settings: [
    { type: "slider", key: "gamma", label: "Gamma", value: 1, min: 0.5, max: 2, step: 0.05 },
  ] },
  { slug: "block-outline", name: "Block Outline", category: "Visual", description: "Custom block outline color & thickness.", icon: I("block.png"), settings: [
    { type: "color", key: "color", label: "Color", value: "#ff233a" },
    { type: "slider", key: "thickness", label: "Thickness", value: 2, min: 1, max: 6, step: 0.5, unit: "px" },
  ] },
  { slug: "fog-color", name: "Fog Color", category: "Visual", description: "Recolor world fog.", icon: I("smoke.png"), settings: [
    { type: "color", key: "fog", label: "Fog", value: "#3f2a2d" },
  ] },
  { slug: "deepfry", name: "Deepfry", category: "Visual", description: "Saturated, crunched shader look.", icon: I("frying-pan.png"), settings: [
    { type: "slider", key: "intensity", label: "Intensity", value: 75, min: 0, max: 100, step: 1, unit: "%" },
  ] },
  { slug: "hurt-color", name: "Hurt Color", category: "Visual", description: "Custom hit-overlay tint.", icon: I("hurt.png"), settings: [
    { type: "color", key: "tint", label: "Tint", value: "#ff233a" },
  ] },
  { slug: "chunk-border", name: "Chunk Border", category: "Visual", description: "Visualizes chunk boundaries.", icon: I("chunkborder.png"), settings: [] },
  { slug: "fire-height", name: "Fire Height", category: "Visual", description: "Reduces overlay flame height.", icon: I("eye.png"), settings: [
    { type: "slider", key: "height", label: "Height", value: 25, min: 0, max: 100, step: 1, unit: "%" },
  ] },
  { slug: "view-model", name: "View Model", category: "Visual", description: "Reposition the held-item viewmodel.", icon: I("eye.png"), settings: [] },
  { slug: "panorama-shader", name: "Panorama Shader", category: "Visual", description: "Custom title-screen panorama shader.", icon: I("blur.png"), settings: [] },
  { slug: "upside-down", name: "Upside Down", category: "Visual", description: "Flip the rendered world.", icon: I("upside-down.png"), settings: [] },
  { slug: "custom-crosshair", name: "Custom Crosshair", category: "Visual", description: "Custom crosshair shape & color.", icon: I("crosshair.png"), settings: [
    { type: "color", key: "color", label: "Color", value: "#ffffff" },
  ] },
  { slug: "particle-multiplier", name: "Particle Multiplier", category: "Visual", description: "Scale particle density up or down.", icon: I("multiplier.png"), settings: [
    { type: "slider", key: "mult", label: "Multiplier", value: 1, min: 0.1, max: 4, step: 0.1, unit: "×" },
  ] },
  { slug: "nametag", name: "Nametag", category: "Visual", description: "Custom nametag rendering.", icon: I("nametag.png"), settings: [] },
  { slug: "skin-stealer", name: "Skin Stealer", category: "Visual", description: "Preview and save player skins.", icon: I("SkinStealer.png"), settings: [] },
  { slug: "saturation", name: "Saturation", category: "Visual", description: "Boost/cut world saturation.", icon: I("fullbright.png"), settings: [
    { type: "slider", key: "amount", label: "Amount", value: 100, min: 0, max: 200, step: 1, unit: "%" },
  ] },
  { slug: "shader-loader", name: "Shader Loader", category: "Visual", description: "Load custom RenderDragon shaders.", icon: I("renderdragon.png"), settings: [] },

  /* ── Movement ─────────────────────────────────────────────────── */
  { slug: "sprint", name: "Auto Sprint", category: "Movement", description: "Auto-sprints when moving forward.", icon: I("auto_sprint.png"), defaultEnabled: true, settings: [] },
  { slug: "freelook", name: "FreeLook", category: "Movement", description: "Look without changing facing.", icon: I("freelook.png"), settings: [
    { type: "dropdown", key: "key", label: "Hold Key", value: "ALT", options: ["ALT", "SHIFT", "TAB", "V"] },
  ] },
  { slug: "toggle-sneak", name: "Toggle Sneak", category: "Movement", description: "Toggle-sneak hotkey (no hold).", icon: I("slowly.png"), settings: [] },
  { slug: "null-movement", name: "Null Movement", category: "Movement", description: "Hides strafe inputs from attackers.", icon: I("null.png"), settings: [] },
  { slug: "zoom", name: "Zoom", category: "Movement", description: "Hold-to-zoom optic.", icon: I("magnify.png"), settings: [
    { type: "slider", key: "fov", label: "FOV", value: 30, min: 10, max: 80, step: 1 },
  ] },
  { slug: "fov-changer", name: "FOV Changer", category: "Movement", description: "Set a custom FOV.", icon: I("field-of-view.png"), settings: [
    { type: "slider", key: "fov", label: "FOV", value: 90, min: 30, max: 110, step: 1 },
  ] },
  { slug: "java-dynamic-fov", name: "Java Dynamic FOV", category: "Movement", description: "Java-style FOV easing.", icon: I("magnify.png"), settings: [] },
  { slug: "minimal-view-bobbing", name: "Minimal View Bobbing", category: "Movement", description: "Reduce view-bob amplitude.", icon: I("eye.png"), settings: [] },
  { slug: "java-view-bobbing", name: "Java View Bobbing", category: "Movement", description: "Java-style view bobbing.", icon: I("eye.png"), settings: [] },
  { slug: "snap-look", name: "SnapLook", category: "Movement", description: "Snap-rotation hotkeys.", icon: I("eye.png"), settings: [] },
  { slug: "raw-input-buffer", name: "Raw Input Buffer", category: "Movement", description: "Lossless aim buffering.", icon: I("cursor.png"), settings: [] },
  { slug: "sens-multiplier", name: "Sens Multiplier", category: "Movement", description: "Per-state sensitivity multipliers.", icon: I("multiplier.png"), settings: [
    { type: "slider", key: "mult", label: "Multiplier", value: 1, min: 0.1, max: 3, step: 0.05, unit: "×" },
  ] },
  { slug: "bow-sensitivity", name: "Bow Sensitivity", category: "Movement", description: "Per-bow sensitivity scaling.", icon: I("bow_sens.png"), settings: [
    { type: "slider", key: "sens", label: "Sensitivity", value: 60, min: 10, max: 200, step: 1, unit: "%" },
  ] },

  /* ── HUD ──────────────────────────────────────────────────────── */
  { slug: "keystrokes", name: "Keystrokes", category: "HUD", description: "WASD + LMB / RMB display.", icon: I("keystrokes.png"), defaultEnabled: true, settings: [
    { type: "slider", key: "scale", label: "Scale", value: 100, min: 50, max: 200, step: 5, unit: "%" },
    { type: "toggle", key: "showCps", label: "Show CPS", value: true },
  ] },
  { slug: "mousestrokes", name: "Mouse Strokes", category: "HUD", description: "Mouse-button activity HUD.", icon: I("cursor.png"), settings: [] },
  { slug: "armor-hud", name: "ArmorHUD", category: "HUD", description: "Armor pieces with durability bars.", icon: I("chestplate.png"), defaultEnabled: true, settings: [
    { type: "dropdown", key: "orientation", label: "Orientation", value: "Horizontal", options: ["Horizontal", "Vertical"] },
  ] },
  { slug: "coordinates", name: "Coordinates", category: "HUD", description: "X / Y / Z readout.", icon: I("coordinates.png"), defaultEnabled: true, settings: [
    { type: "toggle", key: "biome", label: "Show Biome", value: false },
  ] },
  { slug: "cps", name: "CPS", category: "HUD", description: "Clicks-per-second display.", icon: I("cursor.png"), settings: [
    { type: "dropdown", key: "buttons", label: "Buttons", value: "Both", options: ["Left", "Right", "Both"] },
  ] },
  { slug: "combo-counter", name: "Combo Counter", category: "HUD", description: "Counts uninterrupted hit streaks.", icon: I("combo.png"), settings: [] },
  { slug: "totem-counter", name: "Totem Counter", category: "HUD", description: "Totem pops tracked per session.", icon: I("totem.png"), settings: [] },
  { slug: "potion-hud", name: "PotionHUD", category: "HUD", description: "Active potions with timers.", icon: I("potion.png"), settings: [] },
  { slug: "fps", name: "FPS", category: "HUD", description: "Frame-time counter, color-coded.", icon: I("fps.png"), settings: [] },
  { slug: "ping-counter", name: "Ping Counter", category: "HUD", description: "Live RTT to the connected server.", icon: I("ping.png"), settings: [] },
  { slug: "memory", name: "Memory", category: "HUD", description: "Resident-memory + GC readout.", icon: I("memory.png"), settings: [] },
  { slug: "tab-list", name: "Tab List", category: "HUD", description: "Java-style tab player list.", icon: I("list.png"), settings: [] },
  { slug: "pack-display", name: "Pack Display", category: "HUD", description: "Active resource pack name + version.", icon: I("arrow.png"), settings: [] },
  { slug: "ip-display", name: "Server IP", category: "HUD", description: "Current server IP, redactable.", icon: I("server-ip.png"), settings: [
    { type: "toggle", key: "redact", label: "Redact in screenshots", value: true },
  ] },
  { slug: "low-health", name: "Low Health", category: "HUD", description: "Edge tint when HP is low.", icon: I("heart.png"), settings: [] },
  { slug: "durability-warning", name: "Durability Warning", category: "HUD", description: "Alert when armor about to break.", icon: I("block_break_indicator.png"), settings: [] },
  { slug: "arrow-counter", name: "Arrow Counter", category: "HUD", description: "Live arrow count.", icon: I("arrow.png"), settings: [] },
  { slug: "item-counter", name: "Item Counter", category: "HUD", description: "Per-slot inventory counters.", icon: I("multiplier.png"), settings: [] },
  { slug: "entity-counter", name: "Entity Counter", category: "HUD", description: "Loaded entities + ticks.", icon: I("creeper.png"), settings: [] },
  { slug: "reach-counter", name: "Reach Counter", category: "HUD", description: "Recent attack-reach values.", icon: I("reach.png"), settings: [] },
  { slug: "direction-hud", name: "DirectionHUD", category: "HUD", description: "Cardinal direction indicator.", icon: I("compass.png"), settings: [] },
  { slug: "inventory-hud", name: "Inventory HUD", category: "HUD", description: "Persistent inventory overlay.", icon: I("chestplate.png"), settings: [] },
  { slug: "paper-doll", name: "Movable Paperdoll", category: "HUD", description: "Mirror your player on screen.", icon: I("man.png"), settings: [] },
  { slug: "hive-stat", name: "Hive Statistics", category: "HUD", description: "Hive ranked stats overlay.", icon: I("hivestats.png"), settings: [] },
  { slug: "stopwatch", name: "Stopwatch", category: "HUD", description: "Pinnable run timer.", icon: I("time.png"), settings: [] },
  { slug: "movable-hud", name: "Movable HUD", category: "HUD", description: "Drag any HUD element freely.", icon: I("movable.png"), settings: [] },
  { slug: "movable-chat", name: "Movable Chat", category: "HUD", description: "Reposition the chat window.", icon: I("movable.png"), settings: [] },
  { slug: "compact-chat", name: "Compact Chat", category: "HUD", description: "Stack duplicate chat lines.", icon: I("compactchat.png"), settings: [] },
  { slug: "subtitles", name: "Subtitles", category: "HUD", description: "Java-style sound subtitles.", icon: I("subtitles.png"), settings: [] },
  { slug: "discord-rpc", name: "Discord RPC", category: "HUD", description: "Discord Rich Presence integration.", icon: I("discord.png"), settings: [] },

  /* ── Render ───────────────────────────────────────────────────── */
  { slug: "motion-blur", name: "Motion Blur", category: "Render", description: "Per-frame motion-blur shader.", icon: I("blur.png"), settings: [
    { type: "slider", key: "strength", label: "Strength", value: 35, min: 0, max: 100, step: 1, unit: "%" },
  ] },
  { slug: "depth-of-field", name: "Depth Of Field", category: "Render", description: "Cinematic focus falloff.", icon: I("dof.png"), settings: [] },
  { slug: "render-options", name: "Render Option", category: "Render", description: "Toggle render features at runtime.", icon: I("renderoptions.png"), settings: [
    { type: "toggle", key: "particles", label: "Particles", value: true },
    { type: "toggle", key: "shadows", label: "Shadows", value: true },
  ] },
  { slug: "cinematic-camera", name: "Cinematic Camera", category: "Render", description: "Smoothed cinematic cam.", icon: I("cinematiccamera.png"), settings: [] },
  { slug: "auto-perspective", name: "Auto Perspective", category: "Render", description: "Auto-switch first/third person.", icon: I("perspective.png"), settings: [] },
  { slug: "mc-gui-scale", name: "MC GUI Scale", category: "Render", description: "Custom GUI scale slider.", icon: I("scale.png"), settings: [
    { type: "slider", key: "scale", label: "Scale", value: 3, min: 1, max: 8, step: 1 },
  ] },
  { slug: "animations", name: "Animations", category: "Render", description: "Per-action animation curves.", icon: I("Animations.png"), settings: [] },
  { slug: "camera-test", name: "Camera Test", category: "Render", description: "Camera test diagnostic.", icon: I("eye.png"), settings: [] },

  /* ── Utility ──────────────────────────────────────────────────── */
  { slug: "auto-gg", name: "Auto GG", category: "Utility", description: "Auto-types 'gg' after a match.", icon: I("autogg.png"), settings: [] },
  { slug: "text-hotkey", name: "Text Hotkey", category: "Utility", description: "Bind chat strings to keys.", icon: I("text-box.png"), settings: [] },
  { slug: "command-hotkey", name: "Command Hotkey", category: "Utility", description: "Bind commands to keys.", icon: I("text-box.png"), settings: [] },
  { slug: "clear-chat", name: "Clear Chat", category: "Utility", description: "One-press chat-clear hotkey.", icon: I("clearbg.png"), settings: [] },
  { slug: "clear-scoreboard", name: "Clear Scoreboard", category: "Utility", description: "Hide scoreboard hotkey.", icon: I("clearbg.png"), settings: [] },
  { slug: "message-logger", name: "Message Logger", category: "Utility", description: "Persistent chat history.", icon: I("compactchat.png"), settings: [
    { type: "slider", key: "limit", label: "Max Messages", value: 500, min: 100, max: 5000, step: 100 },
  ] },
  { slug: "death-logger", name: "Death Logger", category: "Utility", description: "Logs deaths with cause + coords.", icon: I("deathlogger.png"), settings: [] },
  { slug: "item-tracker", name: "Item Tracker", category: "Utility", description: "Counts specific items collected.", icon: I("ItemTracker.png"), settings: [] },
  { slug: "player-notifier", name: "Player Notifier", category: "Utility", description: "Notify on player join / leave.", icon: I("notification.png"), settings: [] },
  { slug: "waypoints", name: "Waypoints", category: "Utility", description: "Saveable world waypoints.", icon: I("waypoints.png"), settings: [] },
  { slug: "minimap", name: "Minimap", category: "Utility", description: "Top-down minimap with markers.", icon: I("compass.png"), settings: [] },
  { slug: "locator-bar", name: "Locator Bar", category: "Utility", description: "Party-member direction bar.", icon: I("compass.png"), settings: [] },
  { slug: "force-coords", name: "Force Coordinates", category: "Utility", description: "Always-on coordinates display.", icon: I("coordinates.png"), settings: [] },
  { slug: "faster-inventory", name: "Faster Inventory", category: "Utility", description: "Faster inventory hot-swap.", icon: I("inventory.png"), settings: [] },
  { slug: "better-inventory", name: "Better Inventory", category: "Utility", description: "Refined inventory UX.", icon: I("inventory.png"), settings: [] },
  { slug: "better-hunger-bar", name: "Better Hunger Bar", category: "Utility", description: "Saturation-aware hunger bar.", icon: I("betterhungerbar.png"), settings: [] },
  { slug: "tnt-timer", name: "TNT Timer", category: "Utility", description: "Live TNT countdown.", icon: I("time.png"), settings: [] },
  { slug: "audio-overlay", name: "Audio Controller", category: "Utility", description: "Sound-event direction overlay.", icon: I("skull.png"), settings: [] },
  { slug: "java-debug", name: "Java Debug Menu", category: "Utility", description: "Java-style F3 debug info.", icon: I("f3.png"), settings: [] },
  { slug: "zeqa-utils", name: "Zeqa Utils", category: "Utility", description: "Zeqa-server tooling.", icon: I("zeqa.png"), settings: [] },
  { slug: "hive-utils", name: "Hive Utils", category: "Utility", description: "Hive-server tooling.", icon: I("hive.png"), settings: [] },
  { slug: "nether-utils", name: "NetherGames Utils", category: "Utility", description: "NetherGames tooling.", icon: I("skull.png"), settings: [] },

  /* ── Misc ─────────────────────────────────────────────────────── */
  { slug: "inventory-lock", name: "Inventory Lock", category: "Misc", description: "Prevents picking up unwanted items.", icon: I("InventoryLock.png"), settings: [] },
  { slug: "weather-changer", name: "Weather Changer", category: "Misc", description: "Local weather override.", icon: I("cloudy.png"), settings: [] },
  { slug: "time-changer", name: "Time Changer", category: "Misc", description: "Local day/night override.", icon: I("time.png"), settings: [] },
  { slug: "twerk", name: "Twerk", category: "Misc", description: "Yes, really.", icon: I("twerk.png"), settings: [] },
  { slug: "doom", name: "Doom", category: "Misc", description: "Play Doom in-client.", icon: I("skull.png"), settings: [] },
  { slug: "modern-handling", name: "Modern Handling", category: "Misc", description: "Modifier-aware bindings.", icon: I("keyboard.png"), settings: [] },
  { slug: "disable-mouse-wheel", name: "Disable Mouse Wheel", category: "Misc", description: "Block scroll on the hotbar.", icon: I("cursor.png"), settings: [] },
  { slug: "item-physics", name: "Item Physics", category: "Misc", description: "Per-item physics tweaks.", icon: I("item-physics.png"), settings: [] },
  { slug: "item-use-delay-fix", name: "Item Use Delay Fix", category: "Misc", description: "Removes item-use cooldown.", icon: I("nametag.png"), settings: [] },
  { slug: "inventory-offhand-hotkey", name: "Inventory Offhand Hotkey", category: "Misc", description: "Hotkey for offhand swap.", icon: I("totem.png"), settings: [] },
  { slug: "nick", name: "Nick", category: "Misc", description: "Custom client-side name.", icon: I("icognito.png"), settings: [] },
  { slug: "waila", name: "Waila", category: "Misc", description: "What-Am-I-Looking-At tooltips.", icon: I("waila.png"), settings: [] },
  { slug: "mumble-link", name: "Mumble Link", category: "Misc", description: "Mumble positional audio link.", icon: I("mumble.png"), settings: [] },
  { slug: "twenty", name: "202020", category: "Misc", description: "20-20-20 eye-strain reminder.", icon: I("eye.png"), settings: [] },
  { slug: "patarhd", name: "PatarHD", category: "Misc", description: "patarHD overlay.", icon: I("skull.png"), settings: [] },
  { slug: "dvd-screen", name: "DVD Screen", category: "Misc", description: "DVD-screen idle bounce.", icon: I("skull.png"), settings: [] },
  { slug: "lewis", name: "Lewis", category: "Misc", description: "It's lewis.", icon: I("skull.png"), settings: [] },
  { slug: "female-gender", name: "Female Gender Mod", category: "Misc", description: "Cosmetic gender tweak.", icon: I("chestplate.png"), settings: [] },
  { slug: "meds", name: "Meds", category: "Misc", description: "Time-of-day reminder.", icon: I("time.png"), settings: [] },
];

export const CATEGORIES: ModuleCategory[] = [
  "Combat",
  "Visual",
  "Movement",
  "HUD",
  "Render",
  "Utility",
  "Misc",
];

export function modulesByCategory(category: ModuleCategory) {
  return MODULES.filter((m) => m.category === category);
}

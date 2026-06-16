import { androidModuleDetails } from "../android-module-details";
import { dllCssModuleDetails, type DllCssModuleCategory } from "../dll-css-module-details";

export { dllCssModuleDetails };

export const restrictThreePayload = `{
  "server_name": "Example Server",
  "notification_message": "This feature is disabled on this server.",
  "flarial_client_modules": {
    "module.freelook.name": {
      "block": true,
      "restriction_reason": "Freelook is disabled on this server."
    },
    "module.full_bright.name": {
      "block": true,
      "restriction_reason": "Fullbright is disabled on this server."
    },
    "module.crystal_optimizer.name": {
      "block": true,
      "restriction_reason": "Crystal Optimizer is disabled on this server."
    }
  }
}`;

export const restrictOnePayload = `{
  "server_name": "Example Server",
  "notification_message": "Disabled by this server.",
  "flarial_client_modules": {
    "module.zoom.name": { "block": true }
  }
}`;

export const clearPayload = `{
  "server_name": "Example Server",
  "flarial_client_modules": {}
}`;

export const scriptingExample = `name = "Auto GG Lite"
description = "Sends a quick GG when a win message appears."

enabled = settings.addToggle("Enabled", "Allow the script to send GG.", true)

onEvent("ChatReceiveEvent", function(message, playerName, type)
    if not enabled.value then return end

    if message == "won the game" then
        player.say("gg")
    end
end)`;

export const configExample = `{
  "ClickGUI": {
    "enabled": false,
    "keybind": "K",
    "favorite": false
  },
  "Coordinates": {
    "enabled": true,
    "percentageX": 0.012,
    "percentageY": 0.84,
    "textCol": "fafafa",
    "textOpacity": 1.0,
    "showBg": true
  },
  "Zoom": {
    "enabled": false,
    "keybind": "C",
    "modifier": 30.0
  }
}`;

export const privateConfigExample = `{
  "currentConfig": "default.json",
  "fontname": "Space Grotesk",
  "blurintensity": 2.0,
  "vsync": false,
  "killdx": false,
  "dotcmdprefix": ".",
  "enabledModulesOnTop": true,
  "watermark": true
}`;

export const nametagIcons = [
  {
    name: "Red",
    role: "Default",
    color: "Everyone",
    accent: "#ff233a",
    image: "/flarial-icons/red-logo.png",
    details: "Given to all Flarial users by default.",
    href: undefined,
  },
  {
    name: "Purple",
    role: "Gamer",
    color: "Community",
    accent: "#b55cff",
    image: "/flarial-icons/gamer-logo.png",
    details: "Given to close friends and family of the core Flarial team, plus people considered relevant in the MCBE, mostly modding, community. Repeatedly asking for Gamer may result in being permanently blacklisted from it.",
    href: undefined,
  },
  {
    name: "Light Pink",
    role: "Booster",
    color: "Discord boost",
    accent: "#ff9cc9",
    image: "/flarial-icons/booster-logo.png",
    details: "Given to everyone who boosts the Flarial Discord server. Run /claimrole in cmds after boosting. The logo lasts for the duration of the boost.",
    href: undefined,
  },
  {
    name: "Dark Pink",
    role: "Supporter",
    color: "Flarial+",
    accent: "#ff3d91",
    image: "/flarial-icons/supporter-logo.png",
    details: "Given to people who donate to Flarial. Link Discord to Ko-fi, then run /claimrole in cmds. The command is case sensitive, so capital letters, spaces, and spelling matter.",
    href: "https://ko-fi.com/flarialmc",
  },
  {
    name: "Green",
    role: "Media",
    color: "Creator",
    accent: "#59e77b",
    image: "/flarial-icons/media-logo.png",
    details: "Given to people whose social media channels contain content promoting Flarial. Create a ticket in the Discord server to apply for the Media role.",
    href: undefined,
  },
  {
    name: "Gold",
    role: "Partner",
    color: "Official partner",
    accent: "#ffd166",
    image: "/flarial-icons/partner-logo.png",
    details: "Given to official Flarial partners, such as partnered servers, creators, or communities. Create a ticket in the Discord server to apply for partnership.",
    href: undefined,
  },
  {
    name: "White",
    role: "Support and General Staff",
    color: "Staff",
    accent: "#ffffff",
    image: "/flarial-icons/white-logo.png",
    details: "Given to Flarial support members and general staff. They can be recognized by staff roles on Discord.",
    href: undefined,
  },
  {
    name: "Blue",
    role: "Developer",
    color: "Developer team",
    accent: "#32d7ff",
    image: "/flarial-icons/cyan-logo.png",
    details: "Given to members of the Flarial developer team. They can be recognized with the Team role on Discord.",
    href: undefined,
  },
] as const;

export const blockableModules = [
  ["Motion Blur", "module.motion_blur.name"],
  ["Deepfry", "module.deepfry.name"],
  ["Saturation", "module.saturation.name"],
  ["PatarHD", "module.patarhd.name"],
  ["DVD Screen", "module.dvd_screen.name"],
  ["FOV Changer", "module.fov_changer.name"],
  ["Zoom", "module.zoom.name"],
  ["Upside Down", "module.upside_down.name"],
  ["ClickGUI", "module.clickgui.name"],
  ["Meds", "module.meds.name"],
  ["FPS", "module.fps.name"],
  ["CPS", "module.cps.name"],
  ["IP Display", "module.ip_display.name"],
  ["Reach Counter", "module.reach_counter.name"],
  ["Combo", "module.combo.name"],
  ["Ping Counter", "module.ping_counter.name"],
  ["Pot Counter", "module.pot_counter.name"],
  ["Arrow Counter", "module.arrow_counter.name"],
  ["Item Tracker", "module.item_tracker.name"],
  ["Entity Counter", "module.entity_counter.name"],
  ["Clock", "module.clock.name"],
  ["Memory", "module.memory.name"],
  ["Fullbright", "module.fullbright.name"],
  ["Keystrokes", "module.keystrokes.name"],
  ["Toggle Sneak", "module.toggle_sneak.name"],
  ["Toggle Sprint", "module.toggle_sprint.name"],
  ["Hitbox", "module.hitbox.name"],
  ["Hurt Color", "module.hurt_color.name"],
  ["Block Hit", "module.block_hit.name"],
  ["Fire Height", "module.fire_height.name"],
  ["Better Inventory", "module.better_inventory.name"],
  ["Dynamic Lighting", "module.dynamic_lighting.name"],
  ["Nametag", "module.nametag.name"],
  ["Java Dynamic FOV", "module.java_dynamic_fov.name"],
  ["SnapLook", "module.snaplook.name"],
  ["Fog Color", "module.fog_color.name"],
  ["ArmorHUD", "module.armorhud.name"],
  ["Time Changer", "module.time_changer.name"],
  ["Movable Paperdoll", "module.movable_paperdoll.name"],
  ["MC GUI Scale", "module.mc_gui_scale.name"],
  ["Render Option", "module.render_option.name"],
  ["Glint Color", "module.glint_color.name"],
  ["Item Physics", "module.item_physics.name"],
  ["Tab List", "module.tab_list.name"],
  ["Weather Changer", "module.weather_changer.name"],
  ["Nick", "module.nick.name"],
  ["FreeLook", "module.freelook.name"],
  ["Auto Perspective", "module.auto_perspective.name"],
  ["Auto GG", "module.auto_gg.name"],
  ["Text Hotkey", "module.text_hotkey.name"],
  ["Speed Display", "module.speed_display.name"],
  ["CPS Limiter", "module.cps_limiter.name"],
  ["Break Progress", "module.break_progress.name"],
  ["Animations", "module.animations.name"],
  ["Block Outline", "module.block_outline.name"],
  ["Command Hotkey", "module.command_hotkey.name"],
  ["No Hurt Cam", "module.no_hurt_cam.name"],
  ["Inventory HUD", "module.inventory_hud.name"],
  ["Hive Utils", "module.hive_utils.name"],
  ["Hit Ping", "module.hit_ping.name"],
  ["Opponent Reach", "module.opponent_reach.name"],
  ["View Model", "module.view_model.name"],
  ["Faster Inventory", "module.faster_inventory.name"],
  ["PotionHUD", "module.potionhud.name"],
  ["Movable Scoreboard", "module.movable_scoreboard.name"],
  ["Movable Title", "module.movable_title.name"],
  ["Movable Bossbar", "module.movable_bossbar.name"],
  ["Movable Chat", "module.movable_chat.name"],
  ["Clear Scoreboard", "module.clear_scoreboard.name"],
  ["Clear Chat", "module.clear_chat.name"],
  ["Movable Coordinates", "module.movable_coordinates.name"],
  ["Movable Hotbar", "module.movable_hotbar.name"],
  ["Movable Day Counter", "module.movable_day_counter.name"],
  ["Mouse Strokes", "module.mouse_strokes.name"],
  ["Java Hotkeys Fix", "module.java_hotkeys_fix.name"],
  ["Inventory Offhand Hotkey", "module.inventory_offhand_hotkey.name"],
  ["Hive Statistics", "module.hive_statistics.name"],
  ["Waypoints", "module.waypoints.name"],
  ["Null Movement", "module.null_movement.name"],
  ["Modern Handling", "module.modern_handling.name"],
  ["Custom Crosshair", "module.custom_crosshair.name"],
  ["Waila", "module.waila.name"],
  ["Skin Stealer", "module.skin_stealer.name"],
  ["Raw Input Buffer", "module.raw_input_buffer.name"],
  ["Low Health", "module.low_health.name"],
  ["Player Notifier", "module.player_notifier.name"],
  ["Zeqa Utils", "module.zeqa_utils.name"],
  ["Mumble Link", "module.mumble_link.name"],
  ["Shader Loader", "module.shader_loader.name"],
  ["Minimal View Bobbing", "module.minimal_view_bobbing.name"],
  ["Lewis", "module.lewis.name"],
  ["Coordinates", "module.coordinates.name"],
  ["Experience Info", "module.experience_info.name"],
  ["Disable Mouse Wheel", "module.disable_mouse_wheel.name"],
  ["Java Debug Menu", "module.java_debug_menu.name"],
  ["DirectionHUD", "module.directionhud.name"],
  ["Locator Bar", "module.locator_bar.name"],
  ["Java View Bobbing", "module.java_view_bobbing.name"],
  ["Death Logger", "module.death_logger.name"],
  ["Twerk", "module.twerk.name"],
  ["Cinematic Camera", "module.cinematic_camera.name"],
  ["Chunk Border", "module.chunk_border.name"],
  ["Compact Chat", "module.compact_chat.name"],
  ["Message Logger", "module.message_logger.name"],
  ["Totem Counter", "module.totem_counter.name"],
  ["Item Counter", "module.item_counter.name"],
  ["Delux Overlay", "module.delux_overlay.name"],
  ["Better Hunger Bar", "module.better_hunger_bar.name"],
  ["Particle Multiplier", "module.particle_multiplier.name"],
  ["Bow Sensitivity", "module.bow_sensitivity.name"],
  ["Subtitles", "module.subtitles.name"],
  ["Sens Multiplier", "module.sens_multiplier.name"],
  ["Stopwatch", "module.stopwatch.name"],
  ["Depth Of Field", "module.depth_of_field.name"],
  ["Crystal Optimizer", "module.crystal_optimizer.name"],
  ["TNT Timer", "module.tnt_timer.name"],
  ["Inventory Lock", "module.inventory_lock.name"],
  ["Audio Controller", "module.audio_controller.name"],
  ["Pitch Display", "module.pitch_display.name"],
  ["Durability Warning", "module.durability_warning.name"],
  ["Camera Test", "module.camera_test.name"],
  ["Notebot", "module.notebot.name"],
  ["Minimap", "module.minimap.name"],
  ["Doom", "module.doom.name"],
  ["Discord RPC", "module.discord_rpc.name"],
] as const;

export const flow = [
  "PacketHooks hooks inbound ScriptMessagePacket receive callbacks.",
  "The packet is wrapped in PacketEvent and dispatched through eventMgr.",
  "ServerModuleControlListener accepts only the flarial_client_event:restrict_features header.",
  "The JSON payload resolves module names through display names, aliases, and manual aliases.",
  "Matching modules receive Module::applyServerRestriction and are disabled by ModuleManager::syncState.",
  "Restrictions are cleared on Disconnect, Transfer, StartGame, or by sending an empty restriction set.",
];

export const serverImplementationNotes = [
  "Send the packet with the exact message id: flarial_client_event:restrict_features.",
  "Keep payloads small; avoid resending the same policy every tick.",
  "Send valid JSON only. If you generate payloads dynamically, validate them before sending.",
  "Use documented module keys or aliases instead of copying UI labels from the client.",
  "Re-send or clear restrictions when players switch servers, worlds, or sessions.",
  "To clear all restrictions, send an empty module list or object for the same header.",
];


const categoryOrder: DllCssModuleCategory[] = ["Combat", "Movement", "HUD", "Render", "Utility", "Misc"];

export const dllCssModulesByCategory = categoryOrder
  .map((category) => ({
    category,
    modules: dllCssModuleDetails
      .filter((module) => module.category === category)
      .sort((a, b) => a.name.localeCompare(b.name)),
  }))
  .filter((group) => group.modules.length > 0);

export const androidModulesByCategory = categoryOrder
  .map((category) => ({
    category,
    modules: androidModuleDetails
      .filter((module) => module.category === category)
      .sort((a, b) => a.name.localeCompare(b.name)),
  }))
  .filter((group) => group.modules.length > 0);


export function blockableAliases(token: string, name: string) {
  const base = token.replace(/^module\./, "").replace(/\.name$/, "");
  const aliases = [base, token, base.replaceAll("_", ""), name.toLowerCase().replaceAll(" ", "_")];

  if (base === "fullbright") aliases.push("full_bright");
  if (base === "freelook") aliases.push("free_look");
  if (base === "java_hotkeys_fix") aliases.push("java_hotkeys", "module.java_hotkeys.name");

  return Array.from(new Set(aliases));
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BookOpen, FileCode2, ListChecks, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Docs",
  description: "Flarial developer and integration documentation.",
  alternates: { canonical: "/docs" },
  openGraph: {
    title: "Flarial Docs",
    description: "Developer and integration documentation for Flarial.",
    type: "article",
  },
};

const restrictThreePayload = `{
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

const restrictOnePayload = `{
  "server_name": "Example Server",
  "notification_message": "Disabled by this server.",
  "flarial_client_modules": {
    "module.zoom.name": { "block": true }
  }
}`;

const clearPayload = `{
  "server_name": "Example Server",
  "flarial_client_modules": {}
}`;

const blockableModules = [
  {"name": "Motion Blur", "token": "module.motion_blur.name", "aliases": ["motion_blur", "module.motion_blur.name", "motionblur"]},
  {"name": "Deepfry", "token": "module.deepfry.name", "aliases": ["deepfry", "module.deepfry.name"]},
  {"name": "Saturation", "token": "module.saturation.name", "aliases": ["saturation", "module.saturation.name"]},
  {"name": "PatarHD", "token": "module.patarhd.name", "aliases": ["patarhd", "module.patarhd.name"]},
  {"name": "DVD Screen", "token": "module.dvd_screen.name", "aliases": ["dvd_screen", "module.dvd_screen.name", "dvdscreen"]},
  {"name": "FOV Changer", "token": "module.fov_changer.name", "aliases": ["fov_changer", "module.fov_changer.name", "fovchanger"]},
  {"name": "Zoom", "token": "module.zoom.name", "aliases": ["zoom", "module.zoom.name"]},
  {"name": "Upside Down", "token": "module.upside_down.name", "aliases": ["upside_down", "module.upside_down.name", "upsidedown"]},
  {"name": "ClickGUI", "token": "module.clickgui.name", "aliases": ["clickgui", "module.clickgui.name"]},
  {"name": "Meds", "token": "module.meds.name", "aliases": ["meds", "module.meds.name"]},
  {"name": "FPS", "token": "module.fps.name", "aliases": ["fps", "module.fps.name"]},
  {"name": "CPS", "token": "module.cps.name", "aliases": ["cps", "module.cps.name"]},
  {"name": "IP Display", "token": "module.ip_display.name", "aliases": ["ip_display", "module.ip_display.name", "ipdisplay"]},
  {"name": "Reach Counter", "token": "module.reach_counter.name", "aliases": ["reach_counter", "module.reach_counter.name", "reachcounter"]},
  {"name": "Combo", "token": "module.combo.name", "aliases": ["combo", "module.combo.name"]},
  {"name": "Ping Counter", "token": "module.ping_counter.name", "aliases": ["ping_counter", "module.ping_counter.name", "pingcounter"]},
  {"name": "Pot Counter", "token": "module.pot_counter.name", "aliases": ["pot_counter", "module.pot_counter.name", "potcounter"]},
  {"name": "Arrow Counter", "token": "module.arrow_counter.name", "aliases": ["arrow_counter", "module.arrow_counter.name", "arrowcounter"]},
  {"name": "Item Tracker", "token": "module.item_tracker.name", "aliases": ["item_tracker", "module.item_tracker.name", "itemtracker"]},
  {"name": "Entity Counter", "token": "module.entity_counter.name", "aliases": ["entity_counter", "module.entity_counter.name", "entitycounter"]},
  {"name": "Clock", "token": "module.clock.name", "aliases": ["clock", "module.clock.name"]},
  {"name": "Memory", "token": "module.memory.name", "aliases": ["memory", "module.memory.name"]},
  {"name": "Fullbright", "token": "module.fullbright.name", "aliases": ["fullbright", "module.fullbright.name", "full_bright"]},
  {"name": "Keystrokes", "token": "module.keystrokes.name", "aliases": ["keystrokes", "module.keystrokes.name"]},
  {"name": "Toggle Sneak", "token": "module.toggle_sneak.name", "aliases": ["toggle_sneak", "module.toggle_sneak.name", "togglesneak"]},
  {"name": "Toggle Sprint", "token": "module.toggle_sprint.name", "aliases": ["toggle_sprint", "module.toggle_sprint.name", "togglesprint"]},
  {"name": "Hitbox", "token": "module.hitbox.name", "aliases": ["hitbox", "module.hitbox.name", "hitboxes"]},
  {"name": "Hurt Color", "token": "module.hurt_color.name", "aliases": ["hurt_color", "module.hurt_color.name", "hurtcolor"]},
  {"name": "Block Hit", "token": "module.block_hit.name", "aliases": ["block_hit", "module.block_hit.name", "blockhit"]},
  {"name": "Fire Height", "token": "module.fire_height.name", "aliases": ["fire_height", "module.fire_height.name", "fireheight"]},
  {"name": "Better Inventory", "token": "module.better_inventory.name", "aliases": ["better_inventory", "module.better_inventory.name", "betterinventory"]},
  {"name": "Dynamic Lighting", "token": "module.dynamic_lighting.name", "aliases": ["dynamic_lighting", "module.dynamic_lighting.name", "dynamiclighting"]},
  {"name": "Nametag", "token": "module.nametag.name", "aliases": ["nametag", "module.nametag.name"]},
  {"name": "Java Dynamic FOV", "token": "module.java_dynamic_fov.name", "aliases": ["java_dynamic_fov", "module.java_dynamic_fov.name", "javadynamicfov"]},
  {"name": "SnapLook", "token": "module.snaplook.name", "aliases": ["snaplook", "module.snaplook.name"]},
  {"name": "Fog Color", "token": "module.fog_color.name", "aliases": ["fog_color", "module.fog_color.name", "fogcolor"]},
  {"name": "ArmorHUD", "token": "module.armorhud.name", "aliases": ["armorhud", "module.armorhud.name"]},
  {"name": "Time Changer", "token": "module.time_changer.name", "aliases": ["time_changer", "module.time_changer.name", "timechanger"]},
  {"name": "Movable Paperdoll", "token": "module.movable_paperdoll.name", "aliases": ["movable_paperdoll", "module.movable_paperdoll.name", "movablepaperdoll"]},
  {"name": "MC GUI Scale", "token": "module.mc_gui_scale.name", "aliases": ["mc_gui_scale", "module.mc_gui_scale.name", "mcguiscale"]},
  {"name": "Render Option", "token": "module.render_option.name", "aliases": ["render_option", "module.render_option.name", "renderoption"]},
  {"name": "Glint Color", "token": "module.glint_color.name", "aliases": ["glint_color", "module.glint_color.name", "glintcolor"]},
  {"name": "Item Physics", "token": "module.item_physics.name", "aliases": ["item_physics", "module.item_physics.name", "itemphysics"]},
  {"name": "Tab List", "token": "module.tab_list.name", "aliases": ["tab_list", "module.tab_list.name", "tablist"]},
  {"name": "Weather Changer", "token": "module.weather_changer.name", "aliases": ["weather_changer", "module.weather_changer.name", "weatherchanger"]},
  {"name": "Nick", "token": "module.nick.name", "aliases": ["nick", "module.nick.name"]},
  {"name": "FreeLook", "token": "module.freelook.name", "aliases": ["freelook", "module.freelook.name", "free_look"]},
  {"name": "Auto Perspective", "token": "module.auto_perspective.name", "aliases": ["auto_perspective", "module.auto_perspective.name", "autoperspective"]},
  {"name": "Auto GG", "token": "module.auto_gg.name", "aliases": ["auto_gg", "module.auto_gg.name", "autogg"]},
  {"name": "Text Hotkey", "token": "module.text_hotkey.name", "aliases": ["text_hotkey", "module.text_hotkey.name", "texthotkey"]},
  {"name": "Speed Display", "token": "module.speed_display.name", "aliases": ["speed_display", "module.speed_display.name", "speeddisplay"]},
  {"name": "CPS Limiter", "token": "module.cps_limiter.name", "aliases": ["cps_limiter", "module.cps_limiter.name", "cpslimiter"]},
  {"name": "Break Progress", "token": "module.break_progress.name", "aliases": ["break_progress", "module.break_progress.name", "breakprogress"]},
  {"name": "Animations", "token": "module.animations.name", "aliases": ["animations", "module.animations.name"]},
  {"name": "Block Outline", "token": "module.block_outline.name", "aliases": ["block_outline", "module.block_outline.name", "blockoutline"]},
  {"name": "Command Hotkey", "token": "module.command_hotkey.name", "aliases": ["command_hotkey", "module.command_hotkey.name", "commandhotkey"]},
  {"name": "No Hurt Cam", "token": "module.no_hurt_cam.name", "aliases": ["no_hurt_cam", "module.no_hurt_cam.name", "nohurtcam"]},
  {"name": "Inventory HUD", "token": "module.inventory_hud.name", "aliases": ["inventory_hud", "module.inventory_hud.name", "inventoryhud"]},
  {"name": "Hive Utils", "token": "module.hive_utils.name", "aliases": ["hive_utils", "module.hive_utils.name", "hiveutils"]},
  {"name": "Hit Ping", "token": "module.hit_ping.name", "aliases": ["hit_ping", "module.hit_ping.name", "hitping"]},
  {"name": "Opponent Reach", "token": "module.opponent_reach.name", "aliases": ["opponent_reach", "module.opponent_reach.name", "opponentreach"]},
  {"name": "View Model", "token": "module.view_model.name", "aliases": ["view_model", "module.view_model.name", "viewmodel"]},
  {"name": "Faster Inventory", "token": "module.faster_inventory.name", "aliases": ["faster_inventory", "module.faster_inventory.name", "fasterinventory"]},
  {"name": "PotionHUD", "token": "module.potionhud.name", "aliases": ["potionhud", "module.potionhud.name"]},
  {"name": "Movable Scoreboard", "token": "module.movable_scoreboard.name", "aliases": ["movable_scoreboard", "module.movable_scoreboard.name", "movablescoreboard"]},
  {"name": "Movable Title", "token": "module.movable_title.name", "aliases": ["movable_title", "module.movable_title.name", "movabletitle"]},
  {"name": "Movable Bossbar", "token": "module.movable_bossbar.name", "aliases": ["movable_bossbar", "module.movable_bossbar.name", "movablebossbar"]},
  {"name": "Movable Chat", "token": "module.movable_chat.name", "aliases": ["movable_chat", "module.movable_chat.name", "movablechat"]},
  {"name": "Clear Scoreboard", "token": "module.clear_scoreboard.name", "aliases": ["clear_scoreboard", "module.clear_scoreboard.name", "clearscoreboard"]},
  {"name": "Clear Chat", "token": "module.clear_chat.name", "aliases": ["clear_chat", "module.clear_chat.name", "clearchat"]},
  {"name": "Movable Coordinates", "token": "module.movable_coordinates.name", "aliases": ["movable_coordinates", "module.movable_coordinates.name", "movablecoordinates"]},
  {"name": "Movable Hotbar", "token": "module.movable_hotbar.name", "aliases": ["movable_hotbar", "module.movable_hotbar.name", "movablehotbar"]},
  {"name": "Movable Day Counter", "token": "module.movable_day_counter.name", "aliases": ["movable_day_counter", "module.movable_day_counter.name", "movabledaycounter"]},
  {"name": "Mouse Strokes", "token": "module.mouse_strokes.name", "aliases": ["mouse_strokes", "module.mouse_strokes.name", "mousestrokes"]},
  {"name": "Java Hotkeys Fix", "token": "module.java_hotkeys_fix.name", "aliases": ["java_hotkeys_fix", "module.java_hotkeys_fix.name", "javahotkeysfix", "java_hotkeys", "module.java_hotkeys.name"]},
  {"name": "Inventory Offhand Hotkey", "token": "module.inventory_offhand_hotkey.name", "aliases": ["inventory_offhand_hotkey", "module.inventory_offhand_hotkey.name", "inventoryoffhandhotkey"]},
  {"name": "Hive Statistics", "token": "module.hive_statistics.name", "aliases": ["hive_statistics", "module.hive_statistics.name", "hivestatistics"]},
  {"name": "Waypoints", "token": "module.waypoints.name", "aliases": ["waypoints", "module.waypoints.name"]},
  {"name": "Null Movement", "token": "module.null_movement.name", "aliases": ["null_movement", "module.null_movement.name", "nullmovement"]},
  {"name": "Modern Handling", "token": "module.modern_handling.name", "aliases": ["modern_handling", "module.modern_handling.name", "modernhandling"]},
  {"name": "Custom Crosshair", "token": "module.custom_crosshair.name", "aliases": ["custom_crosshair", "module.custom_crosshair.name", "customcrosshair"]},
  {"name": "Waila", "token": "module.waila.name", "aliases": ["waila", "module.waila.name"]},
  {"name": "Skin Stealer", "token": "module.skin_stealer.name", "aliases": ["skin_stealer", "module.skin_stealer.name", "skinstealer"]},
  {"name": "Raw Input Buffer", "token": "module.raw_input_buffer.name", "aliases": ["raw_input_buffer", "module.raw_input_buffer.name", "rawinputbuffer"]},
  {"name": "Low Health", "token": "module.low_health.name", "aliases": ["low_health", "module.low_health.name", "lowhealth"]},
  {"name": "Player Notifier", "token": "module.player_notifier.name", "aliases": ["player_notifier", "module.player_notifier.name", "playernotifier"]},
  {"name": "Zeqa Utils", "token": "module.zeqa_utils.name", "aliases": ["zeqa_utils", "module.zeqa_utils.name", "zeqautils"]},
  {"name": "Mumble Link", "token": "module.mumble_link.name", "aliases": ["mumble_link", "module.mumble_link.name", "mumblelink"]},
  {"name": "Shader Loader", "token": "module.shader_loader.name", "aliases": ["shader_loader", "module.shader_loader.name", "shaderloader"]},
  {"name": "Minimal View Bobbing", "token": "module.minimal_view_bobbing.name", "aliases": ["minimal_view_bobbing", "module.minimal_view_bobbing.name", "minimalviewbobbing"]},
  {"name": "Lewis", "token": "module.lewis.name", "aliases": ["lewis", "module.lewis.name"]},
  {"name": "Coordinates", "token": "module.coordinates.name", "aliases": ["coordinates", "module.coordinates.name"]},
  {"name": "Experience Info", "token": "module.experience_info.name", "aliases": ["experience_info", "module.experience_info.name", "experienceinfo"]},
  {"name": "Disable Mouse Wheel", "token": "module.disable_mouse_wheel.name", "aliases": ["disable_mouse_wheel", "module.disable_mouse_wheel.name", "disablemousewheel"]},
  {"name": "Java Debug Menu", "token": "module.java_debug_menu.name", "aliases": ["java_debug_menu", "module.java_debug_menu.name", "javadebugmenu"]},
  {"name": "DirectionHUD", "token": "module.directionhud.name", "aliases": ["directionhud", "module.directionhud.name"]},
  {"name": "Locator Bar", "token": "module.locator_bar.name", "aliases": ["locator_bar", "module.locator_bar.name", "locatorbar"]},
  {"name": "Java View Bobbing", "token": "module.java_view_bobbing.name", "aliases": ["java_view_bobbing", "module.java_view_bobbing.name", "javaviewbobbing"]},
  {"name": "Death Logger", "token": "module.death_logger.name", "aliases": ["death_logger", "module.death_logger.name", "deathlogger"]},
  {"name": "Twerk", "token": "module.twerk.name", "aliases": ["twerk", "module.twerk.name"]},
  {"name": "Cinematic Camera", "token": "module.cinematic_camera.name", "aliases": ["cinematic_camera", "module.cinematic_camera.name", "cinematiccamera"]},
  {"name": "Chunk Border", "token": "module.chunk_border.name", "aliases": ["chunk_border", "module.chunk_border.name", "chunkborder"]},
  {"name": "Compact Chat", "token": "module.compact_chat.name", "aliases": ["compact_chat", "module.compact_chat.name", "compactchat"]},
  {"name": "Message Logger", "token": "module.message_logger.name", "aliases": ["message_logger", "module.message_logger.name", "messagelogger"]},
  {"name": "Totem Counter", "token": "module.totem_counter.name", "aliases": ["totem_counter", "module.totem_counter.name", "totemcounter"]},
  {"name": "Item Counter", "token": "module.item_counter.name", "aliases": ["item_counter", "module.item_counter.name", "itemcounter"]},
  {"name": "Delux Overlay", "token": "module.delux_overlay.name", "aliases": ["delux_overlay", "module.delux_overlay.name", "deluxoverlay"]},
  {"name": "Better Hunger Bar", "token": "module.better_hunger_bar.name", "aliases": ["better_hunger_bar", "module.better_hunger_bar.name", "betterhungerbar"]},
  {"name": "Particle Multiplier", "token": "module.particle_multiplier.name", "aliases": ["particle_multiplier", "module.particle_multiplier.name", "particlemultiplier"]},
  {"name": "Bow Sensitivity", "token": "module.bow_sensitivity.name", "aliases": ["bow_sensitivity", "module.bow_sensitivity.name", "bowsensitivity"]},
  {"name": "Subtitles", "token": "module.subtitles.name", "aliases": ["subtitles", "module.subtitles.name"]},
  {"name": "Sens Multiplier", "token": "module.sens_multiplier.name", "aliases": ["sens_multiplier", "module.sens_multiplier.name", "sensmultiplier"]},
  {"name": "Stopwatch", "token": "module.stopwatch.name", "aliases": ["stopwatch", "module.stopwatch.name"]},
  {"name": "Depth Of Field", "token": "module.depth_of_field.name", "aliases": ["depth_of_field", "module.depth_of_field.name", "depthoffield"]},
  {"name": "Crystal Optimizer", "token": "module.crystal_optimizer.name", "aliases": ["crystal_optimizer", "module.crystal_optimizer.name", "crystaloptimizer"]},
  {"name": "TNT Timer", "token": "module.tnt_timer.name", "aliases": ["tnt_timer", "module.tnt_timer.name", "tnttimer"]},
  {"name": "Inventory Lock", "token": "module.inventory_lock.name", "aliases": ["inventory_lock", "module.inventory_lock.name", "inventorylock"]},
  {"name": "Audio Controller", "token": "module.audio_controller.name", "aliases": ["audio_controller", "module.audio_controller.name", "audiocontroller"]},
  {"name": "Pitch Display", "token": "module.pitch_display.name", "aliases": ["pitch_display", "module.pitch_display.name", "pitchdisplay"]},
  {"name": "Durability Warning", "token": "module.durability_warning.name", "aliases": ["durability_warning", "module.durability_warning.name", "durabilitywarning"]},
  {"name": "Camera Test", "token": "module.camera_test.name", "aliases": ["camera_test", "module.camera_test.name", "cameratest"]},
  {"name": "Notebot", "token": "module.notebot.name", "aliases": ["notebot", "module.notebot.name"]},
  {"name": "Minimap", "token": "module.minimap.name", "aliases": ["minimap", "module.minimap.name"]},
  {"name": "Doom", "token": "module.doom.name", "aliases": ["doom", "module.doom.name"]},
  {"name": "Discord RPC", "token": "module.discord_rpc.name", "aliases": ["discord_rpc", "module.discord_rpc.name", "discordrpc"]},
] as const;


const flow = [
  "PacketHooks hooks inbound ScriptMessagePacket receive callbacks.",
  "The packet is wrapped in PacketEvent and dispatched through eventMgr.",
  "ServerModuleControlListener accepts only the flarial_client_event:restrict_features header.",
  "The JSON payload resolves module names through display names, aliases, and manual aliases.",
  "Matching modules receive Module::applyServerRestriction and are disabled by ModuleManager::syncState.",
  "Restrictions are cleared on Disconnect, Transfer, StartGame, or by sending an empty restriction set.",
];

const serverImplementationNotes = [
  "Send the packet with the exact message id: flarial_client_event:restrict_features.",
  "Keep payloads small; avoid resending the same policy every tick.",
  "Send valid JSON only. If you generate payloads dynamically, validate them before sending.",
  "Use documented module keys/aliases instead of copying UI labels from the client.",
  "Re-send or clear restrictions when players switch servers, worlds, or sessions.",
  "To clear all restrictions, send an empty module list/object for the same header.",
];

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-[var(--radius-xl)] border border-white/[0.06] bg-black/35 p-4 text-[12px] leading-relaxed text-[var(--color-text)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <code>{children}</code>
    </pre>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 min-w-0 rounded-[var(--radius-2xl)] p-5 sm:p-7" style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
        {eyebrow}
      </div>
      <h2 className="mt-2 font-display text-[26px] sm:text-[34px] font-semibold tracking-[-0.02em] text-white">
        {title}
      </h2>
      <div className="mt-5 min-w-0 space-y-4 text-[14px] sm:text-[15px] leading-relaxed text-[var(--color-text-mute)]">
        {children}
      </div>
    </section>
  );
}

export default function DocsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl min-w-0 px-4 sm:px-6 py-12 sm:py-16">
      <header className="mb-10 grid gap-6 lg:grid-cols-[1fr_320px] lg:items-end">
        <div>
          <h1 className="font-display text-[44px] sm:text-[68px] leading-[0.95] font-semibold tracking-[-0.03em] text-white">
            Packet-based module blocking.
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] sm:text-[16px] leading-relaxed text-[var(--color-text-mute)]">
            Server-driven feature restrictions for Flarial. Use this when a server needs to block modules without shipping a new client-side hardcoded IP check.
          </p>
        </div>

        <aside className="rounded-[var(--radius-2xl)] p-4" style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
          <div className="flex items-center gap-2 text-white font-display font-semibold">
            <BookOpen size={17} className="text-[var(--color-accent)]" />
            In this article
          </div>
          <nav className="mt-4 grid gap-2 text-[13px] text-[var(--color-text-mute)]">
            <a href="#overview" className="hover:text-white">Overview</a>
            <a href="#packet-format" className="hover:text-white">Packet format</a>
            <a href="#examples" className="hover:text-white">Examples</a>
            <a href="#blockable-modules" className="hover:text-white">Blockable modules</a>
            <a href="#client-behavior" className="hover:text-white">Client behavior</a>
            <a href="#safety" className="hover:text-white">Server implementation notes</a>
          </nav>
        </aside>
      </header>

      <div className="grid grid-cols-1 gap-5">
        <Section id="overview" eyebrow="01" title="How it works">
          <p>
            Flarial listens for an inbound Bedrock <code className="text-white">ScriptMessagePacket</code>. If the packet has the expected Flarial header, the client parses the JSON payload and applies temporary server restrictions to matching modules.
          </p>
          <ol className="grid grid-cols-1 gap-2">
            {flow.map((item, index) => (
              <li key={item} className="flex gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--color-accent)] text-[11px] font-bold text-white">
                  {index + 1}
                </span>
                <span className="min-w-0 flex-1">{item}</span>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="packet-format" eyebrow="02" title="Packet format">
          <p>
            Send a <code className="text-white">ScriptMessagePacket</code> with this exact message id:
          </p>
          <CodeBlock>{"flarial_client_event:restrict_features"}</CodeBlock>
          <p>
            The message body is a JSON object. Each entry under <code className="text-white">flarial_client_modules</code> describes one blocked module.
          </p>
          <CodeBlock>{restrictThreePayload}</CodeBlock>
        </Section>

        <Section id="examples" eyebrow="03" title="Examples">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="min-w-0 space-y-3">
              <h3 className="font-display text-[18px] font-semibold text-white">Block one module</h3>
              <CodeBlock>{restrictOnePayload}</CodeBlock>
            </div>
            <div className="min-w-0 space-y-3">
              <h3 className="font-display text-[18px] font-semibold text-white">Clear packet restrictions</h3>
              <CodeBlock>{clearPayload}</CodeBlock>
            </div>
          </div>
          <p>
            Any payload replaces the current packet-driven restriction set. Sending an empty <code className="text-white">flarial_client_modules</code> object clears existing packet restrictions.
          </p>
        </Section>

        <Section id="blockable-modules" eyebrow="04" title="Every blockable module">
          <p>
            This list is synced from the <code className="text-white">dll-css</code> module registry on <code className="text-white">origin/main</code>. Any registered module can be blocked because the listener resolves against <code className="text-white">ModuleManager::moduleMap</code>.
          </p>
          <div className="flex items-center gap-2 rounded-[var(--radius-xl)] bg-black/25 p-4 text-white">
            <ListChecks size={17} className="text-[var(--color-accent)]" />
            <span className="font-display font-semibold">{blockableModules.length} blockable module keys</span>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-white/[0.06]">
            <div className="hidden sm:grid grid-cols-[minmax(140px,0.8fr)_minmax(180px,1.1fr)_minmax(180px,1fr)] gap-3 bg-black/35 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-mute)]">
              <span>Module</span>
              <span>Recommended key</span>
              <span>Accepted aliases</span>
            </div>
            <div className="divide-y divide-white/[0.05]">
              {blockableModules.map((module) => (
                <div key={module.name} className="grid gap-2 px-4 py-3 text-[13px] sm:grid-cols-[minmax(140px,0.8fr)_minmax(180px,1.1fr)_minmax(180px,1fr)] sm:gap-3">
                  <span className="font-display font-semibold text-white">{module.name}</span>
                  <code className="break-all text-[var(--color-accent-hi)]">{module.token}</code>
                  <span className="break-words text-[var(--color-text-mute)]">{module.aliases.join(", ")}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="client-behavior" eyebrow="05" title="Client behavior">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="min-w-0 rounded-[var(--radius-xl)] bg-black/25 p-4">
              <div className="mb-2 flex items-center gap-2 font-display font-semibold text-white">
                <ShieldCheck size={16} className="text-[var(--color-accent)]" />
                When blocked
              </div>
              <p>The module is marked server-restricted, disabled if currently active, and cannot be toggled back on while the restriction is active.</p>
            </div>
            <div className="min-w-0 rounded-[var(--radius-xl)] bg-black/25 p-4">
              <div className="mb-2 flex items-center gap-2 font-display font-semibold text-white">
                <FileCode2 size={16} className="text-[var(--color-accent)]" />
                When cleared
              </div>
              <p>Restrictions clear on disconnect, transfer, start-game, or when a replacement payload omits/clears a module. If the module was previously enabled in settings, it can be queued to re-enable.</p>
            </div>
          </div>
        </Section>

        <Section id="safety" eyebrow="06" title="Server implementation notes">
          <ul className="grid grid-cols-1 gap-2">
            {serverImplementationNotes.map((note) => (
              <li key={note} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                <span className="min-w-0 flex-1">{note}</span>
              </li>
            ))}
          </ul>
          <p>
            Packet-based restrictions are the preferred way to define server policy. They let server owners update restrictions without waiting for hardcoded client-side server checks or a new client release.
          </p>
        </Section>
      </div>
    </div>
  );
}

export type DllCssModuleCategory = "Combat" | "HUD" | "Misc" | "Movement" | "Render" | "Utility";

export type DllCssModuleDetail = {
  name: string;
  description: string;
  iconResource: string;
  icon: string;
  settingsCount: number;
  category: DllCssModuleCategory;
  source: string;
};

export const dllCssModuleDetails = [
  {
    "name": "Block Hit",
    "description": "Sword Blocking Animation like Java (visual only)",
    "iconResource": "IDR_SWORD_PNG",
    "icon": "/mod-icons/sword.png",
    "settingsCount": 0,
    "category": "Combat",
    "source": "BlockHit"
  },
  {
    "name": "Bow Sensitivity",
    "description": "Lowers sensitivity when aiming with a bow",
    "iconResource": "IDR_BOWSENS_PNG",
    "icon": "/mod-icons/bow_sens.png",
    "settingsCount": 4,
    "category": "Combat",
    "source": "BowSensitivity"
  },
  {
    "name": "CPS Limiter",
    "description": "Limit how many clicks you can register per second.",
    "iconResource": "IDR_STOP_PNG",
    "icon": "/mod-icons/stop.png",
    "settingsCount": 3,
    "category": "Combat",
    "source": "CPSLimiter"
  },
  {
    "name": "Crystal Optimizer",
    "description": "Instantly removes end crystals client-side on attack for faster crystal PvP.",
    "iconResource": "IDR_SKULL_PNG",
    "icon": "/mod-icons/skull.png",
    "settingsCount": 0,
    "category": "Combat",
    "source": "CrystalOptimizer"
  },
  {
    "name": "Durability Warning",
    "description": "Notifies you when a tool reaches low durability.",
    "iconResource": "IDR_BLOCK_BREAK_INDICATOR_PNG",
    "icon": "/mod-icons/block_break_indicator.png",
    "settingsCount": 1,
    "category": "Combat",
    "source": "DurabilityWarning"
  },
  {
    "name": "Hit Ping",
    "description": "Measures your hit delay!",
    "iconResource": "IDR_PING_PNG",
    "icon": "/mod-icons/ping.png",
    "settingsCount": 29,
    "category": "Combat",
    "source": "HitPing"
  },
  {
    "name": "Hitbox",
    "description": "Displays hitboxes of entities",
    "iconResource": "IDR_BLOCK_PNG",
    "icon": "/mod-icons/block.png",
    "settingsCount": 14,
    "category": "Combat",
    "source": "Hitbox"
  },
  {
    "name": "Hurt Color",
    "description": "Change the color when you hit entities.",
    "iconResource": "IDR_HURT_PNG",
    "icon": "/mod-icons/hurt.png",
    "settingsCount": 1,
    "category": "Combat",
    "source": "HurtColor"
  },
  {
    "name": "No Hurt Cam",
    "description": "Disables hurt camera animation",
    "iconResource": "IDR_REACH_PNG",
    "icon": "/mod-icons/reach.png",
    "settingsCount": 0,
    "category": "Combat",
    "source": "NoHurtCam"
  },
  {
    "name": "Opponent Reach",
    "description": "Shows your opponent's last hit range!",
    "iconResource": "IDR_REACH_PNG",
    "icon": "/mod-icons/reach.png",
    "settingsCount": 30,
    "category": "Combat",
    "source": "OpponentReach"
  },
  {
    "name": "Reach Counter",
    "description": "Displays your last hit range in blocks.",
    "iconResource": "IDR_REACH_PNG",
    "icon": "/mod-icons/reach.png",
    "settingsCount": 29,
    "category": "Combat",
    "source": "ReachCounter"
  },
  {
    "name": "ArmorHUD",
    "description": "Displays the armor you're currently wearing.",
    "iconResource": "IDR_CHESTPLATE_PNG",
    "icon": "/mod-icons/chestplate.png",
    "settingsCount": 32,
    "category": "HUD",
    "source": "ArmorHUD"
  },
  {
    "name": "Arrow Counter",
    "description": "Counts how many arrows you have in your inventory.",
    "iconResource": "IDR_ARROW_PNG",
    "icon": "/mod-icons/arrow.png",
    "settingsCount": 30,
    "category": "HUD",
    "source": "ArrowCounter"
  },
  {
    "name": "Audio Controller",
    "description": "Allows you to control the currently playing audio in Windows.",
    "iconResource": "IDR_SKULL_PNG",
    "icon": "/mod-icons/skull.png",
    "settingsCount": 32,
    "category": "HUD",
    "source": "AudioOverlay"
  },
  {
    "name": "Better Hunger Bar",
    "description": "Adds a hunger and saturation overlay similar to AppleSkin.",
    "iconResource": "IDR_BETTERHUNGERBAR_PNG",
    "icon": "/mod-icons/betterhungerbar.png",
    "settingsCount": 9,
    "category": "HUD",
    "source": "BetterHungerBar"
  },
  {
    "name": "Better Inventory",
    "description": "Enhanced inventory tooltips with shulker previews, durability info, and more!",
    "iconResource": "IDR_INVENTORY_PNG",
    "icon": "/mod-icons/inventory.png",
    "settingsCount": 0,
    "category": "HUD",
    "source": "BetterInventory"
  },
  {
    "name": "Break Progress",
    "description": "Visual indicator to show the progress of breaking a block.",
    "iconResource": "IDR_BLOCK_BREAK_INDICATOR_PNG",
    "icon": "/mod-icons/block_break_indicator.png",
    "settingsCount": 35,
    "category": "HUD",
    "source": "BlockBreakIndicator"
  },
  {
    "name": "Clear Chat",
    "description": "Clears the chat's background",
    "iconResource": "IDR_CLEARBG_PNG",
    "icon": "/mod-icons/clearbg.png",
    "settingsCount": 0,
    "category": "HUD",
    "source": "ClearChat"
  },
  {
    "name": "Clear Scoreboard",
    "description": "Clears the scoreboard from the screen.",
    "iconResource": "IDR_CLEARBG_PNG",
    "icon": "/mod-icons/clearbg.png",
    "settingsCount": 0,
    "category": "HUD",
    "source": "ClearScoreboard"
  },
  {
    "name": "Clock",
    "description": "Displays your current local or ingame time.",
    "iconResource": "IDR_TIME_PNG",
    "icon": "/mod-icons/time.png",
    "settingsCount": 35,
    "category": "HUD",
    "source": "Time"
  },
  {
    "name": "Combo",
    "description": "Keeps track of consecutive hits.",
    "iconResource": "IDR_COMBO_PNG",
    "icon": "/mod-icons/combo.png",
    "settingsCount": 30,
    "category": "HUD",
    "source": "ComboCounter"
  },
  {
    "name": "Compact Chat",
    "description": "Stacks duplicate messages in chat.",
    "iconResource": "IDR_COMPACTCHAT_PNG",
    "icon": "/mod-icons/compactchat.png",
    "settingsCount": 5,
    "category": "HUD",
    "source": "CompactChat"
  },
  {
    "name": "Coordinates",
    "description": "Shows your XYZ position in game.",
    "iconResource": "IDR_COORDINATES_PNG",
    "icon": "/mod-icons/coordinates.png",
    "settingsCount": 42,
    "category": "HUD",
    "source": "Coordinates"
  },
  {
    "name": "CPS",
    "description": "Counts your Clicks per second.",
    "iconResource": "IDR_CURSOR_PNG",
    "icon": "/mod-icons/cursor.png",
    "settingsCount": 30,
    "category": "HUD",
    "source": "CPS"
  },
  {
    "name": "Death Logger",
    "description": "Logs your coordinates in chat on death.",
    "iconResource": "IDR_DEATHLOGGER_PNG",
    "icon": "/mod-icons/deathlogger.png",
    "settingsCount": 3,
    "category": "HUD",
    "source": "DeathLogger"
  },
  {
    "name": "Delux Overlay",
    "description": "Displays real-time game statistics from Delux Club API.",
    "iconResource": "IDR_PING_PNG",
    "icon": "/mod-icons/ping.png",
    "settingsCount": 31,
    "category": "HUD",
    "source": "InGameOverlay"
  },
  {
    "name": "DirectionHUD",
    "description": "Shows a compass showing your direction",
    "iconResource": "IDR_COMPASS_PNG",
    "icon": "/mod-icons/compass.png",
    "settingsCount": 48,
    "category": "HUD",
    "source": "DirectionHUD"
  },
  {
    "name": "Discord RPC",
    "description": "Customizable Discord Rich Presence display.",
    "iconResource": "IDR_DISCORD_PNG",
    "icon": "/mod-icons/discord-white.png",
    "settingsCount": 3,
    "category": "HUD",
    "source": "Misc/DiscordRPC"
  },
  {
    "name": "DVD Screen",
    "description": "Overlays the DVD Screensaver",
    "iconResource": "IDR_SKULL_PNG",
    "icon": "/mod-icons/skull.png",
    "settingsCount": 3,
    "category": "HUD",
    "source": "DVD Screen"
  },
  {
    "name": "Entity Counter",
    "description": "Counts the entities in the surrounding area",
    "iconResource": "IDR_ENTITYCOUNTER_PNG",
    "icon": "/mod-icons/nametag.png",
    "settingsCount": 29,
    "category": "HUD",
    "source": "EntityCounter"
  },
  {
    "name": "Experience Info",
    "description": "Displays detailed XP information including level, progress, and XP counts.",
    "iconResource": "IDR_LIKE_PNG",
    "icon": "/mod-icons/like.png",
    "settingsCount": 32,
    "category": "HUD",
    "source": "ExperienceInfo"
  },
  {
    "name": "Faster Inventory",
    "description": "Makes inventory opening ping-independent",
    "iconResource": "IDR_INVENTORY_PNG",
    "icon": "/mod-icons/inventory.png",
    "settingsCount": 0,
    "category": "HUD",
    "source": "FasterInventory"
  },
  {
    "name": "FPS",
    "description": "Shows how much Frames Per Second (FPS) your device is rendering.",
    "iconResource": "IDR_FPS_PNG",
    "icon": "/mod-icons/fps.png",
    "settingsCount": 31,
    "category": "HUD",
    "source": "FPS"
  },
  {
    "name": "Hive Statistics",
    "description": "Show players statistics in game",
    "iconResource": "IDR_HIVE_STATS_PNG",
    "icon": "/mod-icons/hivestats.png",
    "settingsCount": 146,
    "category": "HUD",
    "source": "HiveStat"
  },
  {
    "name": "Inventory HUD",
    "description": "Displays your inventory on your HUD",
    "iconResource": "IDR_CHESTPLATE_PNG",
    "icon": "/mod-icons/chestplate.png",
    "settingsCount": 26,
    "category": "HUD",
    "source": "InventoryHUD"
  },
  {
    "name": "IP Display",
    "description": "Displays the current server IP you're playing on.",
    "iconResource": "IDR_SERVER_IP_PNG",
    "icon": "/mod-icons/server-ip.png",
    "settingsCount": 30,
    "category": "HUD",
    "source": "IPDisplay"
  },
  {
    "name": "Item Counter",
    "description": "Item Counter",
    "iconResource": "IDR_MULTIPLIER_PNG",
    "icon": "/mod-icons/multiplier.png",
    "settingsCount": 35,
    "category": "HUD",
    "source": "ItemCounter"
  },
  {
    "name": "Java Debug Menu",
    "description": "Displays Java-style debug information. Similar to F3 menu in Minecraft Java Edition.",
    "iconResource": "IDR_F3_PNG",
    "icon": "/mod-icons/f3.png",
    "settingsCount": 36,
    "category": "HUD",
    "source": "DebugMenu"
  },
  {
    "name": "JavaInventoryHotkeys",
    "description": "No description provided in module constructor.",
    "iconResource": "IDR_KEYBOARD_PNG",
    "icon": "/mod-icons/keyboard.png",
    "settingsCount": 0,
    "category": "HUD",
    "source": "JavaInventoryHotkeys"
  },
  {
    "name": "Keystrokes",
    "description": "Displays real-time information about your WASD and mouse inputs.",
    "iconResource": "IDR_KEYSTROKES_PNG",
    "icon": "/mod-icons/keystrokes.png",
    "settingsCount": 46,
    "category": "HUD",
    "source": "Keystrokes"
  },
  {
    "name": "Locator Bar",
    "description": "Enhances the vanilla locator bar with player head icons.",
    "iconResource": "IDR_COMPASS_PNG",
    "icon": "/mod-icons/compass.png",
    "settingsCount": 0,
    "category": "HUD",
    "source": "LocatorBar"
  },
  {
    "name": "Memory",
    "description": "Shows your current system RAM usage.",
    "iconResource": "IDR_MEMORY_PNG",
    "icon": "/mod-icons/memory.png",
    "settingsCount": 29,
    "category": "HUD",
    "source": "Memory"
  },
  {
    "name": "Message Logger",
    "description": "Saves chat messages into a file.",
    "iconResource": "IDR_COMPACTCHAT_PNG",
    "icon": "/mod-icons/compactchat.png",
    "settingsCount": 2,
    "category": "HUD",
    "source": "MessageLogger"
  },
  {
    "name": "Movable Chat",
    "description": "Ability to move the chat.",
    "iconResource": "IDR_MOVABLE_PNG",
    "icon": "/mod-icons/movable.png",
    "settingsCount": 3,
    "category": "HUD",
    "source": "MovableChat"
  },
  {
    "name": "MovableBossbar",
    "description": "Makes the Minecraft \" + mname + \" movable.",
    "iconResource": "IDR_MOVABLE_PNG",
    "icon": "/mod-icons/movable.png",
    "settingsCount": 0,
    "category": "HUD",
    "source": "MovableBossbar"
  },
  {
    "name": "MovableCoordinates",
    "description": "Makes the Minecraft \" + mname + \" movable.",
    "iconResource": "IDR_MOVABLE_PNG",
    "icon": "/mod-icons/movable.png",
    "settingsCount": 0,
    "category": "HUD",
    "source": "MovableCoordinates"
  },
  {
    "name": "MovableDayCounter",
    "description": "Makes the Minecraft \" + mname + \" movable.",
    "iconResource": "IDR_MOVABLE_PNG",
    "icon": "/mod-icons/movable.png",
    "settingsCount": 0,
    "category": "HUD",
    "source": "MovableDayCounter"
  },
  {
    "name": "MovableScoreboard",
    "description": "Makes the Minecraft \" + mname + \" movable.",
    "iconResource": "IDR_MOVABLE_PNG",
    "icon": "/mod-icons/movable.png",
    "settingsCount": 0,
    "category": "HUD",
    "source": "MovableScoreboard"
  },
  {
    "name": "MovableTitle",
    "description": "Makes the Minecraft \" + mname + \" movable.",
    "iconResource": "IDR_MOVABLE_PNG",
    "icon": "/mod-icons/movable.png",
    "settingsCount": 0,
    "category": "HUD",
    "source": "MovableTitle"
  },
  {
    "name": "Mumble Link",
    "description": "Use proximity chat in Flarial with the help of Mumble",
    "iconResource": "IDR_MUMBLE_PNG",
    "icon": "/mod-icons/mumble.png",
    "settingsCount": 1,
    "category": "HUD",
    "source": "MumbleLink"
  },
  {
    "name": "Nick",
    "description": "Hides your username and replace it with something else. Works everywhere (chat, pause, third person, etc) Other people will not be able to see your nick.",
    "iconResource": "IDR_ICOGNITO_PNG",
    "icon": "/mod-icons/icognito.png",
    "settingsCount": 5,
    "category": "HUD",
    "source": "Nick"
  },
  {
    "name": "Particle Multiplier",
    "description": "Particles go brrrrr",
    "iconResource": "IDR_MULTIPLIER_PNG",
    "icon": "/mod-icons/multiplier.png",
    "settingsCount": 0,
    "category": "HUD",
    "source": "ParticleMultiplier"
  },
  {
    "name": "Ping Counter",
    "description": "Displays your current latency to the server.",
    "iconResource": "IDR_PING_PNG",
    "icon": "/mod-icons/ping.png",
    "settingsCount": 32,
    "category": "HUD",
    "source": "PingCounter"
  },
  {
    "name": "Pitch Display",
    "description": "Shows your pitch.",
    "iconResource": "IDR_SKULL_PNG",
    "icon": "/mod-icons/skull.png",
    "settingsCount": 30,
    "category": "HUD",
    "source": "PitchDisplay"
  },
  {
    "name": "Pot Counter",
    "description": "Counts how much potions are in your inventory.",
    "iconResource": "IDR_POTION_PNG",
    "icon": "/mod-icons/potion.png",
    "settingsCount": 29,
    "category": "HUD",
    "source": "PotCounter"
  },
  {
    "name": "PotionHUD",
    "description": "Displays your potion effects",
    "iconResource": "IDR_POTION_PNG",
    "icon": "/mod-icons/potion.png",
    "settingsCount": 15,
    "category": "HUD",
    "source": "PotionHUD"
  },
  {
    "name": "Speed Display",
    "description": "Displays your current travel speed in blocks/second.",
    "iconResource": "IDR_SPEED_PNG",
    "icon": "/mod-icons/speed.png",
    "settingsCount": 29,
    "category": "HUD",
    "source": "SpeedDisplay"
  },
  {
    "name": "Tab List",
    "description": "Java-like tab list. Lists the current online players on the server.",
    "iconResource": "IDR_LIST_PNG",
    "icon": "/mod-icons/list.png",
    "settingsCount": 30,
    "category": "HUD",
    "source": "TabList"
  },
  {
    "name": "Text Hotkey",
    "description": "Send something in chat with a click of a button!",
    "iconResource": "IDR_TEXT_BOX_PNG",
    "icon": "/mod-icons/text-box.png",
    "settingsCount": 0,
    "category": "HUD",
    "source": "TextHotkey"
  },
  {
    "name": "Totem Counter",
    "description": "Counts how many totems you have in your inventory.",
    "iconResource": "IDR_TOTEM_PNG",
    "icon": "/mod-icons/totem.png",
    "settingsCount": 30,
    "category": "HUD",
    "source": "TotemCounter"
  },
  {
    "name": "Waila",
    "description": "Shows what you are looking at.",
    "iconResource": "IDR_WAILA_PNG",
    "icon": "/mod-icons/waila.png",
    "settingsCount": 31,
    "category": "HUD",
    "source": "Waila"
  },
  {
    "name": "Chunk Border",
    "description": "Chunk Border",
    "iconResource": "IDR_CHUNKBORDER_PNG",
    "icon": "/mod-icons/chunkborder.png",
    "settingsCount": 6,
    "category": "Misc",
    "source": "ChunkBorder"
  },
  {
    "name": "Deepfry",
    "description": "Theres only one way to find out.",
    "iconResource": "IDR_FRYING_PAN_PNG",
    "icon": "/mod-icons/frying-pan.png",
    "settingsCount": 1,
    "category": "Misc",
    "source": "Deepfry"
  },
  {
    "name": "Item Physics",
    "description": "Changes rotation behavior of dropped items",
    "iconResource": "IDR_ITEM_PHYSICS_PNG",
    "icon": "/mod-icons/item-physics.png",
    "settingsCount": 0,
    "category": "Misc",
    "source": "ItemPhysics"
  },
  {
    "name": "Lewis",
    "description": "Lewis, king of Hippos. (Brought to you by the one and only, Oblitqrated)",
    "iconResource": "IDR_SKULL_PNG",
    "icon": "/mod-icons/skull.png",
    "settingsCount": 7,
    "category": "Misc",
    "source": "Lewis"
  },
  {
    "name": "Low Health",
    "description": "Warns you when you are at low health.",
    "iconResource": "IDR_HEART_PNG",
    "icon": "/mod-icons/heart.png",
    "settingsCount": 3,
    "category": "Misc",
    "source": "LowHealthIndicator"
  },
  {
    "name": "Meds",
    "description": "Implements the medical 202020 rule into minecraft.",
    "iconResource": "IDR_TIME_PNG",
    "icon": "/mod-icons/time.png",
    "settingsCount": 1,
    "category": "Misc",
    "source": "202020"
  },
  {
    "name": "Movable Paperdoll",
    "description": "Makes the Minecraft paperdoll movable.",
    "iconResource": "IDR_MAN_PNG",
    "icon": "/mod-icons/man.png",
    "settingsCount": 2,
    "category": "Misc",
    "source": "PaperDoll"
  },
  {
    "name": "MovableHotbar",
    "description": "Makes the Minecraft \" + mname + \" movable.",
    "iconResource": "IDR_MOVABLE_PNG",
    "icon": "/mod-icons/movable.png",
    "settingsCount": 0,
    "category": "Misc",
    "source": "MovableHotbar"
  },
  {
    "name": "PatarHD",
    "description": "At this Point it should be called Staff Mod",
    "iconResource": "IDR_SKULL_PNG",
    "icon": "/mod-icons/skull.png",
    "settingsCount": 5,
    "category": "Misc",
    "source": "PatarHD"
  },
  {
    "name": "Saturation",
    "description": "A filter to saturate or desaturate Minecraft.",
    "iconResource": "IDR_FULLBRIGHT_PNG",
    "icon": "/mod-icons/fullbright.png",
    "settingsCount": 1,
    "category": "Misc",
    "source": "HueChanger"
  },
  {
    "name": "Skin Stealer",
    "description": "Equip someone else's skin",
    "iconResource": "IDR_SKINSTEALER_PNG",
    "icon": "/mod-icons/SkinStealer.png",
    "settingsCount": 1,
    "category": "Misc",
    "source": "SkinStealer"
  },
  {
    "name": "Stopwatch",
    "description": "stopwatch",
    "iconResource": "IDR_TIME_PNG",
    "icon": "/mod-icons/time.png",
    "settingsCount": 35,
    "category": "Misc",
    "source": "Stopwatch"
  },
  {
    "name": "Subtitles",
    "description": "Adds Audio Subtitles.",
    "iconResource": "IDR_CAPTIONS_PNG",
    "icon": "/mod-icons/captions.png",
    "settingsCount": 0,
    "category": "Misc",
    "source": "Subtitles"
  },
  {
    "name": "Twerk",
    "description": "yeah baby throw it back",
    "iconResource": "IDR_TWERK_PNG",
    "icon": "/mod-icons/twerk.png",
    "settingsCount": 2,
    "category": "Misc",
    "source": "Twerk"
  },
  {
    "name": "Upside Down",
    "description": "No need to flip your monitor!!",
    "iconResource": "IDR_UPSIDE_DOWN_PNG",
    "icon": "/mod-icons/upside-down.png",
    "settingsCount": 0,
    "category": "Misc",
    "source": "UpsideDown"
  },
  {
    "name": "Auto Perspective",
    "description": "Changes your perspective on specific events.",
    "iconResource": "IDR_PERSPECTIVE_PNG",
    "icon": "/mod-icons/perspective.png",
    "settingsCount": 8,
    "category": "Movement",
    "source": "AutoPerspective"
  },
  {
    "name": "Cinematic Camera",
    "description": "Smooth Cinema-like Camera Movement",
    "iconResource": "IDR_CINEMATICCAMERA_PNG",
    "icon": "/mod-icons/cinematiccamera.png",
    "settingsCount": 6,
    "category": "Movement",
    "source": "CinematicCamera"
  },
  {
    "name": "FOV Changer",
    "description": "Change your FOV beyond Minecraft's limits.",
    "iconResource": "IDR_FIELD_OF_VIEW_PNG",
    "icon": "/mod-icons/field-of-view.png",
    "settingsCount": 2,
    "category": "Movement",
    "source": "FOVChanger"
  },
  {
    "name": "FreeLook",
    "description": "Freely move your camera in 3rd person mode while keeping the player rotation the same.",
    "iconResource": "IDR_FREELOOK_PNG",
    "icon": "/mod-icons/freelook.png",
    "settingsCount": 2,
    "category": "Movement",
    "source": "Freelook"
  },
  {
    "name": "Java Dynamic FOV",
    "description": "Enhances dynamic FOV in bedrock.",
    "iconResource": "IDR_MAGNIFY_PNG",
    "icon": "/mod-icons/magnify.png",
    "settingsCount": 2,
    "category": "Movement",
    "source": "JavaDynamicFOV"
  },
  {
    "name": "Java View Bobbing",
    "description": "Makes the view bobbing exactly like Java Edition.",
    "iconResource": "IDR_EYE_PNG",
    "icon": "/mod-icons/eye.png",
    "settingsCount": 2,
    "category": "Movement",
    "source": "JavaViewBobbing"
  },
  {
    "name": "Minimal View Bobbing",
    "description": "Prevent camera shake when view bobbing is on.",
    "iconResource": "IDR_EYE_PNG",
    "icon": "/mod-icons/eye.png",
    "settingsCount": 0,
    "category": "Movement",
    "source": "MinimalViewBobbing"
  },
  {
    "name": "Modern Handling",
    "description": "Fixes the keybind issue where movement doesn't resume after exiting GUI screens while holding keys.",
    "iconResource": "IDR_KEYBOARD_PNG",
    "icon": "/mod-icons/keyboard.png",
    "settingsCount": 6,
    "category": "Movement",
    "source": "ModernKeybindHandling"
  },
  {
    "name": "Mouse Strokes",
    "description": "Visualizes your camera/mouse movement.",
    "iconResource": "IDR_CURSOR_PNG",
    "icon": "/mod-icons/cursor.png",
    "settingsCount": 18,
    "category": "Movement",
    "source": "Mousestrokes"
  },
  {
    "name": "Null Movement",
    "description": "Only registers the latest movement key.",
    "iconResource": "IDR_NULL_PNG",
    "icon": "/mod-icons/null.png",
    "settingsCount": 2,
    "category": "Movement",
    "source": "NullMovement"
  },
  {
    "name": "Raw Input Buffer",
    "description": "Fixes Minecraft's default input delay",
    "iconResource": "IDR_CURSOR_PNG",
    "icon": "/mod-icons/cursor.png",
    "settingsCount": 0,
    "category": "Movement",
    "source": "RawInputBuffer"
  },
  {
    "name": "Sens Multiplier",
    "description": "Multiplies mouse sensitivity",
    "iconResource": "IDR_MULTIPLIER_PNG",
    "icon": "/mod-icons/multiplier.png",
    "settingsCount": 4,
    "category": "Movement",
    "source": "SensMultiplier"
  },
  {
    "name": "SnapLook",
    "description": "Quickly look behind you.",
    "iconResource": "IDR_EYE_PNG",
    "icon": "/mod-icons/eye.png",
    "settingsCount": 2,
    "category": "Movement",
    "source": "SnapLook"
  },
  {
    "name": "Toggle Sneak",
    "description": "No need to hold down your sneak key.",
    "iconResource": "IDR_SLOWLY_PNG",
    "icon": "/mod-icons/slowly.png",
    "settingsCount": 3,
    "category": "Movement",
    "source": "Sneak"
  },
  {
    "name": "Toggle Sprint",
    "description": "Automatically sprints for you!!!",
    "iconResource": "IDR_AUTO_SPRINT_PNG",
    "icon": "/mod-icons/auto_sprint.png",
    "settingsCount": 32,
    "category": "Movement",
    "source": "Sprint"
  },
  {
    "name": "Zoom",
    "description": "Allows you to see distant places.",
    "iconResource": "IDR_MAGNIFY_PNG",
    "icon": "/mod-icons/magnify.png",
    "settingsCount": 17,
    "category": "Movement",
    "source": "Zoom"
  },
  {
    "name": "Animations",
    "description": "Animate your selected slot square while you switch slots.",
    "iconResource": "IDR_ANIMATIONS_PNG",
    "icon": "/mod-icons/Animations.png",
    "settingsCount": 1,
    "category": "Render",
    "source": "Animations"
  },
  {
    "name": "Block Outline",
    "description": "Changes the block outline color",
    "iconResource": "IDR_BLOCK_PNG",
    "icon": "/mod-icons/block.png",
    "settingsCount": 7,
    "category": "Render",
    "source": "BlockOutline"
  },
  {
    "name": "Custom Crosshair",
    "description": "Allows for dynamic crosshair colors.",
    "iconResource": "IDR_CROSSHAIR_PNG",
    "icon": "/mod-icons/crosshair.png",
    "settingsCount": 0,
    "category": "Render",
    "source": "CustomCrosshair"
  },
  {
    "name": "Depth Of Field",
    "description": "No description provided in module constructor.",
    "iconResource": "IDR_DOF_PNG",
    "icon": "/mod-icons/dof.png",
    "settingsCount": 6,
    "category": "Render",
    "source": "DepthOfField"
  },
  {
    "name": "Dynamic Lighting",
    "description": "Held items and entities emit light dynamically. \" \"Torches, lanterns, and burning mobs illuminate nearby blocks in real-time.",
    "iconResource": "IDR_FULLBRIGHT_PNG",
    "icon": "/mod-icons/fullbright.png",
    "settingsCount": 0,
    "category": "Render",
    "source": "DynamicLighting"
  },
  {
    "name": "Fire Height",
    "description": "Make the fire overlay less obtrusive!",
    "iconResource": "IDR_EYE_PNG",
    "icon": "/mod-icons/eye.png",
    "settingsCount": 0,
    "category": "Render",
    "source": "FireHeight"
  },
  {
    "name": "Fog Color",
    "description": "Changes the color of the Minecraft fog.",
    "iconResource": "IDR_SMOKE_PNG",
    "icon": "/mod-icons/smoke.png",
    "settingsCount": 1,
    "category": "Render",
    "source": "FogColor"
  },
  {
    "name": "Fullbright",
    "description": "No need for torches! Provides consistent and constant illumination. Effectively removing darkness and shadows.",
    "iconResource": "IDR_FULLBRIGHT_PNG",
    "icon": "/mod-icons/fullbright.png",
    "settingsCount": 1,
    "category": "Render",
    "source": "Fullbright"
  },
  {
    "name": "Glint Color",
    "description": "Change the glint color of enchanted items.",
    "iconResource": "IDR_SWORD_PNG",
    "icon": "/mod-icons/sword.png",
    "settingsCount": 0,
    "category": "Render",
    "source": "GlintColor"
  },
  {
    "name": "MC GUI Scale",
    "description": "Change your GUI Scale beyond Minecraft's restrictions.",
    "iconResource": "IDR_SCALE_PNG",
    "icon": "/mod-icons/scale.png",
    "settingsCount": 1,
    "category": "Render",
    "source": "GuiScale"
  },
  {
    "name": "Motion Blur",
    "description": "Make fast movements appear smoother and more realistic by blurring the image slightly in the direction of motion.",
    "iconResource": "IDR_BLUR_PNG",
    "icon": "/mod-icons/blur.png",
    "settingsCount": 12,
    "category": "Render",
    "source": "MotionBlur"
  },
  {
    "name": "Nametag",
    "description": "Shows your nametag for you while in 3rd person mode.",
    "iconResource": "IDR_NAMETAG_PNG",
    "icon": "/mod-icons/nametag.png",
    "settingsCount": 2,
    "category": "Render",
    "source": "NametagModifier"
  },
  {
    "name": "Render Option",
    "description": "Change the way how the game is rendered.",
    "iconResource": "IDR_RENDEROPTIONS_PNG",
    "icon": "/mod-icons/renderoptions.png",
    "settingsCount": 9,
    "category": "Render",
    "source": "RenderOptions"
  },
  {
    "name": "Shader Loader",
    "description": "Load Shaders from ResourcePack",
    "iconResource": "IDR_RENDER_DRAGON_PNG",
    "icon": "/mod-icons/renderdragon.png",
    "settingsCount": 0,
    "category": "Render",
    "source": "MaterialBinLoader"
  },
  {
    "name": "Time Changer",
    "description": "Changes the ingame time.",
    "iconResource": "IDR_TIME_PNG",
    "icon": "/mod-icons/time.png",
    "settingsCount": 1,
    "category": "Render",
    "source": "TimeChanger"
  },
  {
    "name": "View Model",
    "description": "Allows you to modify how item in hand looks.",
    "iconResource": "IDR_EYE_PNG",
    "icon": "/mod-icons/eye.png",
    "settingsCount": 12,
    "category": "Render",
    "source": "ViewModel"
  },
  {
    "name": "Weather Changer",
    "description": "Changes the weather ingame.",
    "iconResource": "IDR_CLOUDY_PNG",
    "icon": "/mod-icons/cloudy.png",
    "settingsCount": 5,
    "category": "Render",
    "source": "WeatherChanger"
  },
  {
    "name": "Auto GG",
    "description": "Automatically sends a message when you win a game. Workes on The Hive, Zeqa, CubeCraft, Lifeboat, Galaxite and Mineville.",
    "iconResource": "IDR_LIKE_PNG",
    "icon": "/mod-icons/like.png",
    "settingsCount": 1,
    "category": "Utility",
    "source": "AutoGG"
  },
  {
    "name": "ClickGUI",
    "description": "No description provided in module constructor.",
    "iconResource": "",
    "icon": "/mod-icons/nametag.png",
    "settingsCount": 42,
    "category": "Utility",
    "source": "ClickGUI"
  },
  {
    "name": "Command Hotkey",
    "description": "Send command with a click of a button!",
    "iconResource": "IDR_TEXT_BOX_PNG",
    "icon": "/mod-icons/text-box.png",
    "settingsCount": 1,
    "category": "Utility",
    "source": "CommandHotkey"
  },
  {
    "name": "Disable Mouse Wheel",
    "description": "Prevents you from accidentally scrolling through your hotbar",
    "iconResource": "IDR_CURSOR_PNG",
    "icon": "/mod-icons/cursor.png",
    "settingsCount": 0,
    "category": "Utility",
    "source": "DisableMouseWheel"
  },
  {
    "name": "Hive Utils",
    "description": "Handy utilities for The Hive partnered server",
    "iconResource": "IDR_HIVE_PNG",
    "icon": "/mod-icons/hive.png",
    "settingsCount": 31,
    "category": "Utility",
    "source": "HiveUtils"
  },
  {
    "name": "Inventory Lock",
    "description": "Locks Items from being dropped",
    "iconResource": "IDR_INVENTORYLOCK_PNG",
    "icon": "/mod-icons/InventoryLock.png",
    "settingsCount": 0,
    "category": "Utility",
    "source": "InventoryLock"
  },
  {
    "name": "Inventory Offhand Hotkey",
    "description": "Swaps the hovered inventory item with offhand while an inventory or container screen is open.",
    "iconResource": "IDR_TOTEM_PNG",
    "icon": "/mod-icons/totem.png",
    "settingsCount": 0,
    "category": "Utility",
    "source": "InventoryOffhandHotkey"
  },
  {
    "name": "Item Tracker",
    "description": "Shows Picked/Dropped Items.",
    "iconResource": "IDR_ITEMTRACKER_PNG",
    "icon": "/mod-icons/ItemTracker.png",
    "settingsCount": 39,
    "category": "Utility",
    "source": "ItemTracker"
  },
  {
    "name": "Player Notifier",
    "description": "Notifies you when a player is in the server.",
    "iconResource": "IDR_NOTIFICATION_PNG",
    "icon": "/mod-icons/notification.png",
    "settingsCount": 2,
    "category": "Utility",
    "source": "PlayerNotifier"
  },
  {
    "name": "TNT Timer",
    "description": "Shows a countdown until TNT explodes",
    "iconResource": "IDR_TIME_PNG",
    "icon": "/mod-icons/time.png",
    "settingsCount": 8,
    "category": "Utility",
    "source": "TNTTimer"
  },
  {
    "name": "Waypoints",
    "description": "Allows you to mark points in your world.",
    "iconResource": "IDR_WAYPOINTS_PNG",
    "icon": "/mod-icons/waypoints.png",
    "settingsCount": 22,
    "category": "Utility",
    "source": "Waypoints"
  },
  {
    "name": "Zeqa Utils",
    "description": "Handy utilities for Zeqa",
    "iconResource": "IDR_ZEQA_PNG",
    "icon": "/mod-icons/zeqa.png",
    "settingsCount": 7,
    "category": "Utility",
    "source": "ZeqaUtils"
  }
] as const satisfies readonly DllCssModuleDetail[];

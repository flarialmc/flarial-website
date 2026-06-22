---
title: "FLARIAL UPDATE - Android & PC Client"
date: "2026-06-22"
tag: "Release"
---

## ![Flarial](/flarial-icons/red-logo.png) Android 📱 ##

This Android release pulls in the `new-modules` branch, fixes launcher/update issues, and rebuilds the CDN APK with a higher versionCode so existing installs can update normally.

### New Android modules and ports

- Added FreeLook
- Added AutoSprint
- Added Fullbright
- Added Armor HUD
- Added Inventory HUD
- Added Arrow Counter
- Added Totem Counter
- Added Pot Counter
- Added Direction HUD
- Added Entity Counter
- Added CPS Limiter
- Added Third Person Nametag
- Added Quick Drop
- Added Low Health Indicator
- Added Hardware Stats
- Added Coordinates
- Added Clock
- Added CPS display
- Added FPS display
- Added Ping Counter
- Added IP Display
- Added Reach Counter
- Added Combo Counter
- Added Speed Meter
- Added Durability Warning
- Added Saturation
- Added Motion Blur
- Added Deepfry
- Added DVD Screen
- Added Render Options
- Added Quick Perspective
- Added Perspective
- Added View Model
- Added Custom Crosshair and the crosshair editor
- Added Item Physics
- Added Skin Stealer
- Added Subtitles
- Added Stop Watch
- Added Tab List
- Added Waypoints
- Added Death Logger
- Added Hitbox
- Added Block Outline
- Added Chunk Border
- Added Hive Stats
- Added Hive Utils
- Added Zeqa Utils
- Added Weather Changer
- Added Time Changer
- Added Fog Color
- Added AutoGG
- Added Auto ReQ
- Added Text Hotkey
- Added Command Hotkey
- Added Material Bin Loader
- Added PatarHD cosmetic module
- Added Flarial logo rendering next to nametags
- Added player skin/head support in Tab List

### Android fixes and improvements

- Fixed the CDN APK update path by rebuilding with a higher versionCode
- Added the Android Minecraft loading screen
- Added Minecraft version checks
- Added client version checks and update notifiers
- Added launcher stats telemetry
- Added full-screen Minecraft activity support
- Added beta verification gate
- Added 16 KB page-size support
- Improved ClickGUI module cards, favorites, headers, animated dropdowns, and settings save flow
- Improved Android edit menu behavior
- Improved unsupported Minecraft version prompts
- Improved Android HUD rendering and item display logic
- Improved logo sizing
- Improved shortcut behavior and offline launch behavior
- Improved tab list behavior and keybind activation
- Improved Direction HUD visuals and waypoint markers
- Improved Material Bin Loader docs/behavior
- Preloaded more work in the background while ads are shown
- Fixed Quick Drop behavior
- Fixed Quick Drop shortcut color
- Fixed floating Flarial icon disabling behavior
- Fixed Android shortcuts and debug launch flow
- Fixed config persistence
- Fixed Android Ping/IP Display registration and source handling
- Fixed raw IP fallback behavior to match PC
- Fixed launch crashes when offline or when internet is enabled
- Fixed a crash that could happen when signing in
- Fixed white screen/loading issues
- Fixed tab list issues
- Fixed Realms-related behavior
- Fixed Zoom restore behavior
- Fixed FreeLook toggles and disabled FreeLook on Hive where needed
- Fixed Combo Counter in local worlds and only counts hits when hurt time is valid
- Fixed search bar behavior
- Fixed missing Minecraft title and AutoSprint behavior
- Fixed mouse CPS and wheel scrolling
- Fixed HUD background drawing behind text
- Fixed option controls and normalized rounding
- Fixed controller keybind behavior
- Fixed module icons
- Fixed Weather Changer behavior
- Fixed AutoGG behavior
- Fixed Fog Color behavior
- Reduced launch crash risk around network/internet checks
- Kept the Flarial menu icon hide toggle limited to the in-game HUD screen
- Updated modules for Minecraft 1.26.30/1.26.30.5

## ![Flarial Blurple](/flarial-icons/cyan-logo.png) PC Client 💻 ##

This PC update brings back several latest-version modules, improves HUD editing, and fixes a bunch of ClickGUI/settings issues.

- Added back Dynamic Lighting, Better Inventory, Animations, Movable HUD, Material Bin Loader (Shader Loader), TNT Timer, Compact Chat, MumbleLink, Inventory Lock, Audio Overlay, and Item Counter on latest
- Added edge-drag resizing for resizable HUD modules
- Added HUD editor undo/redo with Ctrl+Z, Ctrl+Y, and Ctrl+Shift+Z
- Added smooth scroll-wheel resizing with a % scale tooltip
- Added better default text labels for HUD modules
- Improved HUD editor dragging, resizing, and snapping behavior
- Improved Item Counter performance/settings handling so it no longer causes lag
- Improved AutoGG behavior

- Fixed HUD elements snapping or shifting after changing GUI scale or restarting
- Fixed sliders sometimes affecting the wrong module settings
- Fixed sliders activating when clicked outside the knob
- Fixed Text Hotkey and Command Hotkey entries not deleting or editing properly
- Fixed Waypoints getting cleared when holding backspace while editing names
- Fixed noPause and FreeLook input issues when alt-tabbing
- Fixed Direction HUD text scaling
- Fixed HUD editor cursor flickering over module bounds
- Fixed modules like Inventory HUD showing while in the ClickGUI main mod menu
- Fixed Audio Controller background sizing and added more customizations
- Fixed multiple race conditions in the client

- Removed support for 1.21

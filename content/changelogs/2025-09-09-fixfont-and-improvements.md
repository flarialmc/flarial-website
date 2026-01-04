---
title: "UPDATE - New Command & Major Improvements"
date: "2025-09-09"
tag: "Client"
---

# UPDATE 📝

## New Command 🆕

### .fixfont
- Using this command will disable the Override Font Weight setting and revert Font Weight back to normal
- ➡️ Fixes most invisible font problems ⬅️

## Improvements and Bug Fixes 🔥

### PotionHUD
- Fixed missing textures for the Instant Damage, Instant Health and Saturation effects
- Fixed effect levels higher than 5 being 1 tier lower than expected
- Added 2 new settings:
  - Use roman numerals
  - Use roman numerals after V: will now use roman numerals across the whole range i.e. 1 - 255 (I - CCLV)

### .bind Command
- Fixed the list in `.bind list` being inaccurate
- Made the module names case insensitive
  - Example: Now you can do `.bind freelook <key(s)>` and `.bind java_debug_menu <key(s)>` instead of `.bind FreeLook <key(s)>` and `.bind Java_Debug_Menu <key(s)>`
  - You still need to replace the spaces with an underscore

## Other Changes 👀

- Significantly improved resize performance, which should make resizing windows much smoother and faster, especially on lower end devices
- Disabled the Render Under UI toggle by default in Motion Blur

Want to submit suggestions? [Suggest here!](https://github.com/flarialmc/dll/issues)

Make sure you're using the beta! Everyone has access!

Please let us know if there are any issues via our [GitHub Issue Tracker](https://github.com/flarialmc/dll/issues) or community support.
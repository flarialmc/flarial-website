---
title: "BETA UPDATE - Audio Controller Module"
date: "2025-11-11"
tag: "Client"
---

# BETA UPDATE 📝

## New Module 🆕

### Audio Controller (Experimental)
Allows you to pause/resume/skip/rewind the currently playing audio in Windows through keybinds.

## Improvements and Bug Fixes 🐛

- Added an option to toggle `Chunk Border` through a keybind
- Added an option to toggle `Hitboxes` through a keybind
- Added an option to toggle `Cinematic Camera` through a keybind

**Note:** You must add a keybind for these features to work.

- Fixed the `.wiki` command
- Fixed cursor being stuck in the `ClickGUI` and `Edit Menu` screens
- Fixed the `Util` lib in Scripting

### GDK Keybind Fix
- Fixed the keybind selector for GDK versions (just one instantaneous click instead of the hold)
- Due to issues caused by GDK, the only way to have sequential keybinds is by using the `.bind` command
- Usage: `.bind <module> <key(s)>` Example: `.bind Hitbox J+M`

**We only support GDK/`1.21.120` and above on Beta.**

Please let us know if there are any issues via our [GitHub Issue Tracker](https://github.com/flarialmc/dll/issues) or community support.

---
title: "MINOR LAUNCHER UPDATE - Injection Fix"
date: "2025-11-06"
tag: "Launcher"
---

# MINOR LAUNCHER UPDATE 🔧

## Bug Fix

- Fixed an issue where the launcher would fail to inject if the game window wasn't the first thing shown
  - If a DLL creates a window before the main window is visible, the launcher would fail to inject
  - The launcher now gracefully falls back to performing an actual process search instead of a window search

Please let us know if there are any issues via our [GitHub Issue Tracker](https://github.com/flarialmc/dll/issues) or community support.

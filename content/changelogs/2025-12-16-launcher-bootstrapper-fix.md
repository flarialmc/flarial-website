---
title: "LAUNCHER HOTFIX - Bootstrapper Fix"
date: "2025-12-16"
tag: "Launcher"
---

# LAUNCHER HOTFIX 🔎

## Bug Fixes

- The launcher will now correctly bootstrap the game when "Bypass PC Bootstrapper" is enabled
  - The launcher was incorrectly requesting the OS to bootstrap the game

## Note

Added a warning when "Bypass PC Bootstrapper" is enabled:

> This option doesn't wait for the game to initialize. At the moment, it launches the game, waits for a window to show, and returns. This initialization logic will be added in the future.

Please let us know if there are any issues via our [GitHub Issue Tracker](https://github.com/flarialmc/dll/issues) or community support.

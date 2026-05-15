---
title: "LAUNCHER UPDATE - GDK Version Switching"
date: "2026-01-09"
tag: "Launcher"
---

# LAUNCHER UPDATE

## Changes

- Reworked launcher initialization code.
  - Errors weren't caught when they occurred — this has been fixed.
- Added support for GDK version switching into the launcher.
  - This feature will be exposed and available once the client (DLL) supports GDK builds properly.
- Added support for unsigned installs of GDK builds.
  - This feature should be used with caution since the launcher expects the game to be installed from the Microsoft Store or Xbox App.
  - To enable, use the command-line argument `--allow-unsigned-installs`.

Please let us know if there are any issues via our [GitHub Issue Tracker](https://github.com/flarialmc/dll/issues) or community support.

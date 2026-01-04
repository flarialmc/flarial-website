---
title: "LAUNCHER UPDATE - Detection Improvements"
date: "2025-11-12"
tag: "Launcher"
---

# LAUNCHER UPDATE 🗒️

## Changes

- Improved how the launcher detects an injected instance of the client
  - This was previously done by "marking" the process
  - Now the launcher attempts to check if the client is actually injected

- The launcher will now use dialog boxes instead of notifications to tell the user about critical information
  - This is meant to provide more verbose information when doing something within the launcher

- If a GDK version of the game is installed:
  - When you click on `[Launch]`, the launcher will auto-default to injecting the beta
  - You will also be warned when you attempt to downgrade from a GDK build to a UWP build via the launcher

Please let us know if there are any issues via our [GitHub Issue Tracker](https://github.com/flarialmc/dll/issues) or community support.

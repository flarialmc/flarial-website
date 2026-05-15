---
title: "LAUNCHER HOTFIX - .NET 4.8 Downgrade & PowerShell Launch Fix"
date: "2026-02-03"
tag: "Launcher"
---

# LAUNCHER HOTFIX UPDATE

## Changes

- Switched from .NET Framework `4.8.1` to .NET Framework `4.8`.
  - This downgrade was done since `4.8.1` needs to be manually installed.
  - Additionally, this framework hotfix provides minor benefits.
- Fixed issues relating to the launcher not launching the game.
  - The launcher was starting `powershell.exe` to launch the game — this was being blocked by various security software.
  - The launcher now directly starts the game via a minimal instance of PowerShell.

Please let us know if there are any issues via our [GitHub Issue Tracker](https://github.com/flarialmc/dll/issues) or community support.

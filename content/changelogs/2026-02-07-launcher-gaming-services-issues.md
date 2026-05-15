---
title: "LAUNCHER ISSUES - Gaming Services & UWP Builds"
date: "2026-02-07"
tag: "Launcher"
---

# LAUNCHER ISSUES

## Launcher crashing at startup

The launcher recently obtained the ability to automatically install `Gaming Services` if not available — required for installing and playing GDK builds of Minecraft.

This is crashing for users who have disabled the `Microsoft Store Install Service`. That service is required to install and update Microsoft Store apps, and disabling it prevents the game from auto-updating to GDK builds.

**Fix:** Open Command Prompt as Administrator and run:

```
sc.exe config InstallService start=demand
```

## Cannot install UWP builds or 1.21.114 and prior versions

This is likely happening due to Microsoft potentially removing UWP builds from their services or an outage occurring. This issue is occurring on the latest version of the launcher as well as versions prior.

Please let us know if there are any issues via our [GitHub Issue Tracker](https://github.com/flarialmc/dll/issues) or community support.

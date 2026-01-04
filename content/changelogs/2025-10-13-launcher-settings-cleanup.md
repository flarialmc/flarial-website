---
title: "LAUNCHER UPDATE - Settings Cleanup & GDK Preparation"
date: "2025-10-13"
tag: "Launcher"
---

# LAUNCHER UPDATE 🚀

## Changes 🗒️

### Removal of the following options from launcher settings:

**"Fix Minecraft Minimizing"**
This option fixes minimization issues related to Minecraft such as disconnecting from multiplayer.

*Reason for removal:*
- There are no benefits to disabling this option
- This feature will now be enabled by default and cannot be disabled

**"Auto Inject"**
This option allowed the launcher to detect when Minecraft is launched and automatically inject Flarial.

*Reason(s) for removal:*
- Lack of usage from the community as well as awareness of what the feature does
- The feature could be reworked to be much better since it was added as a workaround
- The feature was designed to be used alongside 3rd party modification injectors

### Migration Started
- Started migration from the Launcher SDK (Software Development Kit) to Launcher Services
  - This migration doesn't affect how you use the launcher or client
  - This migration is intended to clean up the codebase and prepare for GDK builds of the game

Please let us know if there are any issues via our [GitHub Issue Tracker](https://github.com/flarialmc/dll/issues) or community support.

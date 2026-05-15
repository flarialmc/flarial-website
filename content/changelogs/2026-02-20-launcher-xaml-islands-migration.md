---
title: "LAUNCHER UPDATE - XAML Islands Migration & UWP Removal"
date: "2026-02-20"
tag: "Launcher"
---

# LAUNCHER UPDATE

## Changes

- Migrated from WPF to XAML Islands for the user interface.
  - The launcher now uses XAML Islands for better performance and modern features.
- Reduced the launcher's binary size by making it self-contained.
  - The launcher no longer ships with 3rd-party dependencies.

## Launcher Features Removal

The following features have been removed:

- The launcher no longer can use a local internet proxy.
  - There were no issues about people not being able to connect to Flarial's Services via the launcher.
- The launcher no longer has a DNS-over-HTTPS implementation.
  - Windows 11 can use DNS-over-HTTPS — that is preferred.
- The launcher can no longer disable hardware acceleration.
  - The new UI framework the launcher uses gains no benefit from disabling hardware acceleration.

## UWP Support Removal

With the client now supporting `26.X`, support for UWP has been entirely removed from the launcher. This means the launcher can no longer interact with UWP builds of the game.

> Consider using alternative tools or upgrading to the latest GDK build.

Please let us know if there are any issues via our [GitHub Issue Tracker](https://github.com/flarialmc/dll/issues) or community support.

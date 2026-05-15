---
title: "CRITICAL LAUNCHER CHANGE - HTTPS Proxy Migration"
date: "2026-01-29"
tag: "Launcher"
---

# CRITICAL LAUNCHER CHANGE

## Changes

- A critical change was made to how the launcher uses proxies such as Cloudflare WARP.
  - If you have updated the launcher and use a proxy: the launcher now uses an **HTTPS proxy** instead of a SOCKS5 proxy.
  - HTTPS proxy support is available in the latest version of Cloudflare WARP.

Please let us know if there are any issues via our [GitHub Issue Tracker](https://github.com/flarialmc/dll/issues) or community support.

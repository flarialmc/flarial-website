---
title: "HOTFIX UPDATE - Chat Watermark & Auto GG Fixes"
date: "2025-09-06"
tag: "Client"
---

# HOTFIX UPDATE 📝

## Bug Fixes 🐛

### Auto GG
- Fixed Auto GG not working on Cubecraft

### ClickGUI
- Now automatically resets the ClickGUI keybind to k when it's unbinded

### Chat Watermark
- Fixed the [FLARIAL] watermark spamming in chat
- Fixed the watermark appearing for players not present in the server/world
- Now supports multiple usernames in a single message
- Added a Single watermark toggle in client settings to prevent flooding in chat (disabled by default)
- Added a Watermark duplicate usernames toggle in client settings to prevent flooding (enabled by default). Turning this off will only watermark the first instance of each username
- Now if you do @username, "username" or @"username", it will add the watermark before the @ and " symbol
  - Eg: @oAnshul -> [FLARIAL] @oAnshul instead of @[FLARIAL] oAnshul
  - Helps preserve the chat "ping" effect

## Caution ⚠️

- There's a lot of edge cases where the [FLARIAL] chat watermark breaks, if you encounter one of these, please reach out so we can fix it

## Notes 📝

- We're aware of Better Hunger bar not aligning with certain texture packs and are working on resolving the issue

Want to submit suggestions? [Suggest here!](https://github.com/flarialmc/dll/issues)

Make sure you're using the beta! Everyone has access!

Please let us know if there are any issues via our [GitHub Issue Tracker](https://github.com/flarialmc/dll/issues) or community support.
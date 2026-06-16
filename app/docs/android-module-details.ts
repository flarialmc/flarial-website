import type { DllCssModuleCategory } from "./dll-css-module-details";

export type AndroidModuleDetail = {
  name: string;
  description: string;
  icon: string;
  settingsCount: number;
  category: DllCssModuleCategory;
  source: string;
};

export const androidModuleDetails = [
  {
    "name": "Armor HUD",
    "description": "Displays the player's worn armor on the HUD.",
    "icon": "/mod-icons/chestplate.png",
    "settingsCount": 33,
    "category": "HUD",
    "source": "ArmorHud"
  },
  {
    "name": "Combo Counter",
    "description": "Tracks your current hit combo.",
    "icon": "/mod-icons/combo.png",
    "settingsCount": 0,
    "category": "HUD",
    "source": "ComboCounter"
  },
  {
    "name": "Coordinates",
    "description": "Displays your current coordinates.",
    "icon": "/mod-icons/coordinates.png",
    "settingsCount": 1,
    "category": "HUD",
    "source": "Coordinates"
  },
  {
    "name": "CPS",
    "description": "Displays clicks per second.",
    "icon": "/mod-icons/cursor.png",
    "settingsCount": 0,
    "category": "HUD",
    "source": "CPS"
  },
  {
    "name": "FPS",
    "description": "Displays frames per second.",
    "icon": "/mod-icons/fps.png",
    "settingsCount": 0,
    "category": "HUD",
    "source": "FPS"
  },
  {
    "name": "Keystrokes",
    "description": "Displays movement keys, mouse buttons, and CPS.",
    "icon": "/mod-icons/keystrokes.png",
    "settingsCount": 38,
    "category": "HUD",
    "source": "Keystrokes"
  },
  {
    "name": "Reach Counter",
    "description": "Displays your last hit distance only. This is not a reach cheat or reach extender.",
    "icon": "/mod-icons/reach.png",
    "settingsCount": 0,
    "category": "HUD",
    "source": "Reach"
  },
  {
    "name": "Speed Meter",
    "description": "Displays your current movement speed.",
    "icon": "/mod-icons/speed.png",
    "settingsCount": 1,
    "category": "HUD",
    "source": "SpeedMeter"
  },
  {
    "name": "Auto Sprint",
    "description": "Automatically sprints while moving forward.",
    "icon": "/mod-icons/auto_sprint.png",
    "settingsCount": 0,
    "category": "Movement",
    "source": "AutoSprint"
  },
  {
    "name": "Quick Perspective",
    "description": "Quickly toggles the camera perspective.",
    "icon": "/mod-icons/perspective.png",
    "settingsCount": 0,
    "category": "Movement",
    "source": "QuickPerspective"
  },
  {
    "name": "Zoom",
    "description": "Zooms the camera with configurable FOV and animation speed.",
    "icon": "/mod-icons/magnify.png",
    "settingsCount": 2,
    "category": "Movement",
    "source": "Zoom"
  },
  {
    "name": "Fullbright",
    "description": "Brightens the game view.",
    "icon": "/mod-icons/fullbright.png",
    "settingsCount": 0,
    "category": "Render",
    "source": "FullBright"
  },
  {
    "name": "Motion Blur",
    "description": "Adds a previous-frame ghosting pass for motion blur.",
    "icon": "/mod-icons/blur.png",
    "settingsCount": 1,
    "category": "Render",
    "source": "MotionBlur"
  }
] as const satisfies readonly AndroidModuleDetail[];

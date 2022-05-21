import EasyDungeonBG from "../src/components/dungeons/backgrounds/easy_dungeon_full.webp";
import MediumDungeonBG from "../src/components/dungeons/backgrounds/medium_dungeon_full.jpeg";
import HardDungeonBG from "../src/components/dungeons/backgrounds/hard_dungeon_full.jpeg";

export const EASY = "Easy";
export const MEDIUM = "Medium";
export const HARD = "Hard";

export const DIFFICULTY_TO_BG_IMAGE = {
  [EASY]: EasyDungeonBG,
  [MEDIUM]: MediumDungeonBG,
  [HARD]: HardDungeonBG
};

export const PROPOSAL_STATUS = {
  NONE: "NONE",
  ONGOING: "ONGOING",
  PASSED: "PASSED",
  FAILED: "FAILED"
};

export const ACCESSORY = 'accessory';
export const ARMOR = 'armor';
export const WEAPON = 'weapon';

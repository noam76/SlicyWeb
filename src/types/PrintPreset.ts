/**
 * Wichy
 * Print Preset Type Definition
 *
 * Based on:
 * - DATA_SCHEMA.md
 * - PRINT_PRESETS_SPEC.md
 * - PRINT_SETTINGS_SPEC.md
 */

export type PresetCategory =
  | "draft"
  | "fast"
  | "balanced"
  | "quality"
  | "ultra_quality"
  | "mechanical"
  | "prototype"
  | "miniature"
  | "support_free"
  | "low_cost";

export interface PresetSettings {
  layerHeight: number;

  wallCount: number;

  topLayers: number;

  bottomLayers: number;

  infillDensity: number;

  infillPattern: string;

  supportEnabled: boolean;

  supportType: string;

  adhesionType: string;

  printSpeed: number;

  fanSpeed: number;
}

export interface PrintPreset {
  name: string;

  category: PresetCategory;

  description: string;

  settings: PresetSettings;
}

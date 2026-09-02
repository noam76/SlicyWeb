/**
 * Wichy
 * Scene Type Definition
 *
 * Based on:
 * - DATA_SCHEMA.md
 * - ARCHITECTURE.md
 */

import type { Printer } from "./Printer";
import type { Material } from "./Material";
import type { Filament } from "./Filament";
import type { PrintPreset } from "./PrintPreset";

export interface Scene {
  objects: string[];

  printer: Printer | null;

  material: Material | null;

  filament: Filament | null;

  preset: PrintPreset | null;
}

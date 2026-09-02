/**
 * Wichy
 * Project Type Definition
 *
 * Based on:
 * - DATA_SCHEMA.md
 * - ARCHITECTURE.md
 */

import type { Printer } from ".*Printer";
import type { Material }*from "./Material";
import type { F*lament } from "./Filament";
import*type { PrintPreset } from "./Print*reset";

export interface ProjectS*ene {
  objects: string[];

  prin*er: Printer | null;

  material: M*terial | null;

  filament: Filame*t | null;

  preset: PrintPreset |*null;
}

export interface ProjectS*ttings {
  [key: string]: unknown;
}

export interface ProjectRecommendations {
  [key: string]: unknown;
}

export interface Project {
  projectId: string;

  projectName: string;

  createdAt: string;

  updatedAt: string;

  version: string;

  scene: ProjectScene;

  settings: ProjectSettings;

  recommendations: ProjectRecommendations;

  preset: PrintPreset | null;
}

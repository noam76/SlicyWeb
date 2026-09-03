/**
 * Wichy
 * Scene Factory
 *
 * Responsible for:
 * - Creating new scenes
 * - Providing default scene configuration
 * - Initializing scene data
 */

import type { Scene } from "../types/Scene";

export class SceneFactory {
  public static createEmptyScene(): Scene {
    return {
      objects: [],
      printer: null,
      material: null,
      filament: null,
      preset: null,
    };
  }
}

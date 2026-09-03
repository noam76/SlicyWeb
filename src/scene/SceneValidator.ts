/**
 * Wichy
 * Scene Validator
 */
import type { Scene } from "../types/Scene";
export class SceneValidator {
  public static validate(scene: Scene | null | undefined): boolean {
    if (!scene) return false;
    return Array.isArray(scene.objects);
  }
  public static canSave(scene: Scene | null | undefined): boolean { return this.validate(scene); }
  public static canLoad(scene: Scene | null | undefined): boolean { return this.validate(scene); }
}

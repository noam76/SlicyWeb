/**
 * Wichy
 * Scene Serializer
 */
import type { Scene } from "../types/Scene";
export class SceneSerializer {
  public static serialize(scene: Scene): string { return JSON.stringify(scene, null, 2); }
  public static deserialize(data: string): Scene { return JSON.parse(data) as Scene; }
}

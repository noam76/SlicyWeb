/**
 * Wichy
 * Scene Manager
 */

import type { Scene } from "../types/Scene";

export class SceneManager {
  private scene: Scene;

  constructor(scene: Scene) {
    this.scene = scene;
  }

  public getScene(): Scene {
    return this.scene;
  }

  public setScene(scene: Scene): void {
    this.scene = scene;
  }
}

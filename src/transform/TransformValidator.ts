/**
 * Wichy
 * Transform Validator Definition
 *
 * Based on:
 * - ARCHITECTURE.md
 * - DATA_SCHEMA.md
 */

import type { Object3D } from "../types/Object3D";

export class TransformValidator {
  public validate(
    object: Object3D
  ): boolean {
    return (
      this.validatePosition(object) &&
      this.validateRotation(object) &&
      this.validateScale(object)
    );
  }

  private validatePosition(
    object: Object3D
  ): boolean {
    return (
      Number.isFinite(
        object.transform.position.x
      ) &&
      Number.isFinite(
        object.transform.position.y
      ) &&
      Number.isFinite(
        object.transform.position.z
      )
    );
  }

  private validateRotation(
    object: Object3D
  ): boolean {
    return (
      Number.isFinite(
        object.transform.rotation.x
      ) &&
      Number.isFinite(
        object.transform.rotation.y
      ) &&
      Number.isFinite(
        object.transform.rotation.z
      )
    );
  }

  private validateScale(
    object: Object3D
  ): boolean {
    return (
      Number.isFinite(
        object.transform.scale.x
      ) &&
      Number.isFinite(
        object.transform.scale.y
      ) &&
      Number.isFinite(
        object.transform.scale.z
      ) &&
      object.transform.scale.x > 0 &&
      object.transform.scale.y > 0 &&
      object.transform.scale.z > 0
    );
  }
}

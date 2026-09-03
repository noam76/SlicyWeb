/**
 * Wichy
 * Object Validator Definition
 *
 * Based on:
 * - ARCHITECTURE.md
 * - DATA_SCHEMA.md
 */

import type { Object3D } from "../types/Object3D";

export class ObjectValidator {
  public validate(object: Object3D): boolean {
    return object.objectId.trim().length > 0 &&
      object.fileName.trim().length > 0 &&
      object.fileType.trim().length > 0;
  }
}

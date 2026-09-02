/**
 * Wichy
 * Object3D Type Definition
 *
 * Based on:
 * - DATA_SCHEMA.md
 */

export interface Position {
  x: number;
  y: number;
  z: number;
}

export interface Rotation {
  x: number;
  y: number;
  z: number;
}

export interface Scale {
  x: number;
  y: number;
  z: number;
}

export interface Transform {
  position: Position;

  rotation: Rotation;

  scale: Scale;
}

export interface Object3D {
  objectId: string;

  fileName: string;

  fileType: string;

  visible: boolean;

  locked: boolean;

  transform: Transform;
}

/**
 * Wichy
 * Object3D Type Definition
 *
 * Based on:
 * - DATA_SCHEMA.md
 * - ARCHITECTURE.md
 */

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface Transform {
  position: Vector3;

  rotation: Vector3;

  scale: Vector3;
}

export interface GeometryInfo {
  width: number;

  depth: number;

  height: number;

  volume: number;

  surfaceArea: number;
}

export interface MeshStatistics {
  vertices: number;

  triangles: number;
}

export interface Object3D {
  objectId: string;

  fileName: string;

  fileType: string;

  visible: boolean;

  locked: boolean;

  transform: Transform;

  geometry: GeometryInfo;

  mesh: MeshStatistics;
}

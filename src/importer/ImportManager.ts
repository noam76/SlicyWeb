/**
 * Wichy
 * Import Manager Definition
 *
 * Based on:
 * - ARCHITECTURE.md
 * - API_SPEC.md
 * - DATA_SCHEMA.md
 */

import type { Object3D } from "../types/Object3D";

export class ImportManager {
  public async importFile(
    file: File
  ): Promise<Object3D | null> {
    const fileName = file.name;

    const fileType =
      this.getFileExtension(fileName);

    if (
      !this.isSupportedFormat(
        fileType
      )
    ) {
      return null;
    }

    return {
      objectId:
        crypto.randomUUID(),

      fileName,

      fileType,

      visible: true,

      locked: false,

      transform: {
        position: {
          x: 0,
          y: 0,
          z: 0
        },

        rotation: {
          x: 0,
          y: 0,
          z: 0
        },

        scale: {
          x: 1,
          y: 1,
          z: 1
        }
      },

      geometry: {
        width: 0,
        depth: 0,
        height: 0,
        volume: 0,
        surfaceArea: 0
      },

      mesh: {
        vertices: 0,
        triangles: 0
      }
    };
  }

  public isSupportedFormat(
    fileType: string
  ): boolean {
    return [
      "stl",
      "3mf"
    ].includes(
      fileType.toLowerCase()
    );
  }

  private getFileExtension(
    fileName: string
  ): string {
    const parts =
      fileName.split(".");

    return (
      parts.pop()?.toLowerCase() ??
      ""
    );
  }
}

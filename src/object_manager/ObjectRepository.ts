/**
 * Wichy
 * Object Repository Definition
 *
 * Based on:
 * - ARCHITECTURE.md
 * - DATA_SCHEMA.md
 */

import type { Object3D } from "../types/Object3D";

export class ObjectRepository {
  private readonly objects = new Map<string, Object3D>();

  public save(object: Object3D): void {
    this.objects.set(object.objectId, object);
  }

  public get(objectId: string): Object3D | undefined {
    return this.objects.get(objectId);
  }

  public getAll(): Object3D[] {
    return Array.from(this.objects.values());
  }

  public exists(objectId: string): boolean {
    return this.objects.has(objectId);
  }

  public remove(objectId: string): void {
    this.objects.delete(objectId);
  }

  public clear(): void {
    this.objects.clear();
  }

  public count(): number {
    return this.objects.size;
  }
}

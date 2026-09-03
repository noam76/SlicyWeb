import type { Object3D } from "../types/Object3D";
export class TransformValidator {
  public static validate(object:Object3D|null|undefined):boolean{
    return Boolean(object);
  }
}

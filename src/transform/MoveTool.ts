import type { Object3D } from "../types/Object3D";
export class MoveTool {
  public static apply(object:Object3D,x:number,y:number,z:number):Object3D{
    return {...object,transform:{...object.transform,position:{x,y,z}}};
  }
}

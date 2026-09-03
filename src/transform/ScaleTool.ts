import type { Object3D } from "../types/Object3D";
export class ScaleTool {
  public static apply(object:Object3D,x:number,y:number,z:number):Object3D{
    return {...object,transform:{...object.transform,scale:{x,y,z}}};
  }
  public static applyUniform(object:Object3D,scale:number):Object3D{
    return this.apply(object,scale,scale,scale);
  }
  public static reset(object:Object3D):Object3D{
    return this.apply(object,1,1,1);
  }
}

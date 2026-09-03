import type { Object3D } from "../types/Object3D";
import { MoveTool } from "./MoveTool";
import { RotateTool } from "./RotateTool";
import { ScaleTool } from "./ScaleTool";
export class TransformManager {
  public static move(object:Object3D,x:number,y:number,z:number){return MoveTool.apply(object,x,y,z);}
  public static rotate(object:Object3D,x:number,y:number,z:number){return RotateTool.apply(object,x,y,z);}
  public static scale(object:Object3D,x:number,y:number,z:number){return ScaleTool.apply(object,x,y,z);}
}

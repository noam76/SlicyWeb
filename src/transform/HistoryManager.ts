export class HistoryManager<T> {
  private readonly history:T[]=[];
  public add(state:T):void{this.history.push(structuredClone(state));}
  public getAll():T[]{return [...this.history];}
  public clear():void{this.history.length=0;}
}

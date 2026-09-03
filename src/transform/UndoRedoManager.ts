export class UndoRedoManager<T> {
  private readonly undoStack:T[]=[];
  private readonly redoStack:T[]=[];
  public push(state:T):void{this.undoStack.push(structuredClone(state));this.redoStack.length=0;}
  public undo(current:T):T|null{if(!this.undoStack.length)return null;this.redoStack.push(structuredClone(current));return this.undoStack.pop()??null;}
  public redo(current:T):T|null{if(!this.redoStack.length)return null;this.undoStack.push(structuredClone(current));return this.redoStack.pop()??null;}
}

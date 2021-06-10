class Todo {
  public id : Number;
  public name : String;
  public done : boolean;

  constructor(id : Number, name : String ,done : boolean){
    this.id = id;
    this.name = name ;
    this.done = done
  }
}

export default Todo

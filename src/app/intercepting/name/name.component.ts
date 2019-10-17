import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit{

  private _name = "";

  @Output() checado = new EventEmitter<string>();

  @Input()
  set name(name: string){
    this._name = "Your name: " + name;
  }

  get name() : string{
    return this._name;
  }

  constructor() { }

  ngOnInit() {
  }

  textCheck(){
    this.checado.emit("Checado"); 
  }

}

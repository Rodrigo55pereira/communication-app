import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intercepting',
  templateUrl: './intercepting.component.html',
  styleUrls: ['./intercepting.component.css']
})
export class InterceptingComponent implements OnInit {

  title: string = "Interceptação de mudanças do input";
  titleChecado: string;
  name = "";

  constructor() { }

  ngOnInit() {
  }
  
  checado(event){
    this.titleChecado = `- ${event}` ;
  }

}

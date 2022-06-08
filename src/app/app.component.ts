import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@ViewChild(ChildComponent)viewdata !:ChildComponent;
title = 'new-project';


role =[
  {id:1,name:"CEO"},
  {id:2,name:"Director"},
  {id:3,name:"Hr"},
  {id:4,name:"Manager"}

]
inputobj={"name":"","mark":"","gender":"","role":""};
CopiedObject = Object.assign({"name":"","mark":"","gender":""}, this.inputobj);

TransferData(inputobj:any){
this.viewdata.updatelist(this.inputobj);

}
}





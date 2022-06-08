import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  child=new FormControl('');
  @Input() objdata:any;
 
  listarray =[{"name":"","mark":""}]
  constructor() { 

  }
  updatelist(obj:any){
   this.listarray.push(obj);
   this.dataSource = new MatTableDataSource<any>(this.listarray);
  }
  public dataSource =new MatTableDataSource<any>([]);
  displayedColumns: string[]=['name','mark','gender','role'];
 
  ngOnInit(): void {
  }
}


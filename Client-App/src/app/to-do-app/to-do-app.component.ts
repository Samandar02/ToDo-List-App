import { Component, OnInit } from '@angular/core';
import { Item } from '../models';
import { ShareItemService } from '../share-item.service';

@Component({
  selector: 'app-to-do-app',
  templateUrl: './to-do-app.component.html',
  styleUrls: ['./to-do-app.component.css']
})
export class ToDoAppComponent implements OnInit {

  constructor(private shareSvc:ShareItemService) { }
  item = new Item();
  items:Item[] = [];
  ngOnInit(): void {
    this.shareSvc.getItem().subscribe(response=>{
      this.items = response;
    })
  }
  saveItem(){
    this.shareSvc.postItem(this.item).subscribe(res=>{
      console.log(this.items)
      this.item = new Item();
      this.items.push(<Item>res);
    })
  }
  deleteItem(index:number,itemId:any){
    this.shareSvc.deleteItem(itemId).subscribe(res=>{
      this.items.splice(index,1)

    })
  }
}

import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {
  items = [];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.fetchData().subscribe(
      (data) => this.items = data
    );
  }

  likeMe(i) {
    if (this.items[i].liked == 0)
      this.items[i].liked = 1;
    else
      this.items[i].liked = 0;
  }

  deleteMe(i) {
    this.items.splice(i,1);
    console.log(i);
  }

}

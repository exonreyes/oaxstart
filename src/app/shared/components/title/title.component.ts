import {Component, Input, OnInit} from '@angular/core';
import {ITitle} from "@shared/components/title/title.metadata";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-title', templateUrl: './title.component.html', styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() data: ITitle = {
    icon_color: "",
    type:'primary',
    text:''
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}

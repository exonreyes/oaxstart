import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {
  public title = {
    nameClassTxtForeground: 'text-white',
    text: 'Grupos registrados',
    icon_color: '',
    icon: 'assets/img/user-group.svg'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
